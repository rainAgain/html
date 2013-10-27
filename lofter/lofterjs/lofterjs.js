$(function(){
	initEvents();
	checkTxt();
});

function initEvents(){
/*	$(".xihuandl dt").mouseover(function(){
		
		$(this).next("dd").slideDown(400);

	});*/
		/*$(".xihuandl").mouseout(function(){
		
		$(this).find("dd").slideUp(400);

	});*/




	$(".xihuandl").hover(function(){
		$(this).find("dd").slideDown(400);
	},function(){
		$(this).find("dd").slideUp(400);
	}

		);
		/*$(".xihuandl dd").hover(function(){
			$(this).show();

		},function(){
			$(this).slideUp(400);
		});*/

	$("#lanmu1").hover(function(){
		$(this).css("background-position","-111px -133px");

	},function(){
		$(this).css("background-position","-111px 0");

	});
	$("#lanmu2").hover(function(){
		$(this).css("background-position","-251px -133px");

	},function(){
		$(this).css("background-position","-251px 0");

	});
	$("#lanmu3").hover(function(){
		$(this).css("background-position","-391px -133px");

	},function(){
		$(this).css("background-position","-391px 0");

	});
	$("#lanmu4").hover(function(){
		$(this).css("background-position","-531px -133px");

	},function(){
		$(this).css("background-position","-531px 0");

	});


	$(".guanzhudiv").mouseover(function(){

		$(this).find("a").css("color","#fff");
	});

		$(".guanzhudiv").mouseout(function(){

		$(this).find("a").css("color","#bcbcbc");
	});

	$(".noinsterst").hover(function(){
		$(this).css("background-position","0 -1998px");

	},function(){
		$(this).css("background-position","-24px -1998px");

	});

	$("#yuming").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#f3f3f3");

	});
	$("#xiazhui").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#f3f3f3");

	});
	$("#wenzhang").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#f3f3f3");

	});
	$("#setting").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
	$("#fxhbk").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
	$("#wenzhang").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#f3f3f3");

	});
	$("#setting").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
	$("#fxhbk").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
		$("#friend1").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
		$("#friend2").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
		$("#activity1").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
		$("#activity2").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
		$("#chose1").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#e7e7e7");

	});
	$("#guanzhu").hover(function(){
		$(this).css("background-color","#fff");

	},function(){
		$(this).css("background-color","#f3f3f3");

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