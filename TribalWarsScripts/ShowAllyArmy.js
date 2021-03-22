javascript: $(function()
{
	/* Change the world */
	var world = 'https://sk66.divoke-kmene.sk/game.php?screen=ally&mode=members_troops'
	//&player_id=885420&village=4137
	/* Add the header bar with troop types */
	$('<table class="vis w100" id="troopCounterAll"> <tr> <th style="min-width: 200px">Village</th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_spear.png" alt="" class="tooltip" title="Spear fighter" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_sword.png" alt="" class="tooltip" title="Swordsman" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_axe.png" alt="" class="tooltip" title="Axeman" /></th> <th><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_archer.png" alt="" class="tooltip" title="Archer" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_spy.png" alt="" class="tooltip" title="Scout" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_light.png" alt="" class="tooltip" title="Light cavalry" /></th> <th><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_marcher.png" alt="" class="tooltip" title="Mounted Archer" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_heavy.png" alt="" class="tooltip" title="Heavy cavalry" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_ram.png" alt="" class="tooltip" title="Ram" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_catapult.png" alt="" class="tooltip" title="Catapult" /></th> <th><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_knight.png" alt="" class="tooltip" title="Paladin" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_snob.png" alt="" class="tooltip" title="Nobleman" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/unit_militia.png" alt="" class="tooltip" title="Militia" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/icons/commands_outgoing.png" alt="" class="tooltip" title="Active commands" /></th> <th><img src="https://dsen.innogamescdn.com/asset/cf618eb/graphic/unit/att.png" alt="" class="tooltip" title="Incoming attacks" style="vertical-align: -3px" /></th> </tr> </table>').appendTo($('select[name=player_id]').parent())

	if(document.URL.indexOf("screen=ally&mode=members_troops") > 0)
	{
		function parse_troop_counts(data)
		{
			var overview_patt = /The troops overview shows the counts of troops owned by each village, including troops currently not in the village./i;
			var location = overview_patt.exec(data).index;
			var shorterText = data.substr(location, data.indexOf('</table>', location)-location);
			var troopPatt = /<tr>.*?<\/tr>/gis;
			var troops = [...shorterText.matchAll(troopPatt)];
			troops.shift(); /* remove the first match which is the header */

			var getSelectedUsername = /<option value="\d+" selected>\s+(.+?)\s+<\/option>/gis;
			var username = getSelectedUsername.exec(data);
			username = username[1];
			
			for(var i = 0; i < troops.length; i++)
			{
				$(troops[i][0].replace(/(<a href.+a>)/i, username.concat(" - $1"))).appendTo($('#troopCounterAll'));
			}
		}

	/* Iterate all selectable players */
		$.each($('select[name=player_id] option:not([disabled],[hidden])'), function( index, opt ) {
			setTimeout(function() {
				$.get(world+'&player_id='+opt.value, parse_troop_counts);
			}, 500 * index);
		});
	}
	else
	{
		window.location = world;
	}
});