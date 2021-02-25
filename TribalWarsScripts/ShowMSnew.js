function setMS()
{
	// Príchod:	27.02. o 04:12:00
	// Príchod:	zajtra 01:59:55
	// Príchod:	dnes 13:52:03
	
	var serverTime = document.getElementById("serverTime");
	var relative_time = document.getElementsByClassName("relative_time");
	var time = serverTime.innerHTML.match(/^\d+\:\d+\:\d+/);
	
	if( relative_time.length > 0 ) // elements with class "relative_time" exist
		var time1 = relative_time[0].innerHTML.match(/([\s\S].*?)(\d+\:\d+\:\d+)/g);
	else
	{
		alert("Class relative_time not found.");
		return;
	}
	
	var date = new Date();
	var ms = ( date.getMilliseconds() ).toString();
	
	while( ms.length < 3 )
		ms="0"+ms;
	
	serverTime.innerHTML=time+":"+ms;
	relative_time[0].innerHTML=time1+":"+ms;

}(function main()
{
	window.setInterval(setMS,1);
})();