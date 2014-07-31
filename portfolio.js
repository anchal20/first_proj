/******************document ready function*******************/
$(document).ready(function(){
   $(".nav-bar-div").click(function(){
      $(this).hide(); 
   });
    
    $(".big-heading").children().css("background-position","0px 135px");
    $("#home-section").addClass("reset-intro-content");
    /**moveBgAround();**/
/*****    var name_div= $(".name-div");
    name_div.animate({marginLeft: '390px'});
    
    name_div.animate({fontSize: '150px'}, "slow"); ****/
    
    
    
});
/********* ends here **********/
/****function moveBgAround() {
    
    var x = Math.floor(Math.random()*401);
    var y = Math.floor(Math.random()*401);
    
    var time = Math.floor(Math.random()*1001) + 2000;
    
    $(".scroll-name").animate({
        backgroundPosition: '(' + (x * -1) + 'px ' + (y * -1) + 'px)'
    }, time, "swing", function() {
        moveBgAround();
    }); ***/
/*********************** heading animation **************************************/
function animateHeadingText(){
    var rannum1=Math.floor(Math.random()*12+1);
    var rannum2=Math.floor(Math.random()*12+1);
    var rannum3=Math.floor(Math.random()*12+1);
    var selector1  = '.big-heading span:nth-child(' + rannum1 + ')';
    var selector2  = '.big-heading span:nth-child(' + rannum2 + ')';  
    var selector3  = '.big-heading span:nth-child(' + rannum3 + ')';
    $(selector1).css("background-position","0px -168px").delay(100);
    $(selector1).css("background-position","0px -10px");
    $(selector2).css("background-position","0px -168px").delay(100);
    $(selector2).css("background-position","0px -168px");
    $(selector3).css("background-position","0px -168px").delay(100);
    $(selector3).css("background-position","0px -168px");
}
/********************************************************************************/
var HomeHeadingInterval;        
function HomeHeadingAnimation(){
        HomeHeadingInterval=setInterval(animateHeadingText,1000);
}
/********************* onload function ***************************/
window.onload=function() {
  $("#home-section").removeClass("hide inactive").addClass("active show");
        setTimeout(function(){
            $("#home-section").removeClass("reset-intro-content");
            $("#home-section").addClass("animate-intro");
             
            $(".big-heading").children().css("background-position","0px -10px");
            },100);
        
     HomeHeadingAnimation();    
};
