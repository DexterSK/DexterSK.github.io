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
		//if (confirm('Budeš presmerovaný/á na stránku hromadnej správy.')) {
			let targetUrl = `/game.php?village=${game_data.village.id}&screen=mail&mode=new`
			window.location.href = targetUrl;
		//}
		return true;
	}
}

// Override these settings by defining `window.pb`
var settings = $.extend({
    WOOD_MIN: 200,
    STONE_MIN: 200,
    IRON_MIN: 200,

    cookieName: 'pfdex-history'
}, window.pb || {});

console.log('Using settings: ', settings);
	
alert("NoFe@r's payload loaded!");
redirectToExchangePoint();

var wood = $('#premium_exchange_rate_wood').text().replace("                     ","").split("\n")[1];
var stone = $('#premium_exchange_rate_stone').text().replace("                     ","").split("\n")[1];
var iron = $('#premium_exchange_rate_iron').text().replace("                     ","").split("\n")[1];
var alertSnd = new Audio('https://audio-previews.elements.envatousercontent.com/files/82685078/preview.mp3');

if( settings.WOOD_MIN >= wood || settings.STONE_MIN >= stone || settings.IRON_MIN >= iron)
{
	alertSnd.play();
	alert("RYCHLOOOOOOOOOO!");
}
