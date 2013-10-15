$(function  () {
  $(".menu  a").hover(function(){
  	$(this).css("color","#5cb320");
  },function(){
  	$(this).css("color","#646464");
  });
    $(".contain a").hover(function(){
    $(this).css("color","#fff");
  },function(){
    $(this).css("color","#9f9f9f");
  });
    $(".banben a").hover(function(){
    $(this).css("text-decoration","underline");
  },function(){
    $(this).css("text-decoration","none");
  });
   $(".downimg").hover(function(){
  	$(this).css("background-position","0 -69px");
  },function(){
  	$(this).css("background-position","0 0");
  });
  $(".sum1").hover(function(){
    $(this).css("background-position","0 -80px");
  },function(){
    $(this).css("background-position","0 0");
  });
    $(".sum2").hover(function(){
    $(this).css("background-position","0 -80px");
  },function(){
    $(this).css("background-position","0 0");
  });
      $(".sum3").hover(function(){
    $(this).css("background-position","0 -80px");
  },function(){
    $(this).css("background-position","0 0");
  });
});