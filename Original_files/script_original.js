/* Author: Zineb Oulmakki*/

var archaismArray = ["primitive", "archaic", "savage", "traditional" , "ancestral", "wild", "barbaric", "underdeveloped", "exotic", "third world", "witchcraft"];

var tribalismArray = ["tribe", "tribal", "tribalism", "tribalistic", "ethnic", "ethnicity"];

var corruptionArray = ["regime","regimes","dictator","dictators","strongman","strongmen","corrupt","corruption"];

var generalizationArray = ["africa","african", "subsaharan africa","sub-saharan africa","continent"];

var lightArray = ["sunset","sunrise","sunshine","sunlight","sun","glow","light"];

var natureArray = ["savannah","rain forest","jungle","trees","insect","lion","rhino","hunt","big game"];

var darknessArray = ["darkness","dark continent","darkest","bleak","hopeless","devastated","ridden","famine","hunger","starvation","disease","epidemic","child soldier","hiv","ebola","rebels","guerilla","war","conflict","armed","weapon","pirate","attack","kill","death","dead","murder","fear","menace","drought","smuggled weapons","smugglers","crime","gang","poor","desperate","ransom","execution","shot","death","pain","suffer","civil war","chaos","refugees","gun","gunshot"];

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

    	for (var i=0; i<archaismArray.length; i++){
    		hiliter(archaismArray[i], document.getElementById('outputText'),'arc');
    	}
    	for (var i=0; i<tribalismArray.length; i++){
    		hiliter(tribalismArray[i], document.getElementById('outputText'),'trib');
    	}
    	for (var i=0; i<corruptionArray.length; i++){
    		hiliter(corruptionArray[i], document.getElementById('outputText'),'cor');
    	}
    	for (var i=0; i<darknessArray.length; i++){
    		hiliter(darknessArray[i], document.getElementById('outputText'),'dar');
    	}
    	for (var i=0; i<lightArray.length; i++){
    		hiliter(lightArray[i], document.getElementById('outputText'),'lig');
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


    	$('.lig').hover(function(){
    		$('aside').hide();
    		$('#tropeMessage').css('background-color', '#fff587');
    		$('#light').show();
    	});

    	$('.dar').hover(function(){
    		$('aside').hide();
    		$('#tropeMessage').css('background-color', '#c4bfbc');
    		$('#darkness').show();
    	});


    	$('.cor').hover(function(){
    		$('aside').hide();
    		$('#tropeMessage').css('background-color', '#a8edea');
    		$('#corruption').show();
    	});


    	$('.arc').hover(function(){
    		$('aside').hide();
    		$('#tropeMessage').css('background-color', '#ffc682');
    		$('#archaism').show();
    	});

    	$('form').hover(function(){ 
    		$('tropeMessage').hide();
 		});

    	location.href = "#scannedResults";
        $('#resultSummary').html( "We've found language in your text that might be reinforcing these harmful tropes about Africa:<br>"); //
         if(hasTrope("arc")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold; border-bottom: 3px solid #ffc682">Archaism<br></span>');
            $('#resultSummary').show();
        }
         if(hasTrope("cor")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold; border-bottom: 3px solid #a8edea">Corruption<br></span>');
            $('#resultSummary').show();
        }
        if(hasTrope("dar")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold; border-bottom: 3px solid #c4bfbc">Darkness<br></span>');
            $('#resultSummary').show();
        }
        if(hasTrope("gen")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold; border-bottom: 3px solid #fc846f">Generalization<br></span>');
            $('#resultSummary').show();
        }
        if(hasTrope("lig")==='true'){
            $( "#resultSummary" ).append ('<span style="font-weight:bold"; border-bottom: 3px solid #fff587">Light<br></span>');
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


