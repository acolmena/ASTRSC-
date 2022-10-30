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

var conflictAndViolenceArray = ["violence", "conflict", "war", "atrocious", "atrocity", "crime", "violent", "weapon", "insurgency", "insurgent", "insurgence", "chaos", "chaotic", "arm", "terror", "flee", "militia", "outbreak", "crisis", "brutal", "collapse", "tension", "rebel", "genocid", "tension", "clash", "dead", "eruption", "criminal", "terrorism", "extremist", "abuse", "escalation", "escalate", "rape", "sanction", "corruption", "corrupt", "radical", "ban", "bomb", "blood", "cease-fire", "coup", "assault", "kidnap", "battle"]

var natureArray = ["acacia",
"african elephant",
"alligators",
"amazonian",
"amphibians",
"amphibiology",
"animal",
"animalness",
"animals",
"antelope",
"aquatic",
"aquatic bird",
"arctic",
"asylum",
"atlas",
"bald eagle",
"big bend national park",
"big game",
"bighorn",
"bighorn sheep",
"biocenosis",
"biodiversity",
"biosphere",
"biota",
"bird",
"bird of passage",
"bird sanctuary",
"bird table",
"birdcatching",
"birdlet",
"birdlife",
"birdling",
"birds",
"birdwatch",
"black grouse",
"bladder senna",
"bobcat",
"bobolink",
"bobwhite quail",
"bountiful",
"brimming",
"broads",
"buffalo",
"canadian goose",
"capercaillie",
"capitol reef national park",
"capturing",
"cattle",
"chimpanzee",
"chronic wasting disease",
"coastal",
"colutea arborescens",
"conifers",
"conservancy",
"conservation",
"conservationist",
"conservationists",
"conserve",
"conserved",
"conserving",
"cougars",
"countryside",
"coyotes",
"creek",
"curios",
"ddt",
"decimated",
"decimation",
"deer",
"deer mouse",
"deerfly",
"desert tortoise",
"dinotherium",
"diorama",
"dotterel",
"ducks",
"eagles",
"eaten",
"echinochloa frumentacea",
"ecology",
"ecosystem",
"ecosystems",
"ecotourism",
"elephant",
"elephant bird",
"elephants",
"elk",
"encounter",
"encounters",
"encourage",
"endanger",
"endangered",
"endangered species",
"endangering",
"endemic",
"environmental",
"eskimo curlew",
"everglades",
"exhibits",
"exotic",
"exterminated",
"extermination",
"extinction",
"faun",
"fauna",
"fish",
"fisheries",
"fishing",
"flora",
"foliage",
"forage",
"forest",
"forest ranger",
"forestry",
"forests",
"foxes",
"freshwater",
"frigate bird",
"furbearer",
"gamekeeper",
"gayal",
"geese",
"geology",
"geriatric",
"giraffe",
"gnatcatchers",
"gorilla",
"goshawk",
"grizzlies",
"grizzly bear",
"ground",
"guacharo",
"guadalupe fur seal",
"habitat",
"habitats",
"hairbird",
"hellbender",
"herbivores",
"herds",
"herpetology",
"houbara",
"indian elephant",
"insect",
"insects",
"invertebrates",
"japanese millet",
"jasper national park",
"jungle",
"kangaroo rat",
"kruger national park",
"leopard",
"leopards",
"lion",
"livestock",
"mammal",
"mammalian",
"mammals",
"marine",
"marine animal",
"migrating",
"migratory",
"monarch butterfly",
"monkey",
"mule deer",
"nocturnal",
"nongame",
"norfolk",
"oilbird",
"ornithologist",
"ortygan",
"otters",
"paguma",
"paleornithology",
"panther",
"park",
"prairie chicken",
"prairie dog",
"prairie grouse",
"prairie rattlesnake",
"prairie wolf",
"predatory animal",
"preservationist",
"procyonid",
"profusion",
"pronghorn",
"ptarmigans",
"rabbits",
"rain forest",
"rangership",
"raptor",
"raptors",
"reptiles",
"reservation",
"rhino",
"river otter",
"ruthless",
"safari",
"safari park",
"safeguard",
"sage grouse",
"sanctuaries",
"sanctuary",
"sandhill crane",
"sanwa millet",
"sar",
"sauvage",
"savage",
"savannah",
"save",
"saving",
"scenery",
"scenic",
"scenics",
"sea cow",
"sea elephant",
"sea leopard",
"seabird",
"seabirds",
"seafowl",
"seals",
"seeing",
"serengeti",
"seriema",
"shellfish",
"shoot",
"shooting",
"shore bird",
"shorebird",
"sightings",
"snail darter",
"snowshoe hare",
"songbirds",
"squirrels",
"stone curlew",
"sungrebe",
"taxonomic group",
"terrain",
"terrestrial",
"thremmatology",
"toll",
"tortoises",
"trees",
"tropical",
"tropical rain forest",
"vegetation",
"vertebrate",
"water rail",
"waterbirds",
"waterfalls",
"waterfowl",
"watershed",
"watersheds",
"waterways",
"weka",
"wetland",
"wetlands",
"whales",
"whitetail deer",
"whooping crane",
"wild",
"wild dog",
"wildflower",
"wildflowers",
"wildfowl",
"wildgrave",
"wildland",
"wildlife",
"willow grouse",
"wolves",
"wood stork",
"woodland",
"woodland caribou",
"woodlands",
"woods",
"wrybill",
"xerosere",
"zebra",
"zoo",
"zoographer",
"zoography",
"zoological",
"zoological garden",
"zoopathology",
"zoophagy",
"zootechnics",
"zootrophic"]



tribalismArray = ["ethnic", "cultural", "tribalism", "nomadic", "ethnicism", "bushmen", "tribe", "pygmy", "ethnicity", "tribal", "entno", "tribalistic"]

generalizationArray = ["africa", "subsaharan africa", "african", "continent", "sub-saharan africa"]

function hiliter(word, element, tropeClass) {
	/*
		var rgxp = new RegExp("\\b" + word + "?s" + "\\b" , 'gi'); // g modifier for global and i for case insensitive 
		var repl = '<span class="'+ tropeClass +'">' + word + '</span>';
		element.innerHTML = element.innerHTML.replace(rgxp, repl);*/


		var rgxp = new RegExp("\\b" + word + "\\b" , 'gi'); // g modifier for global and i for case insensitive 
		var repl = '<mark class="'+ tropeClass +'">' + word + '</mark>';
		element.innerHTML = element.innerHTML.replace(rgxp, repl);

		var rgxpPlural = new RegExp("\\b" + word + "s\\b" , 'gi');
		var replPlural = '<mark class="'+ tropeClass +'">' + word + 's</mark>';
		element.innerHTML = element.innerHTML.replace(rgxpPlural, replPlural);

};

function hasTrope(trope){
    return $( "mark" ).hasClass( trope ).toString();
};

$(function run() {

	$('aside').hide();
    $('#resultSummary').hide();
    $('#outputText').hide();



	$('#scanArticle').click(function(){
        var rawInput;
		rawInput = document.getElementById("inputText").value;
		rawInput = rawInput.replace(/\n\r?/g, '<br>');
    	$('#outputText').html(rawInput);

    	for (var i=0; i<tribalismArray.length; i++){
    		hiliter(tribalismArray[i], document.getElementById('outputText'),'trib');
    	}
    	for (var i=0; i<conflictAndViolenceArray.length; i++){
    		hiliter(conflictAndViolenceArray[i], document.getElementById('outputText'),'con');
    	}
    	for (var i=0; i<generalizationArray.length; i++){
    		hiliter(generalizationArray[i], document.getElementById('outputText'),'gen');
    	}
    	for (var i=0; i<natureArray.length; i++){
    		hiliter(natureArray[i], document.getElementById('outputText'),'nat');
    	}

    	$('#outputText').show();

    	$('#outputText').bind('mousemove', function(e){
   		 $('#tropeMessage').css({
       		top:   e.pageY
    		});
		});

    	$('.gen').hover(function(){
    		$('aside').hide();
    		$('#generalization').show();
    		$('#tropeMessage').css('background-color', '#fc846f');
   		});

    	$('.trib').hover(function(){
    		$('aside').hide();
    		$('#tribalism').show();
    		$('#tropeMessage').css('background-color', '#eaa8d2');
    	});


    	$('.nat').hover(function(){
    		$('aside').hide();
    		$('#tropeMessage').css('background-color', '#a7ffa3');
    		$('#nature').show();
    	});

    	$('.con').hover(function(){
    		$('aside').hide();
    		$('#tropeMessage').css('background-color', '#a8edea');
    		$('#conflict').show();
    	});


    	$('form').hover(function(){ 
    		$('tropeMessage').hide();
 		});

    	location.href = "#scannedResults";
        $('#resultSummary').html( "We've found language in your text that might be reinforcing these harmful tropes about Africa:<br>"); //

         if(hasTrope("con")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold; border-bottom: 3px solid #a8edea">Conflict<br></span>');
            $('#resultSummary').show();
        }
        
        
        if(hasTrope("gen")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold; border-bottom: 3px solid #fc846f">Generalization<br></span>');
            $('#resultSummary').show();
        }
        
        if(hasTrope("nat")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold; border-bottom: 3px solid #a7ffa3">Nature<br></span>');
            $('#resultSummary').show();
        }
        
        if(hasTrope("trib")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold; border-bottom: 3px solid #eaa8d2">Tribalism<br></span>');
            $('#resultSummary').show();
        }
        
        $('#resultSummary').append( "<br>Hover your mouse on the highlighted words below to learn more about each stereotype!<br>");
	});
	



});


