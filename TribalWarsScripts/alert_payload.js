/**
 * Initialization
 
javascript:
window.pb=[];
window.pb.WOOD_MIN=400,
window.pb.STONE_MIN=400,
window.pb.IRON_MIN=400,
window.pb.SOUND: 'https://audio-previews.elements.envatousercontent.com/files/82685078/preview.mp3',
$.getScript('https://dextersk.github.io/TribalWarsScripts/alert_payload.js');

*/
  
function contains(str, substr) {
	return str.indexOf(substr) >= 0;
}

function redirectToExchangePoint() {
	let href = window.location.href;
	let isMailPoint = contains(href, 'screen=market') && (contains(href, 'mode=exchange') );
	if (isMailPoint) {
		return false;
	} else {
		if (confirm('Budeš presmerovaný/á na stránku PB KOKOCIN XAXAXAX.')) {
			let targetUrl = `/game.php?village=${game_data.village.id}&screen=market&mode=exchange`
			window.location.href = targetUrl;
		}
		return true;
	}
}

var check = function()
{

  
  // Override these settings by defining `window.pb`
  var settings = $.extend({
      WOOD_MIN: 200,
      STONE_MIN: 200,
      IRON_MIN: 200,
      SOUND: 'https://audio-previews.elements.envatousercontent.com/files/82685078/preview.mp3',
      cookieName: 'pfdex-history'
  }, window.pb || {});
  
  console.log('Using settings: ', settings);
  	
  //alert("NoFe@r's payload loaded!");
  redirectToExchangePoint();
  
  var wood = $('#premium_exchange_rate_wood').text().replace("                     ","").split("\n")[1];
  var stone = $('#premium_exchange_rate_stone').text().replace("                     ","").split("\n")[1];
  var iron = $('#premium_exchange_rate_iron').text().replace("                     ","").split("\n")[1];
  var alertSnd = new Audio( settings.SOUND );

  if( settings.WOOD_MIN >= wood )
  {
	  alertSnd.play();
  	//alertSnd.play();
	//confirm('Počet DREVA 1 PB klesol na ' + wood) ? after() : after();
  	//setTimeout(function() { alert('Počet DREVA 1 PB klesol na ' + wood); }, 10);
  	//document.getElementById("market_status_bar").setAttribute("id", "div_top2");
  	//document.getElementById('market_status_bar').style.color = 'red';
  	//document.getElementById('market_status_bar').style.fontSize = 'xx-large';
	
	/*
   var tag = document.createElement("p");
   var text = document.createTextNode('Počet DREVA ZA 1 PB klesol na ' + wood);
   tag.appendChild(text);
   var element = document.getElementById("market_status_bar");
   element.appendChild(tag);

	
  	document.getElementById("market_status_bar").innerHTML='Počet DREVA ZA 1 PB klesol na ' + wood;
    */
  }
  
  if( settings.STONE_MIN >= stone )
  {
	  alertSnd.play();
	 // confirm('Počet HLINY za 1 PB klesol na ' + stone) ? after() : after();
	  /*
  	alertSnd.play();
  	//setTimeout(function() { alert('Počet HLINY za 1 PB klesol na ' + stone); }, 10);
  	document.getElementById('market_status_bar').style.color = 'red';
  	document.getElementById('market_status_bar').style.fontSize = 'xx-large';
  	document.getElementById("market_status_bar").innerHTML='Počet HLINY ZA 1 PB klesol na ' + stone;
    */
  }
  
  if( settings.IRON_MIN >= iron )
  {
	  alertSnd.play();
	  //confirm('Počet ŽELEZA za 1 PB klesol na ' + iron) ? after() : after();
	  /*
  	alertSnd.play();
  	//setTimeout(function() { alert('Počet ŽELEZA za 1 PB klesol na ' + iron); }, 10);
  	document.getElementById('market_status_bar').style.color = 'red';
  	document.getElementById('market_status_bar').style.fontSize = 'xx-large';
  	document.getElementById("market_status_bar").innerHTML='Počet ŽELEZA ZA 1 PB klesol na ' + iron;
    */
  }
  console.log("run");
};

while( true )
	check();