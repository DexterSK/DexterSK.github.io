var message;
var members = "147mirec;bonkourno;Eman;farmár0001;Jasur456;kubik14;Levov24;makaron371;maro1551;Nagato-Pein;Patko96;Riso2201;SexyKeksik25;ShelbyGT;Starý známy;Thanatos reborn;vrhacnozov;xXxPerúnxXx;samo15;dede53;Kramer;Kráľ granko;Dusky55;-Psycho-;Janik;roberto123;Vandroy05;smile;filip597;simeniik;roloo;Michal0132;remotust099;";


function contains(str, substr) {
	return str.indexOf(substr) >= 0;
}

function redirectToMailPoint() {
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

var check function()
{
	if( !redirectToIncomingsPoint )
	{
		$('input:checkbox').prop('checked', true);
		$("input[name=label]").click();
		$("input[name=reqdef]").click();
		message = $("#simple_message").val();

		if( redirectToMailPoint() )
		{
			$("#to").val( members );
			$("input[name=subject]").val("Urgent SOS");	
			$("#message").val( message );
			$("input[name=send]").click();
			//var h = $("#h").val();
		}
	}
	else
		setTimeout(check, 1000); // check again in a second
};



/*
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

	
	if( redirectToIncomingsPoint() )
		return;
	
	setTimeout(function (){
		$('input:checkbox').prop('checked', true);
	}, 5000);
	setTimeout(function (){
		$("input[name=label]").click();
	}, 5000);
	setTimeout(function (){
		$("input[name=reqdef]").click();
	}, 5000);
	setTimeout(function (){
		message = $("#simple_message").val();
	}, 5000);

	if( redirectToMailPoint() )
		return;
	
	setTimeout(function (){
		$("#to").val( members );
	}, 5000);
	setTimeout(function (){
		$("input[name=subject]").val("Urgent SOS");
	}, 5000);
	setTimeout(function (){
		$("#message").val( message );
	}, 5000);
	setTimeout(function (){
		$("input[name=send]").click();
	}, 5000);
	setTimeout(function (){
		var h = $("#h").val();
	}, 5000);
})();
*/