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

function getPrevOrSubWords(
  quoteMatch,
  quoteStartIndex,
  quoteLength,
  arrayInputWrds
) {
  const endPunct = [".", "!", "?"];
  let arrStartIndex;
  let arrStopIndex;
  // if the 2nd to last char is not a period, exclamation mark, or question mark, check for subsequent 20 wrds, else check prev 20 wrds
  if (!endPunct.includes(quoteMatch[quoteMatch.length - 2])) {
    // get subsequent wrds
    console.log("subsequent");
    arrStartIndex = quoteStartIndex + quoteLength; // index at which we will start the slice
    arrStopIndex = subGetPeriodIndex(arrayInputWrds, arrStartIndex);

    // arrayInputWrds.findIndex(
    //   (el, arrStartIndex) => el.includes(".")

    // );
    console.log(arrStartIndex, arrStopIndex);
  } else {
    // get previous wrds
    console.log("prev");

    // arrStartIndex = quoteStartIndex - 30;
    // arrStopIndex = quoteStartIndex;
    arrStopIndex = quoteStartIndex - 1;
    arrStartIndex = prevGetPeriodIndex(arrayInputWrds, arrStopIndex);
  }

  return arrayInputWrds.slice(arrStartIndex, arrStopIndex + 1);
}

function makeVoiceObj(element, verbList) {
  let voiceObj = {};
  let totNumQuotes;
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

      const introVerb = prevOrSubWrds.find((wrd) =>
        verbList.includes(noPunct(wrd))
      ); // find verb used to introduce them

      // find speaker name
      const speakerNameOptions = prevOrSubWrds.filter(
        (wrd) =>
          (wrd[0].toUpperCase() + wrd.substring(1, wrd.length) === wrd &&
            wrd.search(/\d/) &&
            wrd.length > 2 &&
            !africanCountries.includes(noPunct(wrd))) ||
          pronouns.includes(wrd)
      ); // find first capitalized word
      let speakerNameOptionsNoPunct = cleanSpeakerArray(speakerNameOptions);

      // if (speakerNameOptionsNoPunct.length === 1) {
      //   speakerNameOptionsNoPunct = speakerNameOptionsNoPunct[0]; // take name out of array if there is just one name
      // }
      speakerNameOptionsNoPunct = speakerNameOptionsNoPunct.join(" ");
      if (!Object.keys(voiceObj).includes(speakerNameOptionsNoPunct))
        voiceObj[speakerNameOptionsNoPunct] = {};
      index = Object.keys(voiceObj[speakerNameOptionsNoPunct]).length; // 0-indexed
      voiceObj[speakerNameOptionsNoPunct][index] = {
        quote: speakerNameOptionsNoPunct !== undefined ? quoteMatch : "━", // add quote to speaker prop
        verb: introVerb !== undefined ? noPunct(introVerb) : "━", // add intro verb to speaker prop
        wrdCount: quoteLength,
      };
    }
  }
  //   return [voiceObj, totNumQuotes];
  enterQuotes(voiceObj);
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

function enterQuotes(voiceObj) {
  let rowNum = -1;
  let rowsHTML = "";
  let speakerTotWrdNums = [];
  let speakerTotQuoteNums = [];
  let allSpeakers = Object.keys(voiceObj);
  let allSpeakersGraphFormat = [];
  for (let name of allSpeakers) {
    // loop over speakers
    // console.log(voiceObj[name]);
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
  $("#thead").after('<tbody id="tbody"></tbody>');
  // console.log(rowsHTML);
  document.querySelector("#tbody").innerHTML = rowsHTML;
  console.log(`quote: ${speakerTotQuoteNums}`, `wrdNums: ${speakerTotWrdNums}`);
  // add charts and their headings
  speakerPieChartWrdNumHtml = `<script id="wrdNumChartScript">
      var ctx = document.getElementById('wordNumChart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'doughnut',
      
          // The data for our dataset
          data: {
              labels: [${allSpeakersGraphFormat}],  // speaker name
              datasets: [{
                  label: ' Total # Words Per Speaker',
                  borderColor: '#ffffff',
                  borderWidth: '6',
                  backgroundColor: [${randomColorPaletteGenerator(
                    allSpeakersGraphFormat.length
                  )}],
                  data: [${speakerTotWrdNums}],  // sum of all words spoken by speaker 
              }]
          },
      
          // Configuration options go here
          options: {}
      });
      </script>`;
  speakerPieChartQuoteNumHtml = `<script id="quotesChartScript">
      var ctx = document.getElementById('quoteNumChart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'doughnut',
      
          // The data for our dataset
          data: {
              labels: [${allSpeakersGraphFormat}],  // speaker name
              datasets: [{
                  label: ' Total # Quotes Per Speaker',
                  borderColor: '#ffffff',
                  borderWidth: '6',
                  backgroundColor: [${randomColorPaletteGenerator(
                    allSpeakersGraphFormat.length
                  )}],
                  data: [${speakerTotQuoteNums}],  // sum quotes by each speaker
              }]
          },
      
          // Configuration options go here
          options: {}
      });
      </script>`;
  let h4tags = [
    "<h4><b>Breakdown of Speakers' Total Number of Words</b></h4>",
    "<h4><b>Breakdown of Speaker's Total Number of Quotes</b></h4>",
  ];
  if (document.querySelector("#wrdNumChartScript")) {
    $("#wrdNumChartScript").remove(); // remove previous plotting script
    $("#quoteChartScript").remove(); // remove previous plotting script
  }
  $("#wordNumChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
  $("#quoteNumChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
  $("#chart2CDNScript").before('<canvas id="wordNumChart"></canvas>');
  $("#chart3CDNScript").before('<canvas id="quoteNumChart"></canvas>');
  if (!document.querySelector("h4")) {
    // insert headings if not already there
    $("#wordNumChart").before(h4tags[0]);
    $("#quoteNumChart").before(h4tags[1]);
  }
  $("#chart2CDNScript").after(speakerPieChartWrdNumHtml);
  $("#chart3CDNScript").after(speakerPieChartQuoteNumHtml);
}

const scanBttn = document.querySelector("#scanArticle");
scanBttn.addEventListener("click", voiceFunction);
