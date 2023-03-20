jQuery(document).ready(function ($) {
  const voiceBttn = document.querySelector("#voiceButton");
  voiceBttn.addEventListener("click", makeVoiceObj);
  const scanArticleBttn = document.querySelector("#scanArticle");
  scanArticleBttn.addEventListener("click", removeVoice);
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

  function removeVoice() {
    $("#voicesFig").hide();
    $("#voicesHeader").hide();
    if (document.querySelector("#tbody")) $("#tbody").remove(); // remove previous table
    if (document.querySelector("#voicesMessage")) $("#voicesMessage").remove(); // remove previous voicesMessage if there is one
    if (document.querySelector("#quoteNote")) $("#quoteNote").remove(); // remove previous quoteNote if there is one
  }

  // This function will return the total number of words in the inputted text
  function getTotWordCount(element) {
    return element.trim().split(/\s+/).length;
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

  function getPrevOrSubWords(
    quoteStr,
    quoteStartIndex,
    quoteCharCount,
    element
  ) {
    const endPunct = [".", "!", "?"];
    let arrStartIndex;
    let arrStopIndex;
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

  function noPunct(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()“”"]/g, "");
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

  function getSpeakerOptions(doc, prevSpeaker) {
    if (doc === undefined) return prevSpeaker;
    let possibleSpeakers = [];
    for (let i = 0; i < doc.document[0].length; i++) {
      let wrdDoc = doc.document[0][i].text;
      if (!wrdDoc[0].toUpperCase() + wrdDoc.slice(1) === wrdDoc) continue; // if word is not capitalized, continue
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

  function enterQuotes(voiceObj, totNumQuotes) {
    $("#voiceButton").hide();
    let rowNum = -1;
    let rowsHTML = "";
    let speakerTotWrdNums = [];
    let speakerTotQuoteNums = [];
    let allSpeakers = Object.keys(voiceObj);
    let allSpeakersGraphFormat = [];
    // Creating + adding HTML for voices feature
    //   console.log(totNumQuotes);

    const voicesMessage = `<p id="voicesMessage">We found <b>${totNumQuotes}</b> ${
      totNumQuotes === 1 ? `quote` : `quotes`
    }. ${
      totNumQuotes === 0
        ? ""
        : `See our breakdown of these quotes in the table below.</p><p id="quoteNote"><span class="small"><b>Note:</b> All of the intro verbs will be in infinitive form.</span></p>`
    }</p>`;
    // To avoid reproducing header and message, check if they already exist
    //   if (!document.querySelector("#voicesHeader")) {
    //     $("#voicesFig").before(h2VoicesTag);
    //   }
    $("#voicesHeader").show();
    $("#voicesDescrip").show();
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
          // console.log(
          //   name,
          //   voiceObj[name][i],
          //   typeof voiceObj[name][i],
          //   !voiceObj[name][i]
          // );
          let verb = voiceObj[name][i]["verb"];
          let quote = voiceObj[name][i]["quote"];
          let wrdCount = voiceObj[name][i]["wrdCount"];
          rowNum += 1;
          rowsHTML += `<tr id=row${rowNum}><td>${verb}</td><td>${quote}</td><td>${wrdCount}</td></tr>`;
          totWrdCount += wrdCount; // add new quote lengths to total word count
        }
        speakerTotWrdNums.push(totWrdCount); // add total num of words to array
      }

      $("#thead").after('<tbody id="tbody"></tbody>');
      document.querySelector("#tbody").innerHTML = rowsHTML;
      $("#voicesFig").show();
    } else {
      $("#voicesFig").hide();
    }
    $("#voicesDescrip").after(voicesMessage);
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
        //   console.log(quoteStartIndex, quoteMatch, prevOrSubWrds, docVerbs);
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
    enterQuotes(voiceObj, totNumQuotes);
  }
});
