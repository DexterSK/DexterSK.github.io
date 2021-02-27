(() => 
{
	var message;
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
			if (confirm('Budeš presmerovaný/á na stránku hromadnej správy.')) {
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
			if (confirm('Budeš presmerovaný/á na stránku SOS.')) {
				let targetUrl = `/game.php?village=${game_data.village.id}&screen=overview_villages&mode=incomings&subtype=attacks`
				window.location.href = targetUrl;
			}
			return true;
		}
	}

	
	if( !redirectToIncomingsPoint() )
		return;
	
	$('input:checkbox').prop('checked', true);
	setTimeout(1000);
	$("input[name=label]").click();
	setTimeout(1000);
	$("input[name=reqdef]").click();
	setTimeout(1000);
	message = $("#simple_message").val();

	if( !redirectToMailPoint() )
		return;
	
	setTimeout(1000);
	$("#to").val( members );
	setTimeout(1000);
	$("input[name=subject]").val("Urgent SOS");
	setTimeout(1000);
	$("#message").val( message );
	setTimeout(1000);
	var h = $("#h").val();
	setTimeout(1000);
	$("input[name=send]").click();
})();