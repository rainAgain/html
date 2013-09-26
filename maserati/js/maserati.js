$(function() {
	initEvents();
	$(document).ready(function(){
		$(".figcaption4").css("left","-320px");
				$(".figcaption3").css("left","-320px");
			$(".figcaption1").css("left","-320px");
			$(".figcaption2").css("left","-320px");
		
		$("#point").css("background-image",'url("css/images/wineyard.jpg")');
			$(".figcaption1").animate({left:130},500);

	});
	
});


function initEvents(){

	$(".mmvoice").mouseover(function(){
		$(this).css("background-position","0 -43px");
		
		/*$(".bgvioce1").animate({height:0},500);*/
		
	});

	$(".mmvoice").mouseout(function(){	
		
	/*	$(".bgvioce1").animate({height:43},500);*/
		$(this).css("background-position","0 0");
	});

	$("#granttourMenu a").hover(function(){
		
		$(this).css("background-image",'url("css/images/lvxingzile2.png")');
	},function(){
		$(this).css("background-image","none");
	});

	$("#btn1").click(function(){
			$(".figcaption4").css("left","-320px");
				$(".figcaption3").css("left","-320px");
			$(".figcaption1").css("left","-320px");
			$(".figcaption2").css("left","-320px");
		
		$("#point").css("background-image",'url("css/images/wineyard.jpg")');
			$(".figcaption1").animate({left:130},500);
	});
	$("#btn2").click(function(){
			$(".figcaption4").css("left","-320px");
				$(".figcaption3").css("left","-320px");
			$(".figcaption1").css("left","-320px");
			$(".figcaption2").css("left","-320px");
		$("#point").css("background-image",'url("css/images/boat.jpg")');
$(".figcaption2").animate({left:130},500);
	});
	
	$("#btn3").click(function(){
				$(".figcaption4").css("left","-320px");
				$(".figcaption3").css("left","-320px");
			$(".figcaption1").css("left","-320px");
			$(".figcaption2").css("left","-320px");
		$("#point").css("background-image",'url("css/images/quattroporte-v8_25.jpg")');	
	$(".figcaption3").animate({left:130},500);
	});
	
	$("#btn4").click(function(){
			$(".figcaption4").css("left","-320px");
				$(".figcaption3").css("left","-320px");
			$(".figcaption1").css("left","-320px");
			$(".figcaption2").css("left","-320px");
		$("#point").css("background-image",'url("css/images/121310M_2.jpg")');
	$(".figcaption4").animate({left:130},500);
	});
	

}
	
