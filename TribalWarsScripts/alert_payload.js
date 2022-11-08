/**
 * Initialization
 
javascript:
window.pb=[];
window.pb.WOOD_MIN=400,
window.pb.STONE_MIN=400,
window.pb.IRON_MIN=400,

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
	//setTimeout(function() { alert('Počet DREVA 1 PB klesol na ' + wood); }, 10);
	//document.getElementById("market_status_bar").setAttribute("id", "div_top2");
	$( "#market_status_bar" ).dialog();
	document.getElementById("market_status_bar").innerHTML='Počet DREVA 1 PB klesol na ' + wood;
}

if( settings.STONE_MIN >= stone )
{
	alertSnd.play();
	//setTimeout(function() { alert('Počet HLINY za 1 PB klesol na ' + stone); }, 10);
	$( "#market_status_bar" ).dialog();
	document.getElementById("market_status_bar").innerHTML='Počet HLINY 1 PB klesol na ' + stone;

}

if( settings.IRON_MIN >= iron )
{
	alertSnd.play();
	//setTimeout(function() { alert('Počet ŽELEZA za 1 PB klesol na ' + iron); }, 10);
	$( "#market_status_bar" ).dialog();
	document.getElementById("market_status_bar").innerHTML='Počet ŽELEZA 1 PB klesol na ' + iron;

}
