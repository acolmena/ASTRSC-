const scanBttn = document.querySelector("#scanArticle");
scanBttn.addEventListener("click", makeVoiceObj);

const introVerbsList = [
  "acknowledge",
  "add",
  "admit",
  // "advis",
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
  // "concentrate",
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
  // "expand on",
  "explain",
  "explore",
  "express",
  "feel",
  "find",
  // "form",
  "focus on",
  "focuses on",
  "focused on",
  //   "identifie",
  "identify",
  "imply",
  "include",
  "incorporate",
  "indicate",
  "insist",
  "interpret",
  "introduce",
  "judge",
  //   "judging",
  "justify",
  "link",
  "list",
  // "locate",
  "maintain",
  "mention",
  "negate",
  "note",
  //   "noting",
  "object to",
  // "objects to",
  // "objected to",
  "observ",
  "offer",
  "oppose",
  "outline",
  "point out",
  // "points out",
  // "pointed out",
  "provide",
  "question",
  "quote",
  //   "quoting",
  "refer to",
  "refers to",
  "referred to",
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
  //   "stating",
  "stress",
  "suggest",
  "tell",
  //   "told",
  "talk about",
  "talks about",
  "talked about",
  "think",
  //   "thought",
  // tend to
  // "treat",
  // try to
  // use
  "underline",
  "underscore",
  // "view",
  "write",
  //   "wrote",
  "goes on to say that",
  "go on to say that",
  "went on to say that",
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

function prevGetPeriodIndex(arrayInputWrds, arrStartIndex) {
  // start searching at beginning of quote and go backwards through array
  for (let i = arrStartIndex; i >= 0; i--) {
    if (arrayInputWrds[i].includes(".")) return i - 1;
  }
}

function subGetPeriodIndex(arrayInputWrds, arrStartIndex) {
  // start searching at beginning of quote and go backwards through array
  for (let i = arrStartIndex; i < arrayInputWrds.length; i++) {
    if (arrayInputWrds[i].includes(".")) return i;
  }
}

function getIntroVerb(docVerbs) {
  // for (let listVerb of introVerbsList) {
  // rgxpPlural = new RegExp(`\\b${listVerb}[a-z]*\\b`, "gi");
  // let verbMatch = prevOrSubWrds.match(rgxpPlural);

  // }
  for (let docVerb of docVerbs) {
    docVerb = noPunct(docVerb);
    if (introVerbsList.includes(docVerb)) return docVerb;
  }
  return undefined;
}

function getPrevOrSubWords(
  quoteMatch,
  quoteStartIndex,
  quoteLength,
  arrayInputWrds
) {
  const endPunct = [".", "!", "?"];
  let arrStartIndex;
  let arrStopIndex;
  // if the 2nd to last char is a period, exclamation mark, or question mark, check prev 20 wrds, else check for subsequent 20 wrds
  if (endPunct.includes(quoteMatch[quoteMatch.length - 2])) {
    // get previous wrds
    console.log("prev");
    arrStopIndex = quoteStartIndex - 1;
    arrStartIndex = prevGetPeriodIndex(arrayInputWrds, arrStopIndex);
  } else {
    // get subsequent wrds
    console.log("subsequent");
    arrStartIndex = quoteStartIndex + quoteLength; // index at which we will start the slice
    arrStopIndex = subGetPeriodIndex(arrayInputWrds, arrStartIndex);
    console.log(arrStartIndex, arrStopIndex);
  }

  return arrayInputWrds.slice(arrStartIndex, arrStopIndex + 1);
}

function getSpeakerOptions(doc) {
  let possibleSpeakers = [];
  for (let i = 0; i < doc.document[0].length; i++) {
    let wrdDoc = doc.document[0][i]["tags"];
    if (
      (wrdDoc.has("ProperNoun") &&
        !wrdDoc.has("Place") &&
        !wrdDoc.has("Date") &&
        !wrdDoc.has("Demonym")) ||
      wrdDoc.has("Pronoun")
    ) {
      possibleSpeakers.push(noPunct(doc.document[0][i].text));
    }
  }
  return possibleSpeakers;
}

function makeVoiceObj() {
  let voiceObj = {};
  let totNumQuotes;
  let element = document.querySelector("#inputText").value;
  let matches = element.match(/(“|")([^("|”)]*)(”|")/gi);
  // let sentenceMatches = element.match(/^[A-Z][^.!?]*[.!?]$/gm);
  // console.log(sentenceMatches);
  let arrayInputWrds = element.trim().split(/\s+/);
  // let sentences = element.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // array of sentences in article
  // const spacy = require("spacy");

  // getEntities();

  if (matches) {
    // console.log(sentences);
    console.log(matches);
    totNumQuotes = matches.length;
    let index;

    for (let quoteMatch of matches) {
      // rule out matches that have <= 3 words
      const quoteLength = getTotWordCount(quoteMatch);
      if (quoteLength < 3) continue;

      const stopIndex = quoteMatch.indexOf(" "); // make index be the index where the space is
      console.log(stopIndex, quoteMatch.substring(0, stopIndex));
      const quoteStartIndex = arrayInputWrds.findIndex(
        (el) => el === quoteMatch.substring(0, stopIndex)
      ); // find index of first word of quote (by ensuring its 1st word match those of the matching word in arrayInputWrds)

      // find the words of the rest of the sentence containing speaker and intro verb
      const prevOrSubWrds = getPrevOrSubWords(
        quoteMatch,
        quoteStartIndex,
        quoteLength,
        arrayInputWrds
      );
      console.log(quoteStartIndex, quoteMatch, prevOrSubWrds);

      // find verb used to introduce them
      const doc = nlp(prevOrSubWrds);
      const docVerbs = doc.verbs().toInfinitive().out("array"); // get all verbs in prev or sub words in sentence of quote
      const introVerb = getIntroVerb(docVerbs);
      //   if (allVerbs.length > 1) {
      //   getIntroVerbs(allVerbs);
      // this method of finding a speaker will help catch speakers when they are not people and/or do not have capitalized names
      // try to find speaker within 6 words before the intro verb

      // find speaker name
      //   const speakerNameOptions = prevOrSubWrds.filter(
      //     (wrd) =>
      //       (wrd[0].toUpperCase() + wrd.substring(1, wrd.length) === wrd &&
      //         wrd.search(/\d/) &&
      //         wrd.length > 2 &&
      //         !africanCountries.includes(noPunct(wrd))) ||
      //       pronouns.includes(wrd)
      //   ); // find first capitalized word
      let speakerNameOptions = getSpeakerOptions(doc); // get all capitalized words
      // let speakerNameOptionsNoPunct = cleanSpeakerArray(speakerNameOptions);

      // if (speakerNameOptionsNoPunct.length === 1) {
      //   speakerNameOptionsNoPunct = speakerNameOptionsNoPunct[0]; // take name out of array if there is just one name
      // }
      speakerNameOptions = speakerNameOptions.join(" ");
      if (!Object.keys(voiceObj).includes(speakerNameOptions))
        voiceObj[speakerNameOptions] = {};
      index = Object.keys(voiceObj[speakerNameOptions]).length; // 0-indexed
      voiceObj[speakerNameOptions][index] = {
        quote: speakerNameOptions !== undefined ? quoteMatch : "━", // add quote to speaker prop
        verb: introVerb !== undefined ? noPunct(introVerb) : "━", // add intro verb to speaker prop
        wrdCount: quoteLength,
      };
    }
  }
  console.log(voiceObj, totNumQuotes);
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
    totNumQuotes ? "" : "See our breakdown of these quotes in the table below." // only show this message if there are quotes in the text
  }</p>`;
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
      // console.log(Object.keys(voiceObj[name]));
      rowsHTML += `<tr id=row${rowNum}><td rowspan=${numQuotesPerSpeaker}>${name}</td><td>${voiceObj[name][0]["verb"]}</td><td>${voiceObj[name][0]["quote"]}</td><td>${voiceObj[name][0]["wrdCount"]}</td></tr>`;
      let totWrdCount = voiceObj[name][0]["wrdCount"];
      for (let i = 1; i < Object.keys(name).length; i++) {
        // loop over quotes of each speaker
        if (!voiceObj[name][i]) continue;
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
    console.log(
      `quote: ${speakerTotQuoteNums}`,
      `wrdNums: ${speakerTotWrdNums}`
    );

    console.log(totNumQuotes);
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
