$(function  () {
	InitEvents();
	setInterval("add();",3000);
});



function InitEvents(){

	$(".view a").hover(function(){
		$(this).css("color","#888");
	},function(){
		$(this).css("color","#9d9d9d");
	});


		$(".menu a").hover(function(){
		$(this).css("color","#888");
	},function(){
		$(this).css("color","#9d9d9d");
	});
		$(".row a").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

		$(".pannelone").hover(function(){
			$(this).find("a").css("color","#888");
		},function(){
			$(this).find("a").css("color","9d9d9d");
		});
		$(".block4a").hover(function(){
		$(this).css("color","#555");
	},function(){
		$(this).css("color","#9d9d9d");
	});


}

var i=0;
function add(){
	 i++;
	if (i!=9) {
	 $(".contentimage").css("background-image",'url("css/images/'+i+'.jpg")')
	
	}else
	{
		i=1;
	$(".contentimage").css("background-image",'url("css/images/'+i+'.jpg")')
	}




}