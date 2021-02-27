var members = "147mirec;bonkourno;Eman;farmár0001;Jasur456;kubik14;Levov24;makaron371;maro1551;Nagato-Pein;Patko96;Riso2201;SexyKeksik25;ShelbyGT;Starý známy;Thanatos reborn;vrhacnozov;xXxPerúnxXx;samo15;dede53;Kramer;Kráľ granko;Dusky55;-Psycho-;Janik;roberto123;Vandroy05;smile;filip597;simeniik;roloo;Michal0132;remotust099;";
var dataVillageInfo;// display village info
$.get('/game.php?&screen=api&ajax=target_selection&input=' + villageData.coords + '+&type=coord', function (json) {
    dataVillageInfo =json;
}).then(function()
{
    console.log(dataVillageInfo);
    if (dataVillageInfo.villages[0].player_name != null) {
        $(`#playerName${villageNumber + 1}`).text(dataVillageInfo.villages[0].player_name);
    }
    else {
        $(`#playerName${villageNumber + 1}`).text("");
    }
    console.log(dataVillageInfo.villages[0].points);
    $(`#villageName${villageNumber + 1}`).text(dataVillageInfo.villages[0].name);
    $(`#villagePoints${villageNumber + 1}`)[0].innerHTML=dataVillageInfo.villages[0].points;
    $(`#villageDistance${villageNumber + 1}`).text(dataVillageInfo.villages[0].distance);
});

//game.php?village=6034&screen=overview_villages&mode=incomings&subtype=attacks
//game.php?village=6034&screen=reqdef&village_id=6034&id=92452811
function getAttacksData()
{
	var a = new XMLHttpRequest();
	//let targetUrl = `/game.php?village=${game_data.village.id}&screen=mail&mode=new`
	a.open("GET", `/game.php?village=${game_data.village.id}&screen=reqdef&village_id=${game_data.village.id}&id=${id}`, false);
	a.withCredentials = true;
	a.send();
	return a.response;
}

function contains(str, substr)
	return ( str.indexOf(substr) >= 0 );


function redirectToMailPoint()
{
	let href = window.location.href;
	let isMailPoint = contains(href, 'screen=mail') && (contains(href, 'mode=new') || !contains(href, 'mode='));
	if (isMailPoint) {
		return false;
	} else {
		if (confirm('Presmerujem ťa na správy ty lenivé prasa.\nSpusti potom script znovu :)')) {
			let targetUrl = `/game.php?village=${game_data.village.id}&screen=mail&mode=new`
			window.location.href = targetUrl;
		}
		return true;
	}
}

// A $( document ).ready() block.
$( document ).ready(function() {
	if (redirectToMailPoint())
		return true;

	console.log( "ready!" );
	document.getElementById("to").value = members;
});