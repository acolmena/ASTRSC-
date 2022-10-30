/* Author: Zineb Oulmakki*/
jQuery(document).ready(function ($) {
  var whitelistArray = [
    "African studies",
    "African Union",
    "South Africa",
    "South African",
    "South Africans",
    "West Africa",
    "North Africa",
    "East Africa",
    "Southern Africa",
  ];

  var archaismArray = [
    "ancestral",
    "archaic",
    "barbaric",
    "exotic",
    "exotica",
    "primitive",
    "savage",
    "third world",
    "traditional",
    "underdeveloped",
    "native",
    "wild",
    "witchcraft",
  ];

  var tribalismArray = [
    "ethnic",
    "ethnicity",
    "tribal",
    "tribalism",
    "tribalist",
    "tribalistic",
    "tribe",
    "tribesmen",
    "tribesman",
    "tribeswomen",
    "tribeswoman",
  ];

  var corruptionArray = [
    "corrupt",
    "corruption",
    "dictator",
    "regime",
    "strongman",
    "strongmen",
    "tyrant",
  ];

  var generalizationArray = [
    "Africa",
    "African",
    "continental",
    "continent-wide",
    "continent",
    "subsaharan africa",
    "sub-Saharan Africa",
  ];

  var lightArray = [
    "sun",
    "sunlight",
    "sunrise",
    "sunset",
    "sunray",
    "sunshine",
    "dawn",
    "sundown",
  ];

  var natureArray = [
    "big game",
    "hunt",
    "insect",
    "jungle",
    "lion",
    "monkey",
    "rain forest",
    "rhino",
    "safari",
    "savannah",
    "tree",
  ];

  var darknessArray = [
    "armed",
    "attack",
    "bleak",
    "chaos",
    "child soldier",
    "civil war",
    "conflict",
    "crime",
    "crisis",
    "dark continent",
    "darkest",
    "darkness",
    "dead",
    "death",
    "desolate",
    "desperate",
    "devastated",
    "disease",
    "drought",
    "ebola",
    "epidemic",
    "execution",
    "famine",
    "fear",
    "gang",
    "guerilla",
    "gun",
    "gunshot",
    "HIV",
    "hopeless",
    "hunger",
    "kidnap",
    "kidnapped",
    "kill",
    "killed",
    "menace",
    "murder",
    "murdered",
    "murderer",
    "pain",
    "pirate",
    "poor",
    "ransom",
    "rebel",
    "rebellion",
    "refugee",
    "ridden",
    "smuggled weapon",
    "smuggler",
    "starvation",
    "suffer",
    "suffering",
    "violence",
    "war",
    "weapon",
  ];

  function hiliter(word, element, tropeClass) {
    var rgxp = new RegExp("\\b" + word + "\\b", "gi"); // g modifier for global and i for case insensitive
    var repl = '<mark class="' + tropeClass + '">' + word + "</mark>";
    element.innerHTML = element.innerHTML.replace(rgxp, repl);

    var rgxpPlural = new RegExp("\\b" + word + "s\\b", "gi");
    var replPlural = '<mark class="' + tropeClass + '">' + word + "s</mark>"; //check for plural of words
    element.innerHTML = element.innerHTML.replace(rgxpPlural, replPlural);
  }

  function hasTrope(trope) {
    return $("mark").hasClass(trope).toString();
  }

  /*$(function run() {*/

  $("aside").hide();
  $("#resultSummary").hide();
  $("#outputText").hide();
  $("#tropeMessage").hide();

  $("#scanArticle").click(function () {
    var rawInput;
    rawInput = document.getElementById("inputText").value;
    rawInput = rawInput.replace(/\n\r?/g, "<br>");
    $("#outputText").html(rawInput);

    for (var i = 0; i < whitelistArray.length; i++) {
      hiliter(whitelistArray[i], document.getElementById("outputText"), "wl");
    }

    for (var i = 0; i < archaismArray.length; i++) {
      hiliter(archaismArray[i], document.getElementById("outputText"), "arc");
    }
    for (var i = 0; i < tribalismArray.length; i++) {
      hiliter(tribalismArray[i], document.getElementById("outputText"), "trib");
    }
    for (var i = 0; i < corruptionArray.length; i++) {
      hiliter(corruptionArray[i], document.getElementById("outputText"), "cor");
    }
    for (var i = 0; i < darknessArray.length; i++) {
      hiliter(darknessArray[i], document.getElementById("outputText"), "dar");
    }
    for (var i = 0; i < lightArray.length; i++) {
      hiliter(lightArray[i], document.getElementById("outputText"), "lig");
    }
    for (var i = 0; i < generalizationArray.length; i++) {
      hiliter(
        generalizationArray[i],
        document.getElementById("outputText"),
        "gen"
      );
    }
    for (var i = 0; i < natureArray.length; i++) {
      hiliter(natureArray[i], document.getElementById("outputText"), "nat");
    }

    var whitelistedWords = document.getElementsByClassName("wl"); // Find the elements
    var rgxpTropeTag = /gen|arc|cor|trib|nat|lig|dar/i;
    for (var i = 0; i < whitelistedWords.length; i++) {
      whitelistedWords[i].innerHTML = whitelistedWords[i].innerHTML.replace(
        rgxpTropeTag,
        "wl"
      ); // Change the content
    }

    $("#outputText").show();
    $("mark").bind("mousemove", function (e) {
      $("#tropeMessage").css({
        top: e.pageY,
      });
    });

    $("html").click(function (closeMessage) {
      if (!($(closeMessage.target).closest("#tropeMessage").length > 0)) {
        if ($("#tropeMessage").is(":visible")) {
          $("#tropeMessage").hide();
        }
      }
    });

    /* $("#tropeMessage").click(function(){
           if($('#tropeMessage').is(":visible")){
             $("#tropeMessage").hide();
           }
          });*/

    $(".gen").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#generalization").show();
      $("#tropeMessage").css("background-color", "#F4B0A4");
    });

    $(".trib").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tribalism").show();
      $("#tropeMessage").css("background-color", "#C1BDEF");
    });

    $(".nat").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", "#a7ffa3");
      $("#nature").show();
    });

    $(".lig").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", "#fff587");
      $("#light").show();
    });

    $(".dar").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", "#c4bfbc");
      $("#darkness").show();
    });

    $(".cor").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", "#a8edea");
      $("#corruption").show();
    });

    $(".arc").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", "#ffc682");
      $("#archaism").show();
    });

    //location.href = "#scannedResults";

    $("#resultSummary").html(
      "We've found language in your text that might be reinforcing these harmful tropes about Africa:<br>"
    ); //
    if (hasTrope("arc") === "true") {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #ffc682">Archaism<br></span>'
      );
      $("#resultSummary").show();
    }
    if (hasTrope("cor") === "true") {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #a8edea">Corruption<br></span>'
      );
      $("#resultSummary").show();
    }
    if (hasTrope("dar") === "true") {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #c4bfbc">Darkness<br></span>'
      );
      $("#resultSummary").show();
    }
    if (hasTrope("gen") === "true") {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #F4B0A4">Generalization<br></span>'
      );
      $("#resultSummary").show();
    }
    if (hasTrope("lig") === "true") {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #fff587">Light<br></span>'
      );
      $("#resultSummary").show();
    }
    if (hasTrope("nat") === "true") {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #a7ffa3">Nature<br></span>'
      );
      $("#resultSummary").show();
    }
    if (hasTrope("trib") === "true") {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #C1BDEF">Tribalism<br></span>'
      );
      $("#resultSummary").show();
    }
    $("#resultSummary").append(
      "<br>Hover your mouse on the highlighted words below to learn more about each stereotype!<br>"
    );
  });

  $("#scanArticle").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".scrollTo").offset().top,
      },
      "slow"
    );
  });
});
