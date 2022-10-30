/* Author: Zineb Oulmakki, Contributer: Tsion Tesfaye*/

// Previous Trope Structure

// var archaismArray = ["primitive", "archaic", "savage", "traditional" , "ancestral", "wild", "barbaric", "underdeveloped", "exotic", "third world", "witchcraft"];

// var tribalismArray = ["tribe", "tribal", "tribalism", "tribalistic", "ethnic", "ethnicity"];

// var corruptionArray = ["regime","regimes","dictator","dictators","strongman","strongmen","corrupt","corruption"];

// var generalizationArray = ["africa","african", "subsaharan africa","sub-saharan africa","continent"];

// var lightArray = ["sunset","sunrise","sunshine","sunlight","sun","glow","light"];

// var natureArray = ["savannah","rain forest","jungle","trees","insect","lion","rhino","hunt","big game"];

// var darknessArray = ["darkness","dark continent","darkest","bleak","hopeless","devastated","ridden","famine","hunger","starvation","disease","epidemic","child soldier","hiv","ebola","rebels","guerilla","war","conflict","armed","weapon","pirate","attack","kill","death","dead","murder","fear","menace","drought","smuggled weapons","smugglers","crime","gang","poor","desperate","ransom","execution","shot","death","pain","suffer","civil war","chaos","refugees","gun","gunshot"];

// New Trope Structure

const conflictAndViolenceArray = [
  "violence",
  "conflict",
  "war",
  "atrocious",
  "atrocity",
  "crime",
  "violent",
  "weapon",
  "insurgency",
  "insurgent",
  "insurgence",
  "chaos",
  "chaotic",
  "arm",
  "terror",
  "flee",
  "militia",
  "outbreak",
  "crisis",
  "brutal",
  "collapse",
  "tension",
  "rebel",
  "genocide",
  "tension",
  "clash",
  "dead",
  "eruption",
  "criminal",
  "terrorism",
  "extremist",
  "abuse",
  "escalation",
  "escalate",
  "rape",
  "sanction",
  "corruption",
  "corrupt",
  "radical",
  "ban",
  "bomb",
  "blood",
  "cease-fire",
  "coup",
  "assault",
  "kidnap",
  "battle",
];

const natureArray = [
  "wildlife",
  "fauna",
  "habitat",
  "habitats",
  "conservation",
  "animals",
  "birds",
  "animal",
  "flora",
  "livestock",
  "hunting",
  "parks",
  "biota",
  "geese",
  "wilderness",
  "wild",
  "park",
  "natural",
  "nature",
  "hunt",
  "camping",
  "wildcat",
  "sauvage",
  "savage",
  "faun",
  "faune",
  "wild-type",
  "waterfowl",
  "deer",
  "bighorn sheep",
  "ecology",
  "biodiversity",
  "forest",
  "conservancy",
  "bald eagle",
  "wildfowl",
  "endangered species",
  "conservationists",
  "raptors",
  "birdlife",
  "wetlands",
  "otters",
  "elk",
  "fisheries",
  "whitetail deer",
  "bighorn",
  "mule deer",
  "capercaillie",
  "waterbirds",
  "poachers",
  "bird sanctuary",
  "ecosystems",
  "grizzlies",
  "reptiles",
  "naturalists",
  "coyotes",
  "marine",
  "waterways",
  "antelope",
  "cougars",
  "river otter",
  "moose",
  "wildflower",
  "ecotourism",
  "seabird",
  "turtles",
  "vegetation",
  "tortoises",
  "gnatcatchers",
  "wood stork",
  "amphibians",
  "wolves",
  "stone curlew",
  "foxes",
  "timber rattlesnake",
  "sacred ibis",
  "tigers",
  "grizzly bear",
  "monarch butterfly",
  "sandhill crane",
  "desert tortoise",
  "goshawk",
  "cirl bunting",
  "leopards",
  "panther",
  "bobcat",
  "alligators",
  "oilbird",
  "safari park",
  "seafowl",
  "bird of passage",
  "zoography",
  "zoological garden",
  "shore bird",
  "plain wanderer",
  "zoo",
  "deer mouse",
  "mammal",
  "dinotherium",
  "bird",
  "conservationist",
  "gallery forest",
  "zoographer",
  "wetland",
  "zoophagy",
  "predatory animal",
  "bird table",
  "sea cow",
  "anhima",
  "tropical rain forest",
  "sea elephant",
  "sea leopard",
  "aquatic bird",
  "birdwatch",
  "zoopathology",
  "wild dog",
  "marine animal",
  "african elephant",
  "sanctuary",
  "indian elephant",
  "woodland",
  "elephant bird",
  "birdling",
  "birdcatching",
  "prairie wolf",
  "rangership",
  "snail darter",
  "hairbird",
  "zoological",
  "wildgrave",
  "kangaroo rat",
  "exotic",
  "indigenous",
  "aquatic",
  "terrestrial",
  "endangered",
  "migratory",
  "coastal",
  "captive",
  "vertebrate",
  "arctic",
  "threatened",
  "fascinating",
  "nocturnal",
  "mammalian",
  "scenic",
  "endemic",
  "ocean",
  "underwater",
  "winged",
  "amazonian",
  "predatory",
  "fish",
  "plants",
  "forests",
  "forestry",
  "soil",
  "timber",
  "cattle",
  "insects",
  "soils",
  "wildlands",
  "wildflowers",
  "pesticides",
  "fishing",
  "extinction",
  "woods",
  "sanctuaries",
  "ecosystem",
  "elephants",
  "mammals",
  "outdoors",
  "ducks",
  "poaching",
  "harvesting",
  "watersheds",
  "decimation",
  "waterfalls",
  "forage",
  "invertebrates",
  "feeding",
  "extermination",
  "pastoralists",
  "shellfish",
  "whales",
  "buffalo",
  "songbirds",
  "eagles",
  "seals",
  "squirrels",
  "hunted",
  "endanger",
  "depleted",
  "inhabit",
  "exterminated",
  "forest ranger",
  "game warden",
  "gamekeeper",
  "park",
  "natural resources",
  "panda",
  "preservationist",
  "preserved",
  "safari",
  "serengeti",
  "agricultural",
  "biosphere",
  "environmental",
  "freshwater",
  "geriatric",
  "herbivores",
  "wildland",
];

const tribalismArray = [
  "ethnic",
  "cultural",
  "tribalism",
  "nomadic",
  "ethnicism",
  "bushmen",
  "tribe",
  "pygmy",
  "ethnicity",
  "tribal",
  "entno",
  "tribalistic",
];

const generalizationArray = [
  "africa",
  "subsaharan africa",
  "african",
  "continent",
  "sub-saharan africa",
];

function hiliter(word, element, tropeClass) {
  /*
		var rgxp = new RegExp("\\b" + word + "?s" + "\\b" , 'gi'); // g modifier for global and i for case insensitive 
		var repl = '<span class="'+ tropeClass +'">' + word + '</span>';
		element.innerHTML = element.innerHTML.replace(rgxp, repl);*/

  var rgxp = new RegExp("\\b" + word + "\\b", "gi"); // g modifier for global and i for case insensitive
  var repl = '<mark class="' + tropeClass + '">' + word + "</mark>";
  element.innerHTML = element.innerHTML.replace(rgxp, repl);

  var rgxpPlural = new RegExp("\\b" + word + "[a-z]*\\b", "gi");
  var replPlural = '<mark class="' + tropeClass + '">' + word + "</mark>";
  element.innerHTML = element.innerHTML.replace(rgxpPlural, replPlural);
}

function hasTrope(trope) {
  return $("mark").classList.contains(trope);
}

$(function run() {
  $("aside").hide();
  $("#resultSummary").hide();
  $("#outputText").hide();
  //   $("#tropeMessage").hide();

  $("#scanArticle").click(function () {
    var rawInput;
    rawInput = document.getElementById("inputText").value;
    rawInput = rawInput.replace(/\n\r?/g, "<br>");
    $("#outputText").html(rawInput);

    for (var i = 0; i < tribalismArray.length; i++) {
      hiliter(tribalismArray[i], document.getElementById("outputText"), "trib");
    }
    for (var i = 0; i < conflictAndViolenceArray.length; i++) {
      hiliter(
        conflictAndViolenceArray[i],
        document.getElementById("outputText"),
        "con"
      );
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

    $("#outputText").show();

    $("#outputText").bind("mousemove", function (e) {
      $("#tropeMessage").css({
        top: e.pageY,
      });
    });

    $(".gen").hover(function () {
      $("aside").hide();
      $("#generalization").show();
      $("#tropeMessage").css("background-color", "#fc846f");
    });

    $(".trib").hover(function () {
      $("aside").hide();
      $("#tribalism").show();
      $("#tropeMessage").css("background-color", "#eaa8d2");
    });

    $(".nat").hover(function () {
      $("aside").hide();
      $("#tropeMessage").css("background-color", "#a7ffa3");
      $("#nature").show();
    });

    $(".con").hover(function () {
      $("aside").hide();
      $("#tropeMessage").css("background-color", "#a8edea");
      $("#conflict").show();
    });

    $("form").hover(function () {
      $("tropeMessage").hide();
    });

    location.href = "#scannedResults";
    $("#resultSummary").html(
      "We've found language in your text that might be reinforcing these harmful tropes about Africa:<br>"
    ); //

    if (hasTrope("con")) {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #a8edea">Conflict<br></span>'
      );
      $("#resultSummary").show();
    }

    if (hasTrope("gen")) {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #fc846f">Generalization<br></span>'
      );
      $("#resultSummary").show();
    }

    if (hasTrope("nat")) {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #a7ffa3">Nature<br></span>'
      );
      $("#resultSummary").show();
    }

    if (hasTrope("trib")) {
      $("#resultSummary").append(
        '<span style="font-weight:bold; border-bottom: 3px solid #eaa8d2">Tribalism<br></span>'
      );
      $("#resultSummary").show();
    }

    $("#resultSummary").append(
      "<br>Hover your mouse on the highlighted words below to learn more about each stereotype!<br>"
    );
  });
});
