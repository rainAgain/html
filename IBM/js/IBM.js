$(function(){
	initEvents();
	checkTxt();



});

/*------------------调用---------------------*/
	function checkTxt(){
		var val = $("#find").val();

 		if(val ==""){
 			$("#find").css("background-image",'url("loftercss/images/search.png")');

 		}else{
 			$("#find").css("background-image","none");
 		}

	}


/*-------------------------调用 end-----------------*/
function initEvents(){


/*------------------------搜索------------------------------*/
 	$("#find").keyup(function(e){
 		checkTxt();
	if(e.keyCode == 13){
 	search();
 		}
 	});

 	$("#bigger").click(function(){
 		search();

 	});

/*------------------------搜索  end------------------------------*/

/*----------------------------------nav------------------------*/

 	$(".tab").click(function(){
		var flag=$(this).attr("openflag");
		$(".tabdd").hide();
		
		$(".tab").attr("openflag","no");
		if (flag=="no") {

			$(this).next("dd").show();
			$(this).attr("openflag","yes");

		}else{
	
			$(this).next("dd").hide();
			$(this).attr("openflag","no");
			
		}
	$(".tab").removeClass("tdtover");
		$(this).addClass("tdtover");
	});

/*----------------------------------nav end------------------------*/

	  $("#img1").click(function(){
     	$(".lefttuzi").animate({left:160},500);
     	$("#maintu").animate({left:0},500);
     	$(".lefttuzi2").animate({left:-1379},1500);
     	$("#maintu2").animate({left:1279},1500);
     });
     $("#img2").click(function(){
     	$(".lefttuzi").animate({left:-750},500);
     	$("#maintu").animate({left:-1379},1500);
     	$(".lefttuzi2").animate({left:160},1500);
     	$("#maintu2").animate({left:0},1500);
     	$(".lefttuzi3").animate({left:1379},1500);
     	$("#maintu3").animate({left:1379},1500);
     	
     });
       $("#img3").click(function(){
     	$(".lefttuzi2").animate({left:-750},500);
     	$("#maintu2").animate({left:-1379},1500);
     	$(".lefttuzi3").animate({left:160},1500);
     	$("#maintu3").animate({left:0},1500);
     });

       $(".tutu1").hover(function(){
       	$(this).css("box-shadow"," 0 0 5px rgba(0,0,0,0.5)");
       },function(){
       		$(this).css("box-shadow"," 0 0 0px rgba(0,0,0,0)");
       });
        $(".tutu2").hover(function(){
       	$(this).css("box-shadow"," 0 0 5px rgba(0,0,0,0.5)");
       },function(){
       		$(this).css("box-shadow"," 0 0 0px rgba(0,0,0,0)");
       });
         $(".tutu3").hover(function(){
       	$(this).css("box-shadow"," 0 0 5px rgba(0,0,0,0.5)");
       },function(){
       		$(this).css("box-shadow"," 0 0 0px rgba(0,0,0,0)");
       });

}

