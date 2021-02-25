function setMS(){
	var element=document.getElementById("serverTime");
	var dextersk=document.getElementById("relative_time");
	var time=element.innerHTML.match(/^\d+\:\d+\:\d+/);
	var time1=dextersk.innerHTML.match(/^\d+\:\d+\:\d+/);
	var date=new Date();
	var ms=(date.getMilliseconds()).toString();
	
	while(ms.length<3)
	{
		ms="0"+ms;
	};
	
	element.innerHTML=time+":"+ms;
	dextersk.innerHTML=time1+":"+ms;
}(function main(){
	window.setInterval(setMS,1);
})();