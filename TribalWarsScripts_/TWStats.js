name_var = 'Meno';
show_points = true;
show_villages = true;
show_ODA = true;
show_ODD = true;
dimensions =[180, 96];

/* Change nothing below here */
plus_one = 1;
type = "player";

if( typeof (main) != 'undefined' )
{
	$ = main.$;
	game_data = main.game_data;
}

if(game_data.market != "en")
{
	twstats = "http://"+game_data.market+".twstats.com/";
}
else
{
	twstats = "http://twstats.com/";
}

if (document.getElementById("ally_content") != null)
{
	table = document.getElementById("ally_content").getElementsByTagName("table")[0];
	plus_one = 0;
}
else if (document.getElementById("player_ranking_table"))
{
	table = document.getElementById("player_ranking_table");
}
else if (document.getElementById("ally_ranking_table"))
{
	table = document.getElementById("ally_ranking_table");
	type = "tribe";
}
else if (document.getElementById("con_ally_ranking_table"))
{
	table = document.getElementById("con_ally_ranking_table");
	type = "tribe";
}
else if (document.getElementById("con_player_ranking_table"))
{
	table = document.getElementById("con_player_ranking_table");
}
else if (document.getElementById("kill_player_ranking_table"))
{
	table = document.getElementById("kill_player_ranking_table").parentNode.getElementsByTagName("table")[1];
} 
else if (document.getElementById("kill_ally_ranking_table")) 
{
	table = document.getElementById("kill_ally_ranking_table").parentNode.getElementsByTagName("table")[1];
	type="tribe";
} 
else
{
	table = $("table:contains('"+name_var+"')")[$("table:contains('"+name_var+"')").length - 1];
	plus_one = 1;
} 

rows = table.getElementsByTagName("tr"); 
	
if( show_points == true )
	rows[0].innerHTML += "<th><center><b><u>Počet bodov</u></b></center></th>";

if( show_villages == true )
	rows[0].innerHTML += "</b></center></th><th><center><b><u>Počet dedín</u></b></center></th>";

if( show_ODA == true )
	rows[0].innerHTML += "<th><center><b><u>ODA</u></b></center></th>";

if( show_ODD == true )
	rows[0].innerHTML += "<th><center><b><u>ODD</u></b></center></th>";

for( i = 1;i < rows.length - 1 + plus_one;i++ )
{
	alert(rows.length);//26
	alert(rows.toString());//object hrml collection
	
	var s1 = rows.getElementsByTagName("a")[0].toString();
	alert( s1 );
	
	var s2 = s1.match(/id=\d+/).toString();
	alert( s2 );
	
	pid = s2.split( "=")[1];
	alert( pid );
	
	if (show_points == true)
	{
		rows.innerHTML += "<td><img src='"+twstats + game_data.world + "/image.php?type=" + type + "graph&graph=points&id=" + pid + "' style='width:" + dimensions[0] + "px; height:" + dimensions[1] + "px'></img></td>";
	}
	
	if (show_villages == true)
	{
		rows.innerHTML += "<td><img src='"+twstats + game_data.world + "/image.php?type=" + type + "graph&graph=villages&id=" + pid + "' style='width:" + dimensions[0] + "px; height:" + dimensions[1] + "px'></img></td>";
	}
	
	if (show_ODA == true)
	{
		rows.innerHTML += "<td><img src='"+twstats + game_data.world + "/image.php?type=" + type + "graph&graph=oda&id=" + pid + "' style='width:" + dimensions[0] + "px; height:" + dimensions[1] + "px'></img></td>";
	}
	
	if (show_ODD == true)
	{
		rows.innerHTML += "<td><img src='"+twstats + game_data.world + "/image.php?type=" + type + "graph&graph=odd&id=" + pid + "' style='width:" + dimensions[0] + "px; height:" + dimensions[1] + "px'></img></td>";
	}
}

void (0);