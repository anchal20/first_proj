/******************document ready function*******************/
$(document).ready(function(){   
    $(".big-heading").children().css("background-position","0px 135px");
    $("#home-section").addClass("reset-intro-content");
    $("#contactID").hide();
    
    $("#plane").sprite({fps: 8, no_of_frames: 14});
    
    
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
    var rannum1=Math.floor(Math.random()*15+1);
    var rannum2=Math.floor(Math.random()*15+1);
    var rannum3=Math.floor(Math.random()*15+1);
    
    var selector1  = '.big-heading span:nth-child(' + rannum1 + ')';
    var selector2  = '.big-heading span:nth-child(' + rannum2 + ')';  
    var selector3  = '.big-heading span:nth-child(' + rannum3 + ')';
    
    $(selector1).css("background-position","0px -168px").delay(80);
    $(selector1).css("background-position","0px -10px");
    $(selector2).css("background-position","0px -168px").delay(80);
    $(selector2).css("background-position","0px -168px");
    $(selector3).css("background-position","0px -168px").delay(80);
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
            $("#H").css({"display":"inline-block"});
            $("#I").css({"display":"inline-block"});
            $("#blank").css({"display":"block"});
            $("#exclm").css({"display":"inline-block"});
            
            $(".big-heading").children().css("background-position","0px -10px");
            },100);
        
     HomeHeadingAnimation();    
};

/********************************* cube & skill integration ****************************/
function stoprotate() {
    $(".cube").addClass("stopRotation");
}

function resumerotate() {
    $(".cube").removeClass("stopRotation");
}

function skillstart(id) {
    var skill_id = id;
    if (skill_id == "div1"){
    $("#div1").addClass("skill1-animate");
    }
    else if (skill_id == "div2") {
    $("#div2").addClass("skill2-animate");
    }
    else if (skill_id == "div3") {
    $("#div3").addClass("skill3-animate");
    }
    else {
    $("#div4").addClass("skill4-animate");
    }
}

function skillstop(id) {
    var skill_id = id;
    if (skill_id == "div1"){
    $("#div1").removeClass("skill1-animate");
    }
    else if (skill_id == "div2") {
    $("#div2").removeClass("skill2-animate");
    }
    else if (skill_id == "div3") {
    $("#div3").removeClass("skill3-animate");
    }
    else {
    $("#div4").removeClass("skill4-animate");
    }
}

/****************************************************************************************/

/***************************** contacts **************************************/
function closeContact() {
    $('#infoID').slideDown();
    $('#contactID').slideUp();
}

function showContact() {
    $('#infoID').hide();
    $('#contactID').slideDown();   
}
/*******************************************************************************/
