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
  ];

  const conflictAndViolenceArray = [
    "gbv",
    "gender-based violence",
    "gender based violence",
    "violenc",
    "conflict",
    "war",
    "wars",
    "warring",
    "warfare",
    "warship",
    "wartime",
    "warzone",
    "warzones",
    "civil war",
    "atroc",
    "crime",
    "violent",
    "weapon",
    "insurg",
    "chao",
    "arm",
    "terror",
    "flee",
    "militia",
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
    "ban",
    "bans",
    "banned",
    "banning",
    "bomb",
    "blood",
    "cease-fir",
    "coup",
    "coups",
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
    "kill",
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
    "smuggl",
    "smuggled weapons",
    "child soldier",
    "soldier",
    "suffer",
    "terrorist",
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
    "battlefield",
    "repress",
    "suppress",
    "dying",
    "malnourish",
    "starv",
    "displace",
    "topple",
    "harm",
    "artillery",
    "coup d'etat",
    "mass execut",
    "execut",
    "guerilla",
    "detention camp",
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
    "park",
    "parks",
    "biota",
    "egyptian gees",
    "egyptian goos",
    "nature",
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
    "fisheri",
    "waterbird",
    "poacher",
    "bird sanctuar",
    "ecosystem",
    "reptil",
    "naturalist",
    "waterway",
    "wildflow",
    "ecotour",
    "seabird",
    "african spurred tortois",
    "amphibian",
    "wolves",
    "stone curlew",
    "african sacred ibi",
    "sacred ibi",
    "african monarch butterfl",
    "monarch butterfl",
    "plain tig",
    "african monarch",
    "african goshawk",
    "goshawk",
    "cirl bunt",
    "seafowl",
    "bird of passag",
    "shore bird",
    "african black oystercatch",
    "water thick-kne",
    "white-fronted plov",
    "blacksmith plov",
    "common sandpip",
    "zoo",
    "mammal",
    "gallery forest",
    "bird tabl",
    "sea cow",
    "manate",
    "tropical rain forest",
    "sea eleph",
    "elephant seal",
    "sea leopard",
    "aquatic bird",
    "african wild dog",
    "marine anim",
    "african eleph",
    "miombo woodland",
    "woodland",
    "elephant bird",
    "rangership",
    "wildgrav",
    "exotic",
    "aquat",
    "vertebr",
    "mammalian",
    "scenic",
    "endemic",
    "ocean",
    "underwat",
    "predator",
    "plant",
    "plants",
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
    "safari",
    "biospher",
    "environment",
    "freshwat",
    "herbivor",
    "pygmy hippopotamus",
    "ladybug",
    "golden eagl",
    "oranda goldfish",
    "cheetah",
    "rabbit",
    "scorpion",
    "critically endang",
    "comet moth",
    "bongo",
    "white rhinoceros",
    "madagascar cockroach",
    "dolphin",
    "eastern green mamba",
    "night heron",
    "twig snak",
    "ostrich",
    "flycatch",
    "vervet monkey",
    "northern white rhinocero",
    "angelshark",
    "olive baboon",
    "green bee eat",
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
    "birds of prey",
    "suni",
    "cape buffalo",
    "striped hyena",
    "mountain gorilla",
    "madagascar hissing cockroach",
    "african civet",
    "cuckoo",
    "nile crocodil",
    "horned add",
    "butterfl",
    "cape elephant shrew",
    "guinea fowl",
    "brown hyena",
    "yellow cobra",
    "pig",
    "warbler",
    "woodpeck",
    "wild boar",
    "chimpanze",
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
    "cod",
    "springbok",
    "jackal",
    "sea eagl",
    "cross river gorilla",
    "hoopo",
    "water buffalo",
    "common furniture beetl",
    "black rhino",
    "zebu",
    "scimitar-horned oryx",
    "kingfish",
    "african tree toad",
    "impala",
    "gerbil",
    "vinegaroon",
    "biscuit beetl",
    "devil's coach horse beetl",
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
    "barb",
    "barbs",
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
    "african bush eleph",
    "red kit",
    "grey mouse lemur",
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
    "rhino",
    "nigerian goat",
    "rock hyrax",
    "peregrine falcon",
    "crane",
    "crow",
    "crows",
    "song thrush",
    "fire ball python",
    "dinopithecus",
    "electric catfish",
    "lappet-face vultur",
    "banana spid",
    "bush babi",
    "marlin",
    "hamadryas baboon",
    "nyala",
    "bushbabi",
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
    "black rhinocero",
    "bearded vultur",
    "green bee-eat",
    "fennec fox",
    "gembsok oryx",
    "woodlous",
    "waterbuck",
    "dumeril's boa",
    "indri",
    "brown dog tick",
    "black rhinoceros",
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
    "wildebeest",
    "gnu",
    "lichtenstein's hartebeest",
    "fruit bat",
    "orange baboon tarantula",
    "patas monkey",
    "weasel",
    "uromastyx",
    "sea turtl",
    "agama lizard",
    "turaco",
    "egyptian vultur",
    "giant african land snail",
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
    "bush eleph",
    "mouse",
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
    "hawk moth caterpillar",
    "yellowfin tuna",
    "roan",
    "ibex",
    "madagascar tree boa",
    "african forest eleph",
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
    "white rhinocero",
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
    "africanized bee",
    "killer bee",
    "mallard",
    "gerenuk",
    "waller's gazell",
    "kori bustard",
    "dwarf crocodil",
    "fin whal",
    "pufferfish",
    "dormous",
    "spiny bush vip",
    "bush vip",
    "tsetse fl",
    "glow worm",
    "bale mountain vervet",
    "vanga",
    "european robin",
    "chameleon",
    "rock python",
    "anteat",
    "red fox",
    "peringuey's add",
    "bloodhound",
    "european bee-eat",
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
    "african savannah eleph",
    "hare",
    "reedbuck",
    "the blue monkey",
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
    "ant",
    "ants",
    "kudus",
    "mealybug",
    "deathwatch beetl",
    "yellow belly ball python",
    "sitatunga",
    "bale monkey",
    "aye-ay",
    "zebra spitting cobra",
    "sable ferret",
    "african fish eagl",
    "maggot",
    "no see um",
    "no-see-um",
    "leech",
    "eastern gorilla",
    "thrush",
    "klipspring",
    "german cockroach",
    "common hippopotamus",
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
    "falcon",
    "stingray",
    "earwig",
    "red-billed quelea bird",
    "lemur",
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
    "robin",
    "puss moth",
    "wasp",
    "lesser jacana",
    "mule",
    "mandril",
    "zors",
    "peafowl",
    "false cobra",
    "barn owl",
    "smokybrown cockroach",
    "shoebil",
    "killer whale",
    "whalehead",
    "whale-headed stork",
    "whalebil",
    "salmon",
    "crab",
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
    "topi",
    "topis",
    "desert locust",
    "killer clown ball python",
    "blue monkey",
    "pelican",
    "spitting cobra",
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
    "dog tick",
    "beecroft's flying squirrel",
    "black mamba",
    "armyworm",
    "grevy's zebra",
    "common raven",
    "ibi",
    "tree frog",
    "aardwolf",
    "lobster",
    "cape hyrax",
    "locust",
    "serval",
    "rhino vip",
    "pigeon",
    "needlefish",
    "ground squirrel",
    "common buzzard",
    "cow",
    "cows",
    "reptilian",
    "earthworm",
    "jerboa",
    "addax",
    "white rhino",
    "kenyan sand boa",
    "brookesia micra",
    "spotted hyaena",
    "aye ay",
    "naked mole rat",
    "milliped",
    "caterpillar",
    "senepol cattl",
    "devils coach horse beetl",
    "puff add",
    "glass lizard",
    "west african wild dog",
    "western green mamba",
    "grysbok",
    "swan",
    "desert ghost ball python",
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
    "bee",
    "bees",
    "shark",
    "parrot",
    "goos",
    "gees",
    "deer",
    "insect",
    "lizard",
    "bat",
    "bats",
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
    "cat",
    "cats",
    "black widow",
    "snail",
    "moth",
    "moths",
    "python",
    "pangolin",
    "cockroach",
    "jacana",
    "tuna",
    "boa",
    "boas",
    "eleph",
    "shrew",
    "wolf",
    "mongoos",
    "rhinoceros",
    "eel",
    "kudu",
    "worm",
    "mountain",
    "bee-eat",
    "duck",
    "cobra",
    "monkey",
    "bushbuck",
    "zebra",
    "fish",
    "owl",
    "tick",
    "squirrel",
    "mole",
    "cod",
    "cods",
    "antelop",
    "tiger",
    "catfish",
    "warthog",
    "whale",
    "cricket",
  ];

  const generalizationArray = [
    "africa",
    "subsaharan",
    "continent",
    "sub-saharan",
  ];

  const tribalismArray = [
    "ethnic",
    "nomad",
    "bushmen",
    "tribe",
    "pygmy",
    "tribal",
    "clan",
  ];

  const exceptions = [
    "conflicting",
    "conflicted",
    "feedback",
    "aiding",
    "lionel",
    "armstrong",
  ];

  const pronouns = ["she", "they", "he"];

  const africanCountries = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Democratic Republic of the Congo",
    "Republic of the Congo",
    "Cote d'Ivoire",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ];

  // const ambiguousWords = ["arm", "arms", "conflicts"];

  // This function will return the total number of words in the inputted text
  function getTotHighlightedWords(obj) {
    // get all counts, add them up, and return them
    sum = 0;
    wlCount = obj["wl"];
    delete obj["wl"];
    Object.values(obj).forEach((el) => (sum += el));
    return [sum - wlCount, wlCount]; // subtract wlCount from total sum to avoid counting whitelist words
  }

  // This function will return the total number of words in the inputted text
  function getTotWordCount(element) {
    return element.trim().split(/\s+/).length;
  }

  // This function highlights the words that match the rgx expression below
  function hiliter(word, element, tropeClass, obj, probWords) {
    let rgxpPlural;
    // for words that have too many words that start with it
    if (probWords.includes(word)) {
      rgxpPlural = new RegExp(`\\b${word}\\b`, "gi"); // match word exactly
    } else {
      rgxpPlural = new RegExp(`\\b${word}[a-z]*\\b`, "gi"); // match words in dict + their inflections
    }

    // find words that match rgx
    let rgxMatches = element.innerHTML.match(rgxpPlural);
    // do highlighting if there is/are rgx matches
    if (rgxMatches) {
      for (let match of rgxMatches) {
        // need to convert to lower case bc .includes is case-sensitive
        if (exceptions.includes(match.toLowerCase())) continue; // don't highlight exceptions

        let replHighlight = `<mark class=${tropeClass}>${match}</mark>`; // highlight words
        element.innerHTML = element.innerHTML.replace(
          new RegExp(`\\b${match}\\b`, "gi"),
          replHighlight
        );

        // add to count of trope class or add property if not in obj yet
        obj[tropeClass] += 1;
      }
    }
    return obj;
  }

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

  /*$(function run() {*/

  $("aside").hide();
  $("#resultSummary").hide();
  $("#outputText").hide();
  $("#tropeMessage").hide();
  $("#voicesFig").hide();
  $("#chartScript").hide();

  $("#scanArticle").click(function () {
    let rawInput;
    rawInput = document.getElementById("inputText").value;
    let totWords = getTotWordCount(rawInput); // get total number of words that were inputted by user
    rawInput = rawInput.replace(/\n\r?/g, "<br>");
    $("#outputText").html(rawInput);

    // initialize graph object (graphObj)
    let graphObj = { wl: 0, gen: 0, con: 0, trib: 0, nat: 0 };
    // this is for the dict words that have too many irrelevant words that start with it
    let probWords = [
      "ban",
      "bans",
      "banned",
      "banning",
      "ant",
      "ants",
      "crow",
      "crows",
      "cat",
      "cats",
      "bat",
      "bats",
      "moth",
      "moths",
      "topi",
      "topis",
      "boa",
      "boas",
      "cod",
      "cods",
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
      "bee",
      "bees",
      "park",
      "parks",
      "plant",
      "plants",
      "cow",
      "cows",
      "barb",
      "barbs",
    ];

    for (let natWord of natureArray) {
      graphObj = hiliter(
        natWord,
        document.getElementById("outputText"),
        "nat",
        graphObj,
        probWords
      );
    }
    for (let whitelistWord of whitelistArray) {
      graphObj = hiliter(
        whitelistWord,
        document.getElementById("outputText"),
        "wl",
        graphObj,
        probWords
      );
    }
    for (let tribWord of tribalismArray) {
      graphObj = hiliter(
        tribWord,
        document.getElementById("outputText"),
        "trib",
        graphObj,
        probWords
      );
    }
    for (let conWord of conflictAndViolenceArray) {
      graphObj = hiliter(
        conWord,
        document.getElementById("outputText"),
        "con",
        graphObj,
        probWords
      );
    }
    for (let genWord of generalizationArray) {
      graphObj = hiliter(
        genWord,
        document.getElementById("outputText"),
        "gen",
        graphObj,
        probWords
      );
    }

    // Making the wl words not be highlighted
    let whitelistedWords = document.getElementsByClassName("wl"); // Find the elements
    let rgxpTropeTag = /gen|con|trib|nat/i;
    for (let whitelistWord of whitelistedWords) {
      whitelistWord.innerHTML = whitelistWord.innerHTML.replace(
        rgxpTropeTag,
        "wl"
      ); // Change the content
    }

    // add up all highlighted words
    let [totHighlightedWords, wlCount] = getTotHighlightedWords(graphObj);
    let perTropeWrds = ((totHighlightedWords / totWords) * 100).toFixed(0);
    graphObj["gen"] -= wlCount; // subtract whitelist words from gen count
    window.genWrdsHLCount = graphObj["gen"]; // declare these as global variables using window obj to be able to use them for color-blind friendly button
    window.conWrdsHLCount = graphObj["con"];
    window.tribWrdsHLCount = graphObj["trib"];
    window.natWrdsHLCount = graphObj["nat"];

    // if CBF colors button is checked, set colors array to be CBF; else, set to original colors
    let colors;
    if ($("#clrBlndCheckbox").prop("checked")) {
      // array colors are in gen, trib, nat, con order
      colors = ["#66ccee", "#ee6677", "#ccbb44", "#bbbbbb"]; // CBF colors
      $(".gen").css("background-color", "#66ccee");
      $(".trib").css("background-color", "#ee6677");
      $(".nat").css("background-color", "#ccbb44");
      $(".con").css("background-color", "#bbbbbb");
    } else {
      colors = ["#a8edea", "#eaa8d2", "#a7ffa3", "#ff9980"];
    }

    // Remove previous chart and note text if there was any:
    if (document.querySelector("#chartScript")) {
      // remove previous graph
      $("#chartScript").remove();
      $("#myChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
      $("#chartCDNScript").before('<canvas id="myChart"></canvas>');
    }
    // Add corresponding text and create pie chart if ASTRSC found any trope words
    const h2BreakdownTag = `<h2 id="tropeBreakdownHeader">Breakdown of words found</h2>`;
    // add ternary statement to avoid reproducing h2 tags
    !document.querySelector("#tropeBreakdownHeader") &&
      $("#tropeMessage").after(h2BreakdownTag);

    // add text saying what percentage of words were highlighted
    let tropeBreakdownMessage = `<p id="tropeBreakdownMessage">We found <b>${totHighlightedWords}</b> words (~ ${perTropeWrds}% of this article) associated with tropes about Africa.</p>`;
    document.querySelector("#tropeBreakdownMessage") &&
      $("#tropeBreakdownMessage").remove(); // remove previous text
    $("#tropeBreakdownHeader").after(tropeBreakdownMessage); // update with new text
    // add text describing chart feature with legend
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

    $(".gen").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", colors[0]);
      $("#generalization").show();
    });

    $(".trib").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", colors[1]);
      $("#tribalism").show();
    });

    $(".nat").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", colors[2]);
      $("#nature").show();
    });

    $(".con").hover(function () {
      $("#tropeMessage").show();
      $("aside").hide();
      $("#tropeMessage").css("background-color", colors[3]);
      $("#conflictAndViolence").show();
    });

    location.href = "#scannedResults";
    $("#resultSummary").html(
      "We've found language in your text that might be reinforcing these harmful tropes about Africa:<br>"
    );
    if (hasTrope("gen")) {
      $("#resultSummary").append(
        `<span style="font-weight:bold; border-bottom: 3px solid ${colors[0]}">Generalization<br></span>`
      );
      $("#resultSummary").show();
    }
    if (hasTrope("con")) {
      $("#resultSummary").append(
        `<span style="font-weight:bold; border-bottom: 3px solid ${colors[3]}">Conflict<br></span>`
      );
      $("#resultSummary").show();
    }

    if (hasTrope("nat")) {
      $("#resultSummary").append(
        `<span style="font-weight:bold; border-bottom: 3px solid ${colors[2]}">Nature<br></span>`
      );
      $("#resultSummary").show();
    }

    if (hasTrope("trib")) {
      $("#resultSummary").append(
        `<span style="font-weight:bold; border-bottom: 3px solid ${colors[1]}">Tribalism<br></span>`
      );
      $("#resultSummary").show();
    }

    $("#resultSummary").append(
      "<br>Hover your mouse on the highlighted words below to learn more about each stereotype!<br>"
    );
  });

  $("#clrBlndCheckbox").change(function () {
    if (this.checked) {
      // Change scan article button color
      $("#scanArticle").css("border-color", "#66ccee");
      $("#scanArticle").hover(
        function () {
          $(this).css("background-color", "#66ccee");
        },
        function () {
          $(this).css("background-color", "white");
        }
      );
      // Change CBF background color
      $("#clrBlnd").css("color", "#fbfbfb");
      $("#clrBlnd").css("background-color", "#ee6677");
      $("#clrBlnd").css("border", "hidden");
      // Change hover colors
      $(".gen").hover(function () {
        $("#tropeMessage").css("background-color", "#66ccee");
        // $("#tropeMessage").css("color", "#ffffff");
      });

      $(".trib").hover(function () {
        $("#tropeMessage").css("background-color", "#ee6677");
      });

      $(".nat").hover(function () {
        $("#tropeMessage").css("background-color", "#ccbb44");
      });

      $(".con").hover(function () {
        $("#tropeMessage").css("background-color", "#bbbbbb");
      });

      // Change highlight color
      $(".gen").css("background-color", "#66ccee");
      $(".trib").css("background-color", "#ee6677");
      $(".nat").css("background-color", "#ccbb44");
      $(".con").css("background-color", "#bbbbbb");

      // Change outputText background color
      $("#outputText").css("background-color", "#ffffff");

      // Show border
      $("#outputText").css("border", "solid black");

      // Change headers' color to black
      $("h2").css("color", "#000000");

      // Change table background color to blue
      $("#thead").css("background-color", "#66ccee");
      console.log($("#thead").css("background-color"));

      // // Change h4 color to black
      // $("h4").css("color", "#000000");

      // Change chart colors
      pieChartColorBlindFriendly = `<script id="chartScript">
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',
        
            // The data for our dataset
            data: {
                labels: ['Generalization', 'Tribalism', 'Nature and Wildlife', 'Conflict and Violence'],
                datasets: [{
                    label: ' # Words',
                    backgroundColor: ['#66ccee', '#ee6677', '#ccbb44', '#bbbbbb'],
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
      $("#clrBlnd").css("color", "#333333");
      $("#clrBlnd").css("background-color", "#ffdfa4");
      $("#clrBlnd").css("border", "3px solid #ffcc6d");
      // Change hover to original colors
      $(".gen").hover(function () {
        $("#tropeMessage").css("background-color", "#a8edea");
      });

      $(".trib").hover(function () {
        $("#tropeMessage").css("background-color", "#eaa8d2");
      });

      $(".nat").hover(function () {
        $("#tropeMessage").css("background-color", "#a7ffa3");
      });

      $(".con").hover(function () {
        $("#tropeMessage").css("background-color", "#ff9980");
      });

      // Change highlight to original colors
      $(".gen").css("background-color", "#a8edea");
      $(".trib").css("background-color", "#eaa8d2");
      $(".nat").css("background-color", "#a7ffa3");
      $(".con").css("background-color", "#ff9980");

      // Change outputText color back
      $("#outputText").css("background-color", "#f5f5f5");

      // Hide border again
      $("#outputText").css("border-style", "hidden");

      // Change headers' color back to teal-ish
      $("h2").css("color", "#34D293");

      // Change chart colors
      pieChartOg = `<script id="chartScript">
          var ctx = document.getElementById('myChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'doughnut',
          
              // The data for our dataset
              data: {
                  labels: ['Generalization', 'Tribalism', 'Nature and Wildlife', 'Conflict and Violence'],
                  datasets: [{
                      label: ' # Words',
                      backgroundColor: ['rgb(168, 237, 234)', 'rgb(234, 168, 210)', 'rgb(167, 255, 163)', '#ff9980'],
                      borderColor: 'rgb(255, 255, 255)',
                      borderWidth: '6',
                      data: [${window.genWrdsHLCount}, ${window.tribWrdsHLCount}, ${window.natWrdsHLCount}, ${window.conWrdsHLCount}],
                  }]
              },
          
              // Configuration options go here
              options: {}
          });
          </script>`;
      // $("#chartScript").remove();
      $("#chartScript").remove();
      $("#myChart").remove(); // IMPORTANT: canvas needs to be removed and added again (next line of code) to avoid pie chart glitch
      $("#chartCDNScript").before('<canvas id="myChart"></canvas>');
      $("#chartCDNScript").after(pieChartOg);
    }

    // Change table background color back to teal-ish
    $("#thead").css("background-color", "rgba(0, 233, 117, 0.58)");

    // Change h4 color back to teal-ish
    $("h4").css("color", "#34D293");
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
