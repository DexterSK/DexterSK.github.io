function setMS()
{
	var serverTime = document.getElementById("serverTime");
	var relative_time = document.getElementsByClassName("relative_time");
	var time = serverTime.innerHTML.match(/^\d+\:\d+\:\d+/);
	
	if( relative_time.length > 0 ) // elements with class "relative_time" exist
		var time1 = relative_time.innerHTML.match(/^\d+\:\d+\:\d+/);
	
	var date = new Date();
	var ms = ( date.getMilliseconds() ).toString();
	
	while( ms.length < 3 )
	{
		ms="0"+ms;
	};
	
	serverTime.innerHTML=time+":"+ms;
	
	if( relative_time.length > 0 ) // elements with class "relative_time" exist
		relative_time.innerHTML=time+":"+ms;

}(function main()
{
	window.setInterval(setMS,1);
})();