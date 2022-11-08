alert("NoFe@r's payload loaded!");

var wood = $('#premium_exchange_rate_wood').text().replace("                     ","").split("\n")[1];
var stone = $('#premium_exchange_rate_stone').text().replace("                     ","").split("\n")[1];
var iron = $('#premium_exchange_rate_iron').text().replace("                     ","").split("\n")[1];

var WOOD_MIN = 200;
var STONE_MIN = 200;
var IRON_MIN = 200;

var alertSnd = new Audio('https://audio-previews.elements.envatousercontent.com/files/82685078/preview.mp3');

if( WOOD_MIN >= wood || STONE_MIN >= stone || IRON_MIN >= iron)
{
	alertSnd.play();
	alert("RYCHLOOOOOOOOOO!");
}
