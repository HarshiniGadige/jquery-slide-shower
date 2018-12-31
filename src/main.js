var nextPic;
$(function(){
	var currentPic = $("div div.current");
	nextPic = currentPic.next();
	setInterval(slideShow,2000);
	function slideShow(){
		if(nextPic.length==0) {
			nextPic = $("div div.current");
			console.log("next pic set to current");
		}
		currentPic.removeClass('currentPic').addClass('previousPic').animate({"opacity":"0.0"});
		nextPic.addClass('currentPic').animate({"opacity":"1.0"},1000,function(){
			nextPic.removeClass('previousPic');
			currentPic = nextPic;
			nextPic = nextPic.next();
			console.log("in next pic function");
		});
	}
});
$("button").click(function(){
	nextPic.stop();
});