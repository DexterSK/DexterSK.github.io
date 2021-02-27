(() => 
{
	var members = "147mirec;bonkourno;Eman;farmár0001;Jasur456;kubik14;Levov24;makaron371;maro1551;Nagato-Pein;Patko96;Riso2201;SexyKeksik25;ShelbyGT;Starý známy;Thanatos reborn;vrhacnozov;xXxPerúnxXx;samo15;dede53;Kramer;Kráľ granko;Dusky55;-Psycho-;Janik;roberto123;Vandroy05;smile;filip597;simeniik;roloo;Michal0132;remotust099;";

	function redirectToMailPoint() {
		function contains(str, substr) {
			return str.indexOf(substr) >= 0;
		}
		let href = window.location.href;
		let isMailPoint = contains(href, 'screen=mail') && (contains(href, 'mode=new') || !contains(href, 'mode='));
		if (isMailPoint) {
			return false;
		} else {
			if (confirm('Presmerujem ťa na správy ty lenivé prasa.')) {
				let targetUrl = `/game.php?village=${game_data.village.id}&screen=mail&mode=new`
				window.location.href = targetUrl;
			}
			return true;
		}
	}

	function redirectToIncomingsPoint() {
		function contains(str, substr) {
			return str.indexOf(substr) >= 0;
		}
		let href = window.location.href;
		let isIncomingsPoint = contains(href, 'screen=overview_villages') && (contains(href, 'mode=incomings') || !contains(href, 'mode='));
		if (isIncomingsPoint) {
			return false;
		} else {
			if (confirm('Presmerujem ťa na správy ty lenivé prasa.')) {
				let targetUrl = `/game.php?village=${game_data.village.id}&screen=overview_villages&mode=incomings&subtype=attacks`
				window.location.href = targetUrl;
			}
			return true;
		}
	}

	
	if( redirectToIncomingsPoint() )
		return;
	
	var select_all	= document.getElementById('select_all').onclick();
	var label 		= document.getElementsByName("label")[0].submit();
	var reqdef		= document.getElementsByName("reqdef")[0].submit();
	var message		= document.getElementsByName("simple_message")[0].value;

	if( !redirectToMailPoint() )
		return;
		
	document.getElementById("to").value = members;
	document.getElementsByName("subject")[0].value = "SOS!";
	document.getElementsByName("text")[0].value = message;
	document.getElementsByName("h")[0].value;
	// CO TI JEBE
})();