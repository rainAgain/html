$(function(){
	initEvents();
	setInterval("add();",2000);
});


function initEvents(){
		$(".tbmenu").mouseover(function(){
		$(this).find("dt").addClass("dtover");
		$(this).find("dd").show();

});
	$(".tbmenu").mouseout(function(){
		$(this).find("dt").removeClass("dtover");
		$(this).find("dd").hide();
});

		$(".tbmenu2").mouseover(function(){
		$(this).find("dt").addClass("dtover");
		$(this).find("dd").show();

});
	$(".tbmenu2").mouseout(function(){
		$(this).find("dt").removeClass("dtover");
		$(this).find("dd").hide();
});









	$("#txt").keyup(function(){
		var val = $(this).val();
		if (val == "") {
			$(this).css("background-image",'url("images/T1vkeZFmRaXXXMtt6f-159-39.gif")');
		}else{
			$(this).css("background-image","none");
		}
		
	});


		$(".weather").mouseover(function(){
				$(".huafei").css({"background-color":"transparent",
				"font-weight":"400",
		});
			$(this).css({"background-color":"#fff",
				"font-weight":"700",
		});
			$(".huafeilm").hide();
			$(".weatherlm").show();

		});
			$(".huafei").mouseover(function(){
				$(".weather").css({"background-color":"transparent",
				"font-weight":"400",
		});
			$(this).css({"background-color":"#fff",
				"font-weight":"700",
		});
			$(".weatherlm").hide();
			$(".huafeilm").show();

		});



	$(".cxli").hover(function(){
		$(this).css("background-color","#ffa8ae");
		$(this).find("span").css("color","#fff");
		$(this).find("a").css("color","#fff");
	},function(){
		$(this).css("background-color","#fff");
		$(this).find("span").css("color","#e36b95");
		$(this).find("a").css("color","#666");
	});


	$("#taba1").mouseover(function(){
		$("#taba2").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$("#taba3").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$("#taba4").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$(".pannel2").hide();
		$(".pannel3").hide();
		$(".pannel4").hide();
		$(this).css({
			"background-color":"#fff",
			"font-weight": "700"
		});
		$(".pannel1").show();

	});

	$("#taba2").mouseover(function(){
		$("#taba1").css({
				"background-color":"transparent",
			"font-weight": "400"
		});
		$("#taba3").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$("#taba4").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$(".pannel1").hide();
		$(".pannel3").hide();
		$(".pannel4").hide();
		$(this).css({
			"background-color":"#fff",
			"font-weight": "700"
		});

		$(".pannel2").show();

	});

	$("#taba3").mouseover(function(){
		$("#taba1").css({
				"background-color":"transparent",
			"font-weight": "400"
		});
		$("#taba2").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$("#taba4").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$(".pannel1").hide();
		$(".pannel2").hide();
		$(".pannel4").hide();



		$(this).css({
			"background-color":"#fff",
			"font-weight": "700"
		});

		$(".pannel3").show();

	});
	$("#taba4").mouseover(function(){
		$("#taba1").css({
				"background-color":"transparent",
			"font-weight": "400"
		});
		$("#taba3").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$("#taba2").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$(".pannel1").hide();
		$(".pannel2").hide();
		$(".pannel3").hide();

		$(this).css({
			"background-color":"#fff",
			"font-weight": "700"
		});

		$(".pannel4").show();

	});

	$(".tabtab a").hover(function(){
		$(this).css("color","f60");
	},function(){
		$(this).css("color","#666");
	});


	$(".xbzi").hover(function(){
		$(".hongzi").css("margin","20px 0 0 0");
		$(this).find("p").css("color","#f60");
	},function(){
		$(".hongzi").css("margin","30px 0 0 0");
		$(this).find("p").css("color","#666");
	});


	$(".meinvzi").hover(function(){
		$(".lvzi").css("margin","20px 0 0 0");
		$(this).find("p").css("color","#f60");
	},function(){
		$(".lvzi").css("margin","30px 0 0 0");
		$(this).find("p").css("color","#666");
	});
	$(".meizhaungzi").hover(function(){
		$(".lanzi").css("margin","20px 0 0 0");
		$(this).find("p").css("color","#f60");
	},function(){
		$(".lanzi").css("margin","30px 0 0 0");
		$(this).find("p").css("color","#666");
	});

		$(".nvzhaungzi").hover(function(){
		$(".hongzi2").css("margin","20px 0 0 0");
		$(this).find("p").css("color","#f60");
	},function(){
		$(".hongzi2").css("margin","30px 0 0 0");
		$(this).find("p").css("color","#666");
	});

		$(".tianmaozi").hover(function(){
		$(".lvzi2").css("margin","20px 0 0 0");
		$(this).find("p").css("color","#f60");
	},function(){
		$(".lvzi2").css("margin","30px 0 0 0");
		$(this).find("p").css("color","#666");
	});

		$(".thatzi").hover(function(){
		$(".lanzi2").css("margin","20px 0 0 0");
		$(this).find("p").css("color","#f60");
	},function(){
		$(".lanzi2").css("margin","30px 0 0 0");
		$(this).find("p").css("color","#666");
	});

		$(".todayli").hover(function(){
			$(this).css("padding","10px 10px 10px 20px");
		},function(){
			$(this).css("padding","10px 10px 10px 10px");
		});

		$(".todayli2").hover(function(){
			$(this).css("padding","10px 10px 10px 20px");
		},function(){
			$(this).css("padding","10px 10px 10px 10px");
		});

		$(".todayli3").hover(function(){
			$(this).css("padding","10px 10px 10px 20px");
		},function(){
			$(this).css("padding","10px 10px 10px 10px");
		});

		$(".mask").hover(function(){
			$(".meng1").css("opacity","0.1");
			$(".meng1di").css("background-color","#000")
			$(".qkxxz1").css("color","#fff");
		},function(){
				$(".meng1").css("opacity","0");
			$(".meng1di").css("background-color","#fff");
			$(".qkxxz1").css("color","#666");
		});

			$(".mask2").hover(function(){
			$(".meng2").css("opacity","0.1");
			$(".meng2di").css("background-color","#000")
			$(".qkxxz2").css("color","#fff");
		},function(){
				$(".meng2").css("opacity","0");
			$(".meng2di").css("background-color","#fff");
			$(".qkxxz2").css("color","#666");
		});

				$(".mask3").hover(function(){
			$(".meng3").css("opacity","0.1");
			$(".meng3di").css("background-color","#000")
			$(".qkxxz3").css("color","#fff");
		},function(){
				$(".meng3").css("opacity","0");
			$(".meng3di").css("background-color","#fff");
			$(".qkxxz3").css("color","#666");
		});

					$(".mask4").hover(function(){
			$(".meng4").css("opacity","0.1");
			$(".meng4di").css("background-color","#000")
			$(".qkxxz4").css("color","#fff");
		},function(){
				$(".meng4").css("opacity","0");
			$(".meng4di").css("background-color","#fff");
			$(".qkxxz4").css("color","#666");
		});

			$(".zxn1").hover(function(){
			$(".zxn11").css("opacity","0.1");
			$(".zxn11di").css("background-color","#000")
			$(".qkxxz5").css("color","#fff");
		},function(){
				$(".zxn11").css("opacity","0");
			$(".zxn11di").css("background-color","#fff");
			$(".qkxxz5").css("color","#666");
		});
					$(".zxn2").hover(function(){
			$(".zxn22").css("opacity","0.1");
			$(".zxn22di").css("background-color","#000")
			$(".qkxxz6").css("color","#fff");
		},function(){
				$(".zxn22").css("opacity","0");
			$(".zxn22di").css("background-color","#fff");
			$(".qkxxz6").css("color","#666");
		});

			$(".zxn3").hover(function(){
			$(".zxn33").css("opacity","0.1");
			$(".zxn33di").css("background-color","#000")
			$(".qkxxz7").css("color","#fff");
		},function(){
				$(".zxn33").css("opacity","0");
			$(".zxn33di").css("background-color","#fff");
			$(".qkxxz7").css("color","#666");
		});

			$(".zxn4").hover(function(){
			$(".zxn44").css("opacity","0.1");
			$(".zxn44di").css("background-color","#000")
			$(".qkxxz8").css("color","#fff");
		},function(){
				$(".zxn44").css("opacity","0");
			$(".zxn44di").css("background-color","#fff");
			$(".qkxxz8").css("color","#666");
		});


			$("#taba11").mouseover(function(){
		$("#taba22").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$("#taba33").css({
						"background-color":"transparent",
					"font-weight": "400"
				});

		$(".pannel22").hide();
		$(".pannel33").hide();
		$(this).css({
			"background-color":"#fff",
			"font-weight": "700"
		});
		$(".pannel11").show();

	});

					$("#taba22").mouseover(function(){
		$("#taba11").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$("#taba33").css({
						"background-color":"transparent",
					"font-weight": "400"
				});

		$(".pannel11").hide();
		$(".pannel33").hide();
		$(this).css({
			"background-color":"#fff",
			"font-weight": "700"
		});
		$(".pannel22").show();

	});

					$("#taba33").mouseover(function(){
		$("#taba11").css({
						"background-color":"transparent",
					"font-weight": "400"
				});
		$("#taba22").css({
						"background-color":"transparent",
					"font-weight": "400"
				});

		$(".pannel11").hide();
		$(".pannel22").hide();
		$(this).css({
			"background-color":"#fff",
			"font-weight": "700"
		});
		$(".pannel33").show();

	});



}

	var i=0;
	function add(){
		i++;
			$(".slidenav li").css("background-position","-20px -60px");
		if (i!=5) {
			$(".img").css("background-image",'url("css/images/'+i+'.jpg")');
			$("#color"+i).css("background-position","0px -60px");
		
		}else{
			i=1;
			$("#color"+i).css("background-position","0px -60px");
			$(".img").css("background-image",'url("css/images/'+i+'.jpg")');
		
		}

	}