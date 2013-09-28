$(function(){

	initEvents();
		initPosition();
}); 






function initPosition(){

$.each($(".tbmenu"),function(i){
 $(this).css("left",i * 10 + "px");
});

}


function initEvents(){

	$(".tbmenu").mouseover(function(){
		$(this).find("dt").addClass("dtover");
		$(this).find("dd").show();

});
	$(".tbmenu").mouseout(function(){
		$(this).find("dt").removeClass("dtover");
		$(this).find("dd").hide();
});

	$("#logo").hover(function(){
		$(this).css("background-position","0 -40px");
	},function(){
		$(this).css("background-position","0 0");
	});
}