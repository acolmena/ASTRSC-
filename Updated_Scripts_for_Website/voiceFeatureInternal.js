const scanBttn = document.querySelector("#scanArticle");
scanBttn.addEventListener("click", makeVoiceObj);
const pronouns = ["she", "he", "they", "we"]; // working list
const introVerbsList = [
  "acknowledge",
  "add",
  "admit",
  "advocate",
  "agree",
  "analyze",
  "argue",
  "articulate",
  "assert",
  "believe",
  "claim",
  "comment",
  "compare",
  "conclude",
  "confirm",
  "continue",
  "convey",
  "criticize",
  "define",
  "demonstrate",
  "deny",
  "describe",
  "develop",
  "disagree",
  "discuss",
  "dispute",
  "distinguish",
  "emphasize",
  "endeavour",
  "examine",
  "explain",
  "explore",
  "express",
  "feel",
  "find",
  // "form",
  "identify",
  "imply",
  "include",
  "incorporate",
  "indicate",
  "insist",
  "interpret",
  "introduce",
  "judge",
  "justify",
  "link",
  "list",
  // "locate",
  "maintain",
  "mention",
  "negate",
  "note",
  "observe",
  "offer",
  "oppose",
  "outline",
  "provide",
  "question",
  "quote",
  "refute",
  "reject",
  "relate",
  "remark",
  "report",
  // represent
  "respond",
  "reveal",
  // "see",
  // separate
  // show
  // stand for
  "say",
  "said",
  "state",
  "stress",
  "suggest",
  "tell",
  "think",
  // tend to
  // "treat",
  // try to
  // use
  "underline",
  "underscore",
  // "view",
  "write",
  "recognize",
  "clarify",
  "concede",
  "accept",
  "uncover",
  "highlight",
  "illuminate",
  "support",
  "elucidate",
  "verify",
  "reason", // questionable
  "contend",
  "hypothesize",
  "propose",
  "theorize",
  "consider",
  "opine",
  "posit",
  "show",
  "illustrate",
  "prove",
  // "evidence",
  "attest",
  "assume",
  "allege",
  "speculate",
  "surmise",
  "challenge",
  "critique",
  "declare",
  "uphold",
  "warn",
];

const introVerbPhrases = [
  "go on to say that",
  "talk about",
  "refer to",
  "point out",
  "object to",
  "focus on",
  "expand on",
];

// This function will return the total number of words in the inputted text
function getTotWordCount(element) {
  return element.trim().split(/\s+/).length;
}

function noPunct(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()“”"]/g, "");
}

function cleanSpeakerArray(arr) {
  let newArr = [];
  arr.forEach((el) => newArr.push(noPunct(el)));
  return newArr;
}

function prevGetPeriodIndex(element, startIndex) {
  // start searching at beginning of quote and go backwards through array
  for (let i = startIndex; i >= 0; i--) {
    // make sure you stop before at a period or the beginning of a subsequent quote
    if (element[i].includes("." || '"' || "“")) return i - 1;
  }
}

function subGetPeriodIndex(element, startIndex) {
  // start searching at beginning of quote and go backwards through array
  for (let i = startIndex; i < element.length; i++) {
    // make sure you stop before at a period or the beginning of a subsequent quote
    if (element[i].includes("." || '"' || "“")) return i;
  }
}

function getIntroVerb(docVerbs) {
  // check if there is a longer verb phrase in docVerbs
  // split here rather than output verbs as array with compromise for when compromise incorrectly labels more than 2 words as a verb
  for (let docVerb of docVerbs.split(" ")) {
    docVerb = noPunct(docVerb);
    if (introVerbsList.includes(docVerb)) return docVerb;
  }
  return undefined;
}

function getPrevOrSubWords(quoteStr, quoteStartIndex, quoteCharCount, element) {
  const endPunct = [".", "!", "?"];
  let arrStartIndex;
  let arrStopIndex;
  // console.log(
  //   quoteStr,
  //   quoteStr[quoteStr.length - 2],
  //   endPunct.includes(quoteStr[quoteStr.length - 2])
  // );
  // if the 2nd to last char is a period, exclamation mark, or question mark, check prev 20 wrds, else check for subsequent 20 wrds
  if (endPunct.includes(quoteStr[quoteStr.length - 2])) {
    // get previous wrds
    // console.log("prev");
    arrStopIndex = quoteStartIndex - 1;
    arrStartIndex = prevGetPeriodIndex(element, arrStopIndex);
  } else {
    // get subsequent wrds
    // console.log("subsequent");
    arrStartIndex = quoteStartIndex + quoteCharCount; // index at which we will start the slice
    arrStopIndex = subGetPeriodIndex(element, arrStartIndex);
  }

  return element.substring(arrStartIndex, arrStopIndex + 1);
}

function getSpeakerOptions(doc, prevSpeaker) {
  if (doc === undefined) return prevSpeaker;
  let possibleSpeakers = [];
  for (let i = 0; i < doc.document[0].length; i++) {
    let wrdDoc = doc.document[0][i].text;
    if (
      !wrdDoc[0].toUpperCase() + wrdDoc.substring(1, wrdDoc.length) ===
      wrdDoc
    )
      continue; // if word is not capitalized, continue
    let wrdDocTags = doc.document[0][i]["tags"];
    if (
      (wrdDocTags.has("ProperNoun") &&
        !wrdDocTags.has("Place") &&
        !wrdDocTags.has("Date") &&
        !wrdDocTags.has("Demonym")) ||
      (wrdDocTags.has("Pronoun") && !wrdDocTags.has("Possessive")) ||
      wrdDocTags.has("Person")
    ) {
      possibleSpeakers.push(noPunct(wrdDoc));
    }
  }
  return possibleSpeakers;
}

function makeVoiceObj() {
  let voiceObj = {};
  let element = document.querySelector("#inputText").value;
  let matches = element.matchAll(/(“|")([^["|”]*)(”|")/gi); // .matchAll() returns an iterator
  // let sentenceMatches = element.match(/^[A-Z][^.!?]*[.!?]$/gm);
  // let arrayInputWrds = element.trim().split(/\s+/);
  // let sentences = element.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // array of sentences in article
  let totNumQuotes = 0;
  if (matches) {
    // console.log(matches);
    // totNumQuotes = matches.length;
    let prevSpeaker = "━"; // will be used to connect pronouns to whichever name was previously found
    let index;

    for (let quoteMatch of matches) {
      // rule out matches that have <= 3 words
      const quoteLength = quoteMatch[0].split(" ").length; // word count
      if (quoteLength < 3) continue;

      // find the words of the rest of the sentence containing speaker and intro verb
      const quoteStartIndex = quoteMatch.index; // gets starting index of quote
      const prevOrSubWrds = getPrevOrSubWords(
        quoteMatch[0],
        quoteStartIndex, // gets starting index of quote
        quoteMatch[0].length, // character count
        element // need this to get substring
      );

      // find verb used to introduce them
      const doc = nlp(prevOrSubWrds);
      const docVerbs = doc.verbs().toInfinitive().text(); // get all verbs in prev or sub words in sentence of quote
      console.log(quoteStartIndex, quoteMatch, prevOrSubWrds, docVerbs);
      const introVerb = getIntroVerb(docVerbs);
      let speakerNameOptions = getSpeakerOptions(doc, prevSpeaker); // get all capitalized words

      speakerNameOptions = speakerNameOptions.join(" ");
      if (!speakerNameOptions) speakerNameOptions = "━";
      // if (pronouns.includes(speakerNameOptions))
      //   speakerNameOptions = prevSpeaker;
      if (!Object.keys(voiceObj).includes(speakerNameOptions))
        voiceObj[speakerNameOptions] = {};
      index = Object.keys(voiceObj[speakerNameOptions]).length; // 0-indexed
      voiceObj[speakerNameOptions][index] = {
        quote: speakerNameOptions !== undefined ? quoteMatch[0] : "━", // add quote to speaker prop
        verb: introVerb !== undefined ? noPunct(introVerb) : "━", // add intro verb to speaker prop
        wrdCount: quoteLength,
      };

      prevSpeaker = speakerNameOptions;
      totNumQuotes++;
    }
  }
  // console.table(voiceObj);
  // console.log("tot num quotes:", totNumQuotes);
  //   return [voiceObj, totNumQuotes];
  if (totNumQuotes === undefined) totNumQuotes = 0;
  enterQuotes(voiceObj, totNumQuotes);
}

// helper function that generates 3 random numbers
function randomColorGenerator(min, max) {
  return [
    Math.floor(Math.random() * (max - min)) + min,
    Math.floor(Math.random() * (max - min)) + min,
    Math.floor(Math.random() * (max - min)) + min,
  ];
}

// helper function for enterQuotes()
function randomColorPaletteGenerator(numOfColors) {
  let backgroundColors = [];
  for (let i = 0; i < numOfColors; i++) {
    backgroundColors.push(`'rgb(${randomColorGenerator(0, 255)})'`);
  }
  return backgroundColors;
}

function enterQuotes(voiceObj, totNumQuotes) {
  let rowNum = -1;
  let rowsHTML = "";
  let speakerTotWrdNums = [];
  let speakerTotQuoteNums = [];
  let allSpeakers = Object.keys(voiceObj);
  let allSpeakersGraphFormat = [];
  // Creating + adding HTML for voices feature
  const h2VoicesTag = `<h2 id="voicesHeader">Quotes found</h2>`;
  const voicesMessage = `<p id="voicesMessage">We found <b>${totNumQuotes}</b> quotes. ${
    totNumQuotes === 0
      ? "</p>"
      : `See our breakdown of these quotes in the table below.</p><p id="quoteNote"><span class="small"><b>Note:</b> All of the intro verbs will be in infinitive form.</span></p>`
  }`;
  // To avoid reproducing header and message, check if they already exist
  if (!document.querySelector("#voicesHeader")) {
    $("#voicesFig").before(h2VoicesTag);
  }
  if (totNumQuotes) {
    for (let name of allSpeakers) {
      allSpeakersGraphFormat.push(`'${name}'`);
      rowNum += 1;
      let numQuotesPerSpeaker = Object.keys(voiceObj[name]).length;
      speakerTotQuoteNums.push(numQuotesPerSpeaker); // add num of quotes to array
      rowsHTML += `<tr id=row${rowNum}><td rowspan=${numQuotesPerSpeaker}>${name}</td><td>${voiceObj[name][0]["verb"]}</td><td>${voiceObj[name][0]["quote"]}</td><td>${voiceObj[name][0]["wrdCount"]}</td></tr>`;
      let totWrdCount = voiceObj[name][0]["wrdCount"];
      if (numQuotesPerSpeaker < 2) continue;
      for (let i = 1; i < Object.keys(voiceObj[name]).length; i++) {
        // loop over quotes of each speaker
        console.log(
          name,
          voiceObj[name][i],
          typeof voiceObj[name][i],
          !voiceObj[name][i]
        );
        let verb = voiceObj[name][i]["verb"];
        let quote = voiceObj[name][i]["quote"];
        let wrdCount = voiceObj[name][i]["wrdCount"];
        rowNum += 1;
        rowsHTML += `<tr id=row${rowNum}><td>${verb}</td><td>${quote}</td><td>${wrdCount}</td></tr>`;
        totWrdCount += wrdCount; // add new quote lengths to total word count
      }
      speakerTotWrdNums.push(totWrdCount); // add total num of words to array
    }
    if (document.querySelector("#tbody")) $("#tbody").remove(); // remove previous table
    $("#thead").after('<tbody id="tbody"></tbody>');
    document.querySelector("#tbody").innerHTML = rowsHTML;
    document.querySelector("#voicesMessage") && $("#voicesMessage").remove();
    $("#voicesHeader").after(voicesMessage);

    $("#voicesFig").show();
  } else {
    $("#voicesFig").hide();
  }

  // add charts and their headings
  // speakerPieChartWrdNumHtml = `<script id="wrdNumChartScript">
  //     var ctx = document.getElementById('wordNumChart').getContext('2d');
  //     var chart = new Chart(ctx, {
  //         // The type of chart we want to create
  //         type: 'doughnut',

  //         // The data for our dataset
  //         data: {
  //             labels: [${allSpeakersGraphFormat}],  // speaker name
  //             datasets: [{
  //                 label: ' Total # Words Per Speaker',
  //                 borderColor: '#ffffff',
  //                 borderWidth: '6',
  //                 backgroundColor: [${randomColorPaletteGenerator(
  //                   allSpeakersGraphFormat.length
  //                 )}],
  //                 data: [${speakerTotWrdNums}],  // sum of all words spoken by speaker
  //             }]
  //         },

  //         // Configuration options go here
  //         options: {}
  //     });
  //     </script>`;
  // speakerPieChartQuoteNumHtml = `<script id="quotesChartScript">
  //     var ctx = document.getElementById('quoteNumChart').getContext('2d');
  //     var chart = new Chart(ctx, {
  //         // The type of chart we want to create
  //         type: 'doughnut',

  //         // The data for our dataset
  //         data: {
  //             labels: [${allSpeakersGraphFormat}],  // speaker name
  //             datasets: [{
  //                 label: ' Total # Quotes Per Speaker',
  //                 borderColor: '#ffffff',
  //                 borderWidth: '6',
  //                 backgroundColor: [${randomColorPaletteGenerator(
  //                   allSpeakersGraphFormat.length
  //                 )}],
  //                 data: [${speakerTotQuoteNums}],  // sum quotes by each speaker
  //             }]
  //         },

  //         // Configuration options go here
  //         options: {}
  //     });
  //     </script>`;
  // let h4tags = [
  //   "<h4><b>Breakdown of Speakers' Total Number of Words</b></h4>",
  //   "<h4><b>Breakdown of Speaker's Total Number of Quotes</b></h4>",
  // ];
  // if (document.querySelector("#wrdNumChartScript")) {
  //   $("#wrdNumChartScript").remove(); // remove previous plotting script
  //   $("#quoteChartScript").remove(); // remove previous plotting script
  // }
  // $("#wordNumChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
  // $("#quoteNumChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
  // $("#chart2CDNScript").before('<canvas id="wordNumChart"></canvas>');
  // $("#chart3CDNScript").before('<canvas id="quoteNumChart"></canvas>');
  // if (!document.querySelector("h4")) {
  //   // insert headings if not already there
  //   $("#wordNumChart").before(h4tags[0]);
  //   $("#quoteNumChart").before(h4tags[1]);
  // }
  // $("#chart2CDNScript").after(speakerPieChartWrdNumHtml);
  // $("#chart3CDNScript").after(speakerPieChartQuoteNumHtml);
}
