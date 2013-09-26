$(function(){
	initEvents();
	checkTxt();
});

function initEvents(){
	$(".xihuandl dt").mouseover(function(){
		
		$(this).next("dd").slideDown(400);

	});
		/*$(".xihuandl").mouseout(function(){
		
		$(this).find("dd").slideUp(400);

	});*/
		$(".xihuandd").hover(function(){
			$(this).show();


		},function(){
			$(this).slideUp(400);
		});


	$(".guanzhudiv").mouseover(function(){

		$(this).find("a").css("color","#fff");
	});

		$(".guanzhudiv").mouseout(function(){

		$(this).find("a").css("color","#bcbcbc");
	});



	$(".design1").hover(function(){
		$(this).css("color","#7594b3");

	},function(){
		$(this).css("color","#888888");

	});
	$(".designimage").hover(function(){
		$(this).css("background-position","-67px -1973px");
	},function(){
		$(this).css("background-position","-88px -1973px");
	});

	$(".jiahaoyou").hover(function(){
		$(this).css("background-position","0 -795px");
	},function(){
		$(this).css("background-position","0 -830px");
	});

	$("#friend1").hover(function(){
		
		$(this).find(".noinsterst").show();
	},function(){
		$(this).find(".noinsterst").hide();
	});

	$("#friend2").hover(function(){
		
		$(this).find(".noinsterst").show();
	},function(){
		$(this).find(".noinsterst").hide();
	});

$(".youshang1").hover(function(){
		$(".youshang1").css("background-position", "-787px 0");
	},function(){
		$(".youshang1").css("background-position", "-669px 0");
	});
/*
		$(".neirong").mouseover(function(){
		
		var flag=$(".neirong").attr("openflag");
		
		$(".neirong").attr("openflag","no");
		if (flag=="no") {

			$(".youshang1").css("background-position", "-669px 0");
		}else{
			$(".youshang1").css("background-position", "-787px 0");

		}
*/



	
		$("#xiazhui").click(function(){
		
		var flag=$("#dadadada").attr("openflag");
		$("#dadadada").hide();
		$("#dadadada").attr("openflag","no");
		if (flag=="no") {

			$("#dadadada").show();
			$("#dadadada").attr("openflag","yes");
		}else{
			$("#dadadada").hide();
			$("#dadadada").attr("openflag","no");

		}
	});

		$("#cjzbk").hover(function(){
			$("#cjzbk").css("background-color","#333333");
		},function(){
			$("#cjzbk").css("background-color","#000");
		});








 	$("#find").keyup(function(e){
 		checkTxt();
	if(e.keyCode == 13){
 	search();
 		}
 	});

 	$("#bigger").click(function(){
 		search();

 	});

}

	function checkTxt(){
		var val = $("#find").val();

 		if(val ==""){
 			$("#find").css("background-image",'url("loftercss/images/search.png")');

 		}else{
 			$("#find").css("background-image","none");
 		}

	}
/*function search(){
	$("#sContent").slideDown(500);
}*/