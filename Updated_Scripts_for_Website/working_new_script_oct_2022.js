/* Author: Zineb Oulmakki, Contributers: Tsion Tesfaye, Anabelle Colmenares*/

jQuery(document).ready(function ($) {
  // Previous Trope Structure

  // var archaismArray = ["primitive", "archaic", "savage", "traditional" , "ancestral", "wild", "barbaric", "underdeveloped", "exotic", "third world", "witchcraft"];

  // var tribalismArray = ["tribe", "tribal", "tribalism", "tribalistic", "ethnic", "ethnicity"];

  // var corruptionArray = ["regime","regimes","dictator","dictators","strongman","strongmen","corrupt","corruption"];

  // var generalizationArray = ["africa","african", "subsaharan africa","sub-saharan africa","continent"];

  // var lightArray = ["sunset","sunrise","sunshine","sunlight","sun","glow","light"];

  // var natureArray = ["savannah","rain forest","jungle","trees","insect","lion","rhino","hunt","big game"];

  // var darknessArray = ["darkness","dark continent","darkest","bleak","hopeless","devastated","ridden","famine","hunger","starvation","disease","epidemic","child soldier","hiv","ebola","rebels","guerilla","war","conflict","armed","weapon","pirate","attack","kill","death","dead","murder","fear","menace","drought","smuggled weapons","smugglers","crime","gang","poor","desperate","ransom","execution","shot","death","pain","suffer","civil war","chaos","refugees","gun","gunshot"];

  // New Trope Structure

  const generalizationArray = ["subsaharan", "continent", "sub-saharan"];

  const tribalismArray = [
    "ethnic",
    "nomad",
    "bushmen",
    "tribe",
    "pygmy",
    "tribal",
    "clan",
  ];

  // const exceptions = [
  //   "conflicting",
  //   "conflicted",
  //   "feedback",
  //   "aiding",
  //   "lionel",
  //   "armstrong",
  // ];

  const whitelistArray = [
    "pan-african",
    "pan african",
    "african studies",
    "african union",
    "south africa",
    "west africa",
    "north africa",
    "east africa",
    "southern africa",
    "northern africa",
    "eastern africa",
    "western africa",
    "african american",
    "central african republic",
    "central africa",
    "african national congress",
    "africanize",
    "african development bank group",
    "great star of africa",
    "world resources institute africa",
    "power shift africa",
    "scramble for africa",
    "black african",
    "african-american",
    "french equitorial africa",
    "horn of africa",
  ];

  const conflictAndViolenceArray = [
    "gbv",
    "gender-based violence",
    "gender based violence",
    "conflict",
    "coup d'etat",
    "civil war",
    "smuggled weapons",
    "atroc",
    "crime",
    "insurg",
    "chao",
    "terror",
    "flee",
    "outbreak",
    "crisis",
    "crises",
    "brutal",
    "collaps",
    "tension",
    "rebel",
    "genocid",
    "clash",
    "dead",
    "erupt",
    "crimin",
    "abus",
    "escal",
    "rape",
    "sanction",
    "corrupt",
    "radic",
    "bomb",
    "blood",
    "cease-fir",
    "assault",
    "kidnap",
    "battl",
    "abduct",
    "aggressor",
    "ambush",
    "anarch",
    "assassin",
    "attack",
    "authoritarian",
    "brigad",
    "carnag",
    "casualt",
    "counterterror",
    "decimat",
    "destabil",
    "destroy",
    "destruct",
    "dictator",
    "die",
    "death",
    "disast",
    "emergency",
    "emergencies",
    "enemy",
    "enemies",
    "exil",
    "explod",
    "explos",
    "extremis",
    "famin",
    "fascist",
    "fatal",
    "foment",
    "fighter",
    "gang",
    "grenad",
    "grim",
    "gun",
    "harass",
    "harrow",
    "horrif",
    "horror",
    "hostag",
    "hostil",
    "imprison",
    "instab",
    "jail",
    "loot",
    "lynch",
    "massacr",
    "milit",
    "missil",
    "murder",
    "overthr",
    "paramilitar",
    "paratroop",
    "persecut",
    "pillag",
    "prison",
    "raid",
    "ravag",
    "retali",
    "riot",
    "shoot",
    "slaughter",
    "child soldier",
    "suffer",
    "traffick",
    "tortur",
    "troop",
    "unrest",
    "fled",
    "ransom",
    "bandit",
    "air strike",
    "airstrike",
    "arrest",
    "intimidation",
    "accus",
    "victim",
    "inmate",
    "pain",
    "tyranny",
    "bribe",
    "extort",
    "cartel",
    "repress",
    "suppress",
    "dying",
    "malnourish",
    "starv",
    "displace",
    "topple",
    "harm",
    "artillery",
    "mass execut",
    "guerilla",
    "detention camp",
  ];

  const conAndVioDupesArray = [
    "arm",
    "kill",
    "violen",
    "smuggl",
    "weapon",
    "soldier",
    "execut",
  ];

  const conAndVioProbArray = ["ban", "bans", "banned", "banning"];

  const conAndVioDupeAndProbArray = [
    "war",
    "wars",
    "warring",
    "warfare",
    "warship",
    "wartime",
    "warzone",
    "warzones",
    "coup",
    "coups",
  ];

  const natureArray = [
    "jungle",
    "big game",
    "wildlif",
    "fauna",
    "habitat",
    "conservatio",
    "animal",
    "livestock",
    "safari park",
    "biota",
    "egyptian gees",
    "egyptian goos",
    "natur",
    "camping",
    "wildcat",
    "savag",
    "wild-typ",
    "waterfowl",
    "barbary stag",
    "ecolog",
    "biodivers",
    "wildfowl",
    "endangered speci",
    "raptor",
    "wetland",
    "spotted necked ott",
    "african clawless ott",
    "congo clawless ott",
    "eurasian ott",
    "waterbird",
    "bird sanctuar",
    "ecosystem",
    "reptil",
    // "naturalist",
    "waterway",
    // "wildflow",
    "ecotour",
    "seabird",
    "african spurred tortois",
    "amphibian",
    "wolves",
    "stone curlew",
    "african sacred ibi",
    "african monarch butterfl",
    "plain tig",
    // "african monarch",
    "african goshawk",
    "cirl bunt",
    "seafowl",
    "bird of passag",
    "african black oystercatch",
    "water thick-kne",
    "white-fronted plov",
    "blacksmith plov",
    "common sandpip",
    "zoo",
    "mammal",
    "gallery forest",
    "sea cow",
    "manate",
    "tropical rain forest",
    "sea eleph",
    "elephant seal",
    "sea leopard",
    // "african wild dog",
    "marine anim",
    "african eleph",
    "miombo woodland",
    "elephant bird",
    "rangership",
    "wildgrav",
    "exotic",
    "aquat",
    "vertebr",
    "scenic",
    "endemic",
    "ocean",
    "underwat",
    "predator",
    "soil",
    "wildland",
    "extinct",
    "poach",
    "watersh",
    "waterfal",
    "invertebr",
    "extermin",
    "shellfish",
    "african buffalo",
    "songbird",
    "forest rang",
    "game warden",
    "gamekeep",
    "preservationist",
    "biospher",
    "environment",
    "herbivor",
    // "pygmy hippo",
    "ladybug",
    "golden eagl",
    "oranda goldfish",
    "cheetah",
    "rabbit",
    "scorpion",
    "critically endang",
    "comet moth",
    "bongo",
    "northern white rhino",
    "madagascar cockroach",
    "dolphin",
    "eastern green mamba",
    "night heron",
    "twig snak",
    "ostrich",
    "flycatch",
    "vervet monkey",
    "angelshark",
    "olive baboon",
    // "green bee eat",
    "flamingo",
    "shrimp",
    "fiddler crab",
    "dove",
    "jumping spid",
    "carpet vip",
    "horsefl",
    "jackson's chameleon",
    "donkey",
    "mosquito",
    "sparrow",
    "macaqu",
    "short-eared owl",
    "dragonfl",
    "chimp",
    // "suni",
    "cape buffalo",
    "striped hyena",
    "mountain gorilla",
    "madagascar hissing cockroach",
    "african civet",
    "cuckoo",
    "nile crocodil",
    "horned add",
    // "cape elephant shrew",
    "guinea fowl",
    "brown hyena",
    "yellow cobra",
    "pig",
    "warbler",
    "woodpeck",
    "wild boar",
    "snake",
    "hammerhead",
    "liger",
    "extirp",
    "bumblebe",
    "jellyfish",
    "southeastern black rhino",
    "peacock",
    "radiated tortois",
    "eurasian jay",
    "sardin",
    "wild cat",
    "springbok",
    "jackal",
    "sea eagl",
    "cross river gorilla",
    "hoopo",
    "water buffalo",
    "common furniture beetl",
    "zebu",
    "scimitar-horned oryx",
    "kingfish",
    // "african
    "tree toad",
    "impala",
    "gerbil",
    "vinegaroon",
    "biscuit beetl",
    // "devil's coach horse beetl",
    "lesser kudu",
    "gnat",
    "bird snak",
    "ring-tailed lemur",
    "huntsman spid",
    "bichir",
    "common wildebeest",
    "egyptian cobra",
    "egyptian asp",
    "linnet",
    "griffon vultur",
    "porcupin",
    "forest cobra",
    "egyptian tortois",
    "spider ball python",
    "forest hog",
    "african penguin",
    "dusky shark",
    "mole snak",
    "madagascar jacana",
    "termit",
    "chicken",
    "moorhen",
    "african grey parrot",
    "graylag goos",
    "red deer",
    "wryneck",
    "lionfish",
    "golden oriol",
    "stick insect",
    "aardvark",
    "european polecat",
    // "african bush eleph",
    "red kit",
    // "grey mouse lemur",
    "false widow spid",
    "lechwe antelop",
    "crested cran",
    "blue whal",
    "puku",
    "bald eagl",
    "orb weav",
    "vine snak",
    "skink lizard",
    "king cobra",
    "sheep",
    "pheasant",
    "horned vip",
    "bat-eared fox",
    "silky shark",
    "dik-dik",
    "fossa",
    "tiger beetl",
    "manta ray",
    "xerus",
    "camel",
    "quail",
    "okapi",
    "senegal parrot",
    "marabou stork",
    "achrioptera manga",
    "brown bear",
    "desert rain frog",
    "river turtl",
    "african palm civet",
    "african gray parrot",
    "stiletto snak",
    "carac",
    "honey badg",
    "nigerian goat",
    "rock hyrax",
    "peregrine falcon",
    "crane",
    "song thrush",
    "fire ball python",
    "electric catfish",
    "lappet-face vultur",
    "banana spid",
    "bush bab",
    "marlin",
    "hamadryas baboon",
    "nyala",
    "bushbab",
    "galago",
    "woodlouse spid",
    "spotted hyena",
    "kestrel",
    "satanic leaf-tailed gecko",
    "goldcrest",
    "scimitar oryx",
    "desert warthog",
    "barracuda",
    "grasshopp",
    "coton de tulear",
    "egyptian mau",
    "red spitting cobra",
    "hedgehog",
    "duiker",
    "bonobo",
    "housefl",
    "sand vip",
    "mozambique spitting cobra",
    "common hippo",
    "goliath beetl",
    "porpois",
    "oribi",
    "hamster",
    "bearded vultur",
    // "green bee-eat",
    "fennec fox",
    "gembsok oryx",
    "waterbuck",
    "dumeril's boa",
    "indri",
    "brown dog tick",
    "common carp",
    "galapagos shark",
    "grant's gazell",
    "axanthic ball python",
    "african lion",
    "grey heron",
    "rooster",
    "parakeet",
    "african golden cat",
    "lappet-faced vultur",
    "strawberry hermit crab",
    "redstart",
    "black widow spid",
    "gnu",
    "lichtenstein's hartebeest",
    "fruit bat",
    // "orange
    "baboon tarantula",
    "patas monkey",
    "weasel",
    "uromastyx",
    "sea turtl",
    "agama lizard",
    "turaco",
    "egyptian vultur",
    "saturniidae moth",
    "sunset ball python",
    "addra gazell",
    "thomson's gazell",
    "blind snak",
    "lavender albino ball python",
    "abyssinian",
    "goliath tigerfish",
    "eastern lowland gorilla",
    "sable bul",
    "sable antelop",
    "european goldfinch",
    "cichlid",
    "whinchat",
    "banana cinnamon ball python",
    "mice",
    "western lowland gorilla",
    "eland",
    "giant ground pangolin",
    "brown-banded cockroach",
    "zonkey",
    "sei whal",
    "slug",
    "african jacana",
    "african bullfrog",
    "dugong",
    "sand cat",
    // "hawk moth caterpillar",
    "yellowfin tuna",
    "roan",
    "ibex",
    // "madagascar tree boa",
    // "african forest eleph",
    "orange dream ball python",
    "viper",
    "ethiopian wolf",
    "yellow mongoos",
    "bontebok",
    "aidi",
    "sperm whal",
    "kitefin shark",
    "tarantula hawk",
    "rodent",
    "praying manti",
    "meerkat",
    "black panth",
    "minke whal",
    "coryphodon",
    "honey bee",
    "cicada",
    "eel catfish",
    "white ferret",
    "albino ferret",
    "greater kudu",
    // "africanized bee",
    "killer bee",
    "mallard",
    "gerenuk",
    "waller's gazell",
    "kori bustard",
    "dwarf crocodil",
    "fin whal",
    "pufferfish",
    "dormous",
    // "spiny bush vip",
    "tsetse fl",
    "glow worm",
    // "bale mountain vervet",
    "vanga",
    "european robin",
    "rock python",
    "anteat",
    "red fox",
    "peringuey's add",
    // "bloodhound",
    // "european bee-eat",
    "steinbok",
    "goliath frog",
    "fulvous whistling duck",
    "hornbil",
    "crab spid",
    "bed bug",
    "spider wasp",
    "snouted cobra",
    "humpback whal",
    "avocet",
    "flea",
    "myna bird",
    // "african savannah eleph",
    "hare",
    "reedbuck",
    "shoebill stork",
    "caecilian",
    "pike",
    "dung beetl",
    "codling moth",
    "beisa oryx",
    "brahminy blindsnak",
    "western gorilla",
    "cape bushbuck",
    "basenji dog",
    "kudus",
    "mealybug",
    // "deathwatch beetl",
    "yellow belly ball python",
    "sitatunga",
    "bale monkey",
    "aye-ay",
    "zebra spitting cobra",
    "sable ferret",
    // "african fish eagl",
    "maggot",
    "no see um",
    "no-see-um",
    "leech",
    "eastern gorilla",
    "klipspring",
    "german cockroach",
    "colobus monkey",
    "fruit fl",
    "great dan",
    "nightingal",
    "magpi",
    "mantella frog",
    "sand crab",
    "american cockroach",
    "genet",
    "hognose snak",
    "willow warbl",
    "quelea quelea",
    "nguni cattl",
    "banana ball python",
    "stingray",
    "earwig",
    "red-billed quelea bird",
    "barn swallow",
    "african clawed frog",
    "zebra snak",
    "sulcata tortois",
    "centiped",
    "osprey",
    "giraff",
    "lungfish",
    "monitor lizard",
    "freeway ball python",
    "gaboon vip",
    "stallion",
    "puss moth",
    "lesser jacana",
    "mule",
    "mandril",
    "zors",
    "peafowl",
    "false cobra",
    "barn owl",
    "smokybrown cockroach",
    "killer whale",
    // "whalehead",
    "whale-headed stork",
    // "whalebil",
    "salmon",
    "bushpig",
    "mole cricket",
    "wolf spid",
    "albacore tuna",
    "burchell's zebra",
    "albatross",
    "barbary boar",
    "boomslang",
    "seahors",
    "ortolan bunt",
    "gypsy moth",
    "desert locust",
    "killer clown ball python",
    "blue monkey",
    "pelican",
    "leopard tortois",
    "brazilian treehopp",
    "grey-crowned cran",
    "portuguese man-of-war",
    "freshwater eel",
    "mayfly",
    "mayflies",
    "blister beetl",
    "madora moth",
    "firefl",
    "common house spid",
    "beecroft's flying squirrel",
    "black mamba",
    "armyworm",
    "grevy's zebra",
    "common raven",
    "tree frog",
    "aardwolf",
    "lobster",
    "cape hyrax",
    "serval",
    "needlefish",
    "ground squirrel",
    "common buzzard",
    // "reptilian",
    "earthworm",
    "jerboa",
    "addax",
    "kenyan sand boa",
    "brookesia micra",
    "spotted hyaena",
    "aye ay",
    // "naked mole rat",
    "milliped",
    "caterpillar",
    "senepol cattl",
    // "devils coach
    // "horse beetl",
    "puff add",
    "glass lizard",
    "western green mamba",
    "grysbok",
    "swan",
    "desert ghost ball python",
  ];

  const natDuplicatesArray = [
    "sacred ibi",
    "shoebil",
    "wasp",
    "robin",
    "bush vip",
    "dog tick",
    "spitting cobra",
    "woodlous",
    "thrush",
    "falcon",
    "mouse",
    "bush eleph",
    "wildebeest",
    "lemur",
    "black rhino",
    "chameleon",
    "crab",
    "white rhino",
    "rhino",
    "safari",
    "woodland",
    "goshawk",
    "butterfl",
    "monarch butterfl",
    "ibi",
    "forest eleph",
    "wild dog",
    "wild",
    "otter",
    "bird",
    "turtl",
    "tortois",
    "rain forest",
    "forest",
    "leopard",
    "panther",
    "marin",
    "eagl",
    "seal",
    "green mamba",
    "mamba",
    "buffalo",
    "hyena",
    "crocodil",
    "elephant shrew",
    "gorilla",
    "oryx",
    "savannah eleph",
    "savannah",
    "tree",
    "horse",
    "beetl",
    "leaf-tailed gecko",
    "gecko",
    "hunt",
    "bee-eat",
    "shark",
    "parrot",
    "goos",
    "gees",
    "deer",
    "insect",
    "lizard",
    "fox",
    "stork",
    "frog",
    "civet",
    "bush",
    "goat",
    "hyrax",
    "baboon",
    "hippo",
    "vultur",
    "gazell",
    "lion",
    "heron",
    "cattl",
    "black widow",
    "snail",
    "python",
    "pangolin",
    "cockroach",
    "jacana",
    "tuna",
    "eleph",
    "shrew",
    "wolf",
    "mongoos",
    "eel",
    "kudu",
    "worm",
    "mountain",
    "duck",
    "cobra",
    "monkey",
    "bushbuck",
    "zebra",
    "catfish",
    "fish",
    "owl",
    "tick",
    "squirrel",
    "mole",
    "antelop",
    "tiger",
    "warthog",
    "whale",
    "cricket",
    "freshwat",
    "locust",
  ];

  const natProbArray = [
    "ant",
    "ants",
    "barb",
    "barbs",
    "crow",
    "crows",
    "topi",
    "topis",
    "plant",
    "plants",
  ];

  const natDupeAndProbArray = [
    "bee",
    "bees",
    "boa",
    "boas",
    "cod",
    "cods",
    "cow",
    "cows",
    "moth",
    "moths",
    "bat",
    "bats",
    "cat",
    "cats",
    "park",
    "parks",
  ];

  // // helper function that generates 3 random numbers
  // function randomColorGenerator(min, max) {
  //   return [
  //     Math.floor(Math.random() * (max - min)) + min,
  //     Math.floor(Math.random() * (max - min)) + min,
  //     Math.floor(Math.random() * (max - min)) + min,
  //   ];
  // }

  // // helper function for enterQuotes()
  // function randomColorPaletteGenerator(numOfColors) {
  //   let backgroundColors = [];
  //   for (let i = 0; i < numOfColors; i++) {
  //     backgroundColors.push(`'rgb(${randomColorGenerator(0, 255)})'`);
  //   }
  //   return backgroundColors;
  // }

  // function enterQuotes(voiceObj) {
  //   let rowNum = -1;
  //   let rowsHTML = "";
  //   let speakerTotWrdNums = [];
  //   let speakerTotQuoteNums = [];
  //   let allSpeakers = Object.keys(voiceObj);
  //   let allSpeakersGraphFormat = [];
  //   for (let name of allSpeakers) {
  //     // loop over speakers
  //     // console.log(voiceObj[name]);
  //     allSpeakersGraphFormat.push(`'${name}'`);
  //     rowNum += 1;
  //     let numQuotesPerSpeaker = Object.keys(voiceObj[name]).length;
  //     speakerTotQuoteNums.push(numQuotesPerSpeaker); // add num of quotes to array
  //     // console.log(Object.keys(voiceObj[name]));
  //     rowsHTML += `<tr id=row${rowNum}><td rowspan=${numQuotesPerSpeaker}>${name}</td><td>${voiceObj[name][0]["verb"]}</td><td>${voiceObj[name][0]["quote"]}</td><td>${voiceObj[name][0]["wrdCount"]}</td></tr>`;
  //     let totWrdCount = voiceObj[name][0]["wrdCount"];
  //     for (let i = 1; i < Object.keys(name).length; i++) {
  //       // loop over quotes of each speaker
  //       if (!voiceObj[name][i]) continue;
  //       let verb = voiceObj[name][i]["verb"];
  //       let quote = voiceObj[name][i]["quote"];
  //       let wrdCount = voiceObj[name][i]["wrdCount"];
  //       rowNum += 1;
  //       rowsHTML += `<tr id=row${rowNum}><td>${verb}</td><td>${quote}</td><td>${wrdCount}</td></tr>`;
  //       totWrdCount += wrdCount; // add new quote lengths to total word count
  //     }
  //     speakerTotWrdNums.push(totWrdCount); // add total num of words to array
  //   }
  //   $("#thead").after('<tbody id="tbody"></tbody>');
  //   // console.log(rowsHTML);
  //   document.querySelector("#tbody").innerHTML = rowsHTML;
  //   console.log(
  //     `quote: ${speakerTotQuoteNums}`,
  //     `wrdNums: ${speakerTotWrdNums}`
  //   );
  //   // add charts and their headings
  //   speakerPieChartWrdNumHtml = `<script id="wrdNumChartScript">
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
  //   speakerPieChartQuoteNumHtml = `<script id="quotesChartScript">
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
  //   let h4tags = [
  //     "<h4><b>Breakdown of Speakers' Total Number of Words</b></h4>",
  //     "<h4><b>Breakdown of Speaker's Total Number of Quotes</b></h4>",
  //   ];
  //   if (document.querySelector("#wrdNumChartScript")) {
  //     $("#wrdNumChartScript").remove(); // remove previous plotting script
  //     $("#quoteChartScript").remove(); // remove previous plotting script
  //   }
  //   $("#wordNumChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
  //   $("#quoteNumChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
  //   $("#chart2CDNScript").before('<canvas id="wordNumChart"></canvas>');
  //   $("#chart3CDNScript").before('<canvas id="quoteNumChart"></canvas>');
  //   if (!document.querySelector("h4")) {
  //     // insert headings if not already there
  //     $("#wordNumChart").before(h4tags[0]);
  //     $("#quoteNumChart").before(h4tags[1]);
  //   }
  //   $("#chart2CDNScript").after(speakerPieChartWrdNumHtml);
  //   $("#chart3CDNScript").after(speakerPieChartQuoteNumHtml);
  // }

  function hasTrope(trope) {
    return $("mark").classList.contains(trope);
  }

  function addPieChart(
    colors,
    genWrdsHLCount,
    tribWrdsHLCount,
    natWrdsHLCount,
    conWrdsHLCount
  ) {
    // update the doughnut chart
    let pieChartHtml = `<script id="chartScript">
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',
    
        // The data for our dataset
        data: {
            labels: ['Generalization', 'Tribalism', 'Nature and Wildlife', 'Conflict and Violence'],
            datasets: [{
                label: ' # Words',
                backgroundColor: ['${colors[0]}', '${colors[1]}', '${colors[2]}', '${colors[3]}'],
                borderColor: '#ffffff',
                borderWidth: '6',
                data: [${genWrdsHLCount}, ${tribWrdsHLCount}, ${natWrdsHLCount}, ${conWrdsHLCount}],
            }]
        },
    
        // Configuration options go here
        options: {}
    });
    </script>`;
    $("#chartCDNScript").after(pieChartHtml);

    // Add note about pie chart functionality
    let tropeBreakdownNote = `<p id="tropeBreakdownNote">Hover over the chart to see how many words of each trope we found. <br><br/> <span class="small"><b>Note:</b> If you wish to see certain tropes on the chart in isolation from others, click on any of the tropes in the legend to remove them from the chart. To add them back to the chart, click on the trope(s) again.</span></p>`;
    // avoid reproducing note if already there
    if (!document.querySelector("#tropeBreakdownNote"))
      $("#tropeBreakdownMessage").after(tropeBreakdownNote);
  }

  // This function will return the total number of words in the inputted text
  function getTotHighlightedWords(obj) {
    // get all counts, add them up, and return them
    console.log("selecting hilit words", document.querySelectorAll("mark"));
    let sum = 0;
    Object.values(obj).forEach((el) => (sum += el));
    console.log(obj);
    return sum - obj["wl"]; // subtract wlCount from total sum
  }

  // This function highlights the words that match the rgx expression below
  function hiliter(word, element, tropeClass, obj, isProbWord, isDupe) {
    let rgxp;
    // for words that have too many words that start with it
    if (isProbWord) {
      rgxp = new RegExp(`\\b${word}\\b`, "gi"); // match word exactly
    } else {
      rgxp = new RegExp(`\\b${word}[a-z]*\\b`, "gi"); // match words in dict + their inflections
    }

    if (isDupe) {
      element.innerHTML = element.innerHTML.replace(rgxp, function (x, offset) {
        if (
          element.innerHTML.slice(offset + x.length, offset + x.length + 6) ===
            "</mark" ||
          element.innerHTML.slice(offset - 2, offset) == '">'
        )
          return x;
        obj[tropeClass] += x.split(" ").length;
        return `<mark class=${tropeClass}>${x}</mark>`;
      });
    } else {
      element.innerHTML = element.innerHTML.replace(rgxp, function (x) {
        obj[tropeClass] += x.split(" ").length;
        return `<mark class=${tropeClass}>${x}</mark>`;
      });
    }
    return obj;
  }

  // This function will return the total number of words in the inputted text
  function getTotWordCount(element) {
    return element.trim().split(/\s+/).length;
  }

  $("aside").hide();
  $("#resultSummary").hide();
  $("#chartScript").hide();

  $("#scanArticle").click(function () {
    let rawInput = document.getElementById("inputText").value;
    let totWords = getTotWordCount(rawInput); // get total number of words that were inputted by user
    rawInput = rawInput.replace(/\n\r?/g, "<br>");
    $("#outputText").html(rawInput);

    // initialize graph object (graphObj)
    let graphObj = { wl: 0, gen: 0, con: 0, trib: 0, nat: 0 };
    // this is for the dict words that have too many irrelevant words that start with it
    // let probWords = [
    //   // dupe and prob

    // ];

    console.time("nat hilit time");
    for (let natWord of natureArray) {
      graphObj = hiliter(
        natWord,
        document.getElementById("outputText"),
        "nat",
        graphObj,
        false,
        false
      );
    }
    console.timeEnd("nat hilit time");

    console.time("nat dupes hilit time");
    for (let natDupeWord of natDuplicatesArray) {
      graphObj = hiliter(
        natDupeWord,
        document.getElementById("outputText"),
        "nat",
        graphObj,
        false,
        true
      );
    }
    console.timeEnd("nat dupes hilit time");

    console.time("nat prob hilit time");
    for (let natProbWord of natProbArray) {
      graphObj = hiliter(
        natProbWord,
        document.getElementById("outputText"),
        "nat",
        graphObj,
        true, // includes problem words
        false // doesn't includes duplicate words
      );
    }
    console.timeEnd("nat prob hilit time");

    console.time("nat probAndDupe hilit time");
    for (let natDupeProbWrd of natDupeAndProbArray) {
      graphObj = hiliter(
        natDupeProbWrd,
        document.getElementById("outputText"),
        "nat",
        graphObj,
        true, // includes problem words
        true // includes duplicate words
      );
    }
    console.timeEnd("nat probAndDupe hilit time");

    console.time("wl hilit time");
    for (let whitelistWord of whitelistArray) {
      graphObj = hiliter(
        whitelistWord,
        document.getElementById("outputText"),
        "wl",
        graphObj,
        false,
        false
      );
    }
    console.timeEnd("wl hilit time");

    console.time("trib hilit time");
    for (let tribWord of tribalismArray) {
      graphObj = hiliter(
        tribWord,
        document.getElementById("outputText"),
        "trib",
        graphObj,
        false,
        false
      );
    }
    console.timeEnd("trib hilit time");

    console.time("con hilit time");
    for (let conWord of conflictAndViolenceArray) {
      graphObj = hiliter(
        conWord,
        document.getElementById("outputText"),
        "con",
        graphObj,
        false,
        false
      );
    }
    console.timeEnd("con hilit time");

    console.time("conDupes hilit time");
    for (let conDupeWord of conAndVioDupesArray) {
      graphObj = hiliter(
        conDupeWord,
        document.getElementById("outputText"),
        "con",
        graphObj,
        false,
        true
      );
    }
    console.timeEnd("conDupes hilit time");

    console.time("con prob hilit time");
    for (let conProbWord of conAndVioProbArray) {
      graphObj = hiliter(
        conProbWord,
        document.getElementById("outputText"),
        "con",
        graphObj,
        true, // includes problem words
        false // doesn't include duplicate words
      );
    }
    console.timeEnd("con prob hilit time");

    console.time("conDupesAndProb hilit time");
    for (let conDupesProbWrd of conAndVioDupeAndProbArray) {
      graphObj = hiliter(
        conDupesProbWrd,
        document.getElementById("outputText"),
        "con",
        graphObj,
        true, // includes problem words
        true // includes duplicate words
      );
    }
    console.timeEnd("conDupesAndProb hilit time");

    console.time("gen hilit time");
    for (let genWord of generalizationArray) {
      graphObj = hiliter(
        genWord,
        document.getElementById("outputText"),
        "gen",
        graphObj,
        false,
        false
      );
    }
    console.timeEnd("gen hilit time");

    graphObj = hiliter(
      "africa",
      document.getElementById("outputText"),
      "gen",
      graphObj,
      false,
      true
    );

    console.time("wl unhilit time");
    // Making the wl words not be highlighted
    let whitelistedWords = document.getElementsByClassName("wl"); // Find the elements
    console.log(whitelistedWords);
    let rgxpTropeTag = /gen|trib/i;
    for (let whitelistWord of whitelistedWords) {
      whitelistWord.innerHTML = whitelistWord.innerHTML.replace(
        rgxpTropeTag,
        "wl"
      ); // Change the class name
    }
    console.timeEnd("wl unhilit time");

    // add up all highlighted words
    console.time("setting info for pie chart");
    console.log(document.querySelectorAll(".nat").length);
    let totHighlightedWords = getTotHighlightedWords(graphObj);
    console.log(totWords);
    let perTropeWrds = ((totHighlightedWords / totWords) * 100).toFixed(0);
    // declare these as global variables using window obj to be able to use them for color-blind friendly button
    console.log(document.querySelectorAll("mark .con").length);
    let wlSubtract = graphObj["wl"] ? 1 : 0;
    console.log(wlSubtract);
    window.genWrdsHLCount = graphObj["gen"];
    window.conWrdsHLCount = graphObj["con"];
    window.tribWrdsHLCount = graphObj["trib"];
    window.natWrdsHLCount = graphObj["nat"];
    console.timeEnd("setting info for pie chart");

    // if CBF colors button is checked, set colors array to be CBF; else, set to original colors
    let colors;
    if ($("#clrBlndCheckbox").prop("checked")) {
      // order: gen popup background (PB), trib PB, nat PB, con PB, gen link color, trib link color, nat link color, con link color
      colors = [
        "#3DB7E9",
        "#f0e442",
        "#d55e00  ",
        "black  ",
        "#f0e442",
        "#3DB7E9",
        "#f0e442",
        "#f0e442",
      ]; // CBF colors for when you hover over word
      // change general highlighting colors and font color of highlighted words
      $(".gen").css("background-color", "#3DB7E9");
      $(".trib").css("background-color", "#f0e442");
      $(".nat").css("background-color", "#d55e00");
      $(".con").css({ "background-color": "black  ", color: "white" });
    } else {
      // color order: gen PB, trib PB, nat PB, con PB, gen link color, trib link color, con link color
      colors = [
        "#a8edea",
        "#eaa8d2",
        "#a7ffa3",
        "#ffcc80",
        "#ff7451",
        "rgb(59, 84, 205)",
        "#ff7451",
        "rgb(59, 84, 205)",
      ];
    }

    console.log(colors);

    // Remove previous chart if there was one:
    if (document.querySelector("#chartScript")) {
      // remove previous graph
      $("#chartScript").remove();
      $("#myChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
      $("#chartCDNScript").before('<canvas id="myChart"></canvas>');
    }
    // Add corresponding heading and text (always)
    const h2BreakdownTag = `<h2 id="tropeBreakdownHeader">Breakdown of words found</h2>`;
    // add ternary statement to avoid reproducing h2 tags
    !document.querySelector("#tropeBreakdownHeader") &&
      $("#tropeMessage").after(h2BreakdownTag);
    let tropeBreakdownMessage = `<p id="tropeBreakdownMessage">We found <b>${totHighlightedWords}</b> ${
      totHighlightedWords === 1 ? "word" : "words"
    } (~ ${perTropeWrds}% of this article) associated with tropes about Africa.</p>`;
    $("#tropeBreakdownMessage").remove(); // remove previous text
    $("#tropeBreakdownHeader").after(tropeBreakdownMessage); // update with new text
    // add text describing chart feature with legend
    // Create pie chart if ASTRSC found any trope words
    if (totHighlightedWords) {
      addPieChart(
        colors,
        genWrdsHLCount,
        tribWrdsHLCount,
        natWrdsHLCount,
        conWrdsHLCount
      );
    } else {
      $("#tropeBreakdownNote").remove(); // remove previous note
    }

    // account for updating values

    $("#outputText").css("display", "block");
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

    $(".gen").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#genLink").css("color", colors[4]); // change link color
      $("#tropeMessage").css("background-color", colors[0]); // turn background of popup text this color
      $("#generalization").show();
    });

    $(".trib").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tribLink").css("color", colors[5]); // change link color
      $("#tropeMessage").css("background-color", colors[1]);
      $("#tribalism").show();
    });

    $(".nat").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#natLink").css("color", colors[6]); // change link color
      $("#tropeMessage").css("background-color", colors[2]);
      $("#nature").show();
    });

    $(".con").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#conLink").css("color", colors[7]);
      $("#tropeMessage").css("background-color", colors[3]);
      $("#conflictAndViolence").show();
    });

    $("#voiceButton").css("display", "inline-block");

    location.href = "#scannedResults";

    $("html,body").animate(
      {
        scrollTop: $("#clrBlnd").offset().top,
      },
      320
    );

    // $("#resultSummary").html(
    //   "We've found language in your text that might be reinforcing these harmful tropes about Africa:<br>"
    // );
    // if (hasTrope("gen")) {
    //   $("#resultSummary").append(
    //     `<span style="font-weight:bold; border-bottom: 3px solid ${colors[0]}">Generalization<br></span>`
    //   );
    //   $("#resultSummary").show();
    // }
    // if (hasTrope("con")) {
    //   $("#resultSummary").append(
    //     `<span style="font-weight:bold; border-bottom: 3px solid ${colors[3]}">Conflict<br></span>`
    //   );
    //   $("#resultSummary").show();
    // }

    // if (hasTrope("nat")) {
    //   $("#resultSummary").append(
    //     `<span style="font-weight:bold; border-bottom: 3px solid ${colors[2]}">Nature<br></span>`
    //   );
    //   $("#resultSummary").show();
    // }

    // if (hasTrope("trib")) {
    //   $("#resultSummary").append(
    //     `<span style="font-weight:bold; border-bottom: 3px solid ${colors[1]}">Tribalism<br></span>`
    //   );
    //   $("#resultSummary").show();
    // }

    // $("#resultSummary").append(
    //   "<br>Hover your mouse on the highlighted words below to learn more about each stereotype!<br>"
    // );
  });

  $("#clrBlndCheckbox").change(function () {
    if (this.checked) {
      // Change scan article button color
      $("#scanArticle").css("border-color", "#3DB7E9");
      $("#scanArticle").hover(
        function () {
          $(this).css("background-color", "#66ccee");
        },
        function () {
          $(this).css("background-color", "white");
        }
      );
      // Change CBF background color
      $("#clrBlnd").css("background-color", "#f0e442");
      $("#clrBlnd").css("border", "3px solid #f0e442");
      // Change hover colors
      $(".gen").hover(function () {
        $("#tropeMessage").css("background-color", "#3DB7E9");
        $("#generalization").css("color", "white"); // make font color white
        $("#genLink").css("color", "black");
      });

      $(".trib").hover(function () {
        $("#tropeMessage").css("background-color", "#f0e442");
        $("#tribLink").css("color", "#3DB7E9");
      });

      $(".nat").hover(function () {
        $("#tropeMessage").css("background-color", "#d55e00");
        $("#nature").css("color", "white");
        $("#natLink").css("color", "black");
      });

      $(".con").hover(function () {
        $("#tropeMessage").css("background-color", "black");
        $("#conflictAndViolence").css("color", "white");
        $("#conLink").css("color", "#f0e442");
      });

      // Change highlight color
      $(".gen").css("background-color", "#3DB7E9");
      $(".trib").css("background-color", "#f0e442");
      $(".nat").css("background-color", "#d55e00");
      $(".con").css({
        "background-color": "black",
        color: "white",
      });

      // Change outputText background color
      $("#outputText").css("background-color", "#ffffff");

      // Show border
      $("#outputText").css("border", "solid black");

      // Change headers' color to black
      $("h2").css("color", "black");

      // Change chart colors
      let pieChartColorBlindFriendly = `<script id="chartScript">
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',
        
            // The data for our dataset
            data: {
                labels: ['Generalization', 'Tribalism', 'Nature and Wildlife', 'Conflict and Violence'],
                datasets: [{
                    label: ' # Words',
                    backgroundColor: ['#3DB7E9', '#f0e442', '#d55e00', 'black'],
                    borderColor: 'rgb(255, 255, 255)',
                    borderWidth: '6',
                    data: [${window.genWrdsHLCount}, ${window.tribWrdsHLCount}, ${window.natWrdsHLCount}, ${window.conWrdsHLCount}],
                }]
            },
        
            // Configuration options go here
            options: {}
        });
        </script>`;
      $("#chartScript").remove();
      $("#myChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
      $("#chartCDNScript").before('<canvas id="myChart"></canvas>');
      $("#chartCDNScript").after(pieChartColorBlindFriendly);

      // change 'show voice' button color
      $("#voiceButton").css("border-color", "#d55e00");
      $("#voiceButton").hover(
        function () {
          $(this).css("background-color", "#d55e00");
        },
        function () {
          $(this).css("background-color", "white");
        }
      );
      // Change table background color to yellow
      // $("#thead").css("background-color", "#f0e442");
      document.querySelectorAll("th").style.backgroundColor = "#f0e442";
      console.log(document.querySelector("thead").style.backgroundColor);
    } else {
      // Change back scan article button color
      $("#scanArticle").css("border-color", "#34D293");
      $("#scanArticle").hover(
        function () {
          $(this).css("background-color", "#34D293");
        },
        function () {
          $(this).css("background-color", "white");
        }
      );
      // Change back CBF background color
      $("#clrBlnd").css({
        color: "#333333",
        "background-color": "#ffca99",
        border: "3px solid rgb(255, 173, 105)",
      });
      // Change hover to original colors
      $(".gen").hover(function () {
        $("#tropeMessage").css("background-color", "#a8edea");
        $("#generalization").css("color", "black");
        $("#genLink").css("color", "#ff7451");
      });

      $(".trib").hover(function () {
        $("#tropeMessage").css("background-color", "#eaa8d2");
        $("#tribLink").css("color", "rgb(59, 84, 205)");
      });

      $(".nat").hover(function () {
        $("#tropeMessage").css("background-color", "#a7ffa3");
        $("#nature").css("color", "black");
        $("#natLink").css("color", "#ff7451");
      });

      $(".con").hover(function () {
        $("#tropeMessage").css("background-color", "#ffcc80");
        $("#conflictAndViolence").css("color", "black");
        $("#conLink").css("color", "rgb(59, 84, 205)");
      });

      // Change highlight to original colors
      $(".gen").css("background-color", "#a8edea");
      $(".trib").css("background-color", "#eaa8d2");
      $(".nat").css("background-color", "#a7ffa3");
      $(".con").css({ "background-color": "#ffcc80", color: "black" });

      // Change outputText color back
      $("#outputText").css("background-color", "#f5f5f5");

      // Hide border again
      $("#outputText").css("border-style", "hidden");

      // Change headers' color back to teal-ish
      $("h2").css("color", "#34D293");

      // Change chart colors
      let pieChartOg = `<script id="chartScript">
          var ctx = document.getElementById('myChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'doughnut',
          
              // The data for our dataset
              data: {
                  labels: ['Generalization', 'Tribalism', 'Nature and Wildlife', 'Conflict and Violence'],
                  datasets: [{
                      label: ' # Words',
                      backgroundColor: ['rgb(168, 237, 234)', 'rgb(234, 168, 210)', 'rgb(167, 255, 163)', '#ffcc80'],
                      borderColor: 'rgb(255, 255, 255)',
                      borderWidth: '6',
                      data: [${window.genWrdsHLCount}, ${window.tribWrdsHLCount}, ${window.natWrdsHLCount}, ${window.conWrdsHLCount}],
                  }]
              },
          
              // Configuration options go here
              options: {}
          });
          </script>`;
      $("#chartScript").remove();
      $("#myChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
      $("#chartCDNScript").before('<canvas id="myChart"></canvas>');
      $("#chartCDNScript").after(pieChartOg);

      // change 'show voice' button color back
      $("#voiceButton").css("border-color", "#A29BDA");
      $("#voiceButton").hover(
        function () {
          $(this).css("background-color", "#A29BDA");
        },
        function () {
          $(this).css("background-color", "white");
        }
      );
    }

    // Change table background color back to teal-ish
    document.querySelectorAll("th").style.backgroundColor =
      "rgba(0, 233, 117, 0.58)";
    // $("thead").css("background-color", "rgba(0, 233, 117, 0.58)");

    // Change h4 color back to teal-ish
    // $("h4").css("color", "#34D293");
  });
});
