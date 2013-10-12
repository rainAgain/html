$(function(){

	initEvents();
		initPosition();

		setInterval("add();",5000);
}); 






function initPosition(){

$.each($(".tbmenu"),function(i){
 $(this).css("right",i * 30 + "px");
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

	$("#keyword").keyup(function(){
		var val = $("#keyword").val();
		if (val == "") {
			$("#keyword").css("background-image",'url("css/images/20130930214745.jpg")');

		}else{
			$("#keyword").css("background-image","none");
		}
	});
	


}
	var i=0;
 	function add(){
 		i++;
 	
	$(".yellow").css("background-position","0 -150px");
	if (i!=4) {

		$("#middlepic").css("background-image",'url("css/images/'+i+'.jpg")');
		$(".yellow").each(function(){
			if (i ==$(this).attr("txt")){
				$(this).css("background-position","0 -165px");
			};
		})
	}else{
		i=1;
		$("#yellow"+i).css("background-position","0 -150px");
		$("#middlepic").css("background-image",'url("css/images/'+i+'.jpg")');
		$("#yellow"+i).css("background-position","0 -165px");
	}
 	}