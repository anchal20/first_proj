/******************document ready function*******************/
$(document).ready(function(){   
    $("#main_body").addClass("black");
    $("#about-me").removeClass("active show").addClass("hide inactive");
    $("#skill_section").removeClass("active show").addClass("inactive hide");
    $("#home_section").removeClass("inactive hide").addClass("show active");
    
    $("#contactID").hide();
    
    $("#plane").sprite({fps: 4, no_of_frames: 14});
    $('#sun').sprite({fps:4, no_of_frames: 4});
    
});
/************************************ ends here ***************************/
/***************************** reset all ***************************************/
function reset() {
    $('#direct').removeClass("html_mov css_mov java_mov jquery_mov");
    $('#h-board').removeClass("show active").addClass("hide inactive");
    $('#c-board').removeClass("show active").addClass("hide inactive");
    $('#j-board').removeClass("show active").addClass("hide inactive");
    $('#jq-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("show active").addClass("hide inactive");
    $('#rd').removeClass("show active").addClass("hide inactive");
}
/*******************************************************************************/

/******************************* select screen *********************************/
function select_screen(screen_id) {
    var id = screen_id;
    reset();
    if (id=='skill_ref'){
        $('#main_body').removeClass("black blue bubbles").addClass("white");
        $("#skill_section").removeClass("hide inactive").addClass("active show");
        $("#home_section").removeClass("active show").addClass("hide inactive");
        $("#contact_section").removeClass("active show").addClass("hide inactive");
        $("#about-me").removeClass("active show").addClass("hide inactive");
    }
    else if (id=='about') {
        $('#main_body').removeClass("black white").addClass("blue");
        $("#skill_section").removeClass("show active").addClass("inactive hide");
        $("#home_section").removeClass("active show").addClass("hide inactive");
        $("#contact_section").removeClass("active show").addClass("hide inactive");
        $("#about-me").removeClass("inactive hide").addClass("show active");
    }
        
}
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

/********************************************************************************/

/*********************************** contacts ********************************************/
function closeContact() {
    $('#infoID').slideDown();
    $('#contactID').slideUp();
}

function showContact() {
    $('#infoID').hide();
    $('#contactID').slideDown();   
}
/***************************************************************************************/

/******************************skill display functions*************************************/
function html_disp() {
    $('#direct').addClass("html_mov").removeClass("css_mov java_mov jquery_mov");
    $('#h-board').removeClass("hide inactive").addClass("show active");
    $('#c-board').removeClass("show active").addClass("hide inactive");
    $('#j-board').removeClass("show active").addClass("hide inactive");
    $('#jq-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("hide inactive").addClass("show active");
    $('#rd').removeClass("show active").addClass("hide inactive");
}

function css_disp() {
    $('#direct').addClass("css_mov").removeClass("html_mov java_mov jquery_mov");
    $('#c-board').removeClass("hide inactive").addClass("show active");
    $('#rd').removeClass("hide inactive").addClass("show active");
    $('#j-board').removeClass("show active").addClass("hide inactive");
    $('#h-board').removeClass("show active").addClass("hide inactive");
    $('#jq-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("show active").addClass("hide inactive");
}

function java_disp() {
    $('#direct').addClass("java_mov").removeClass("html_mov css_mov jquery_mov");
    $('#j-board').removeClass("hide inactive").addClass("show active");
    $('#c-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("hide inactive").addClass("show active");
    $('#h-board').removeClass("show active").addClass("hide inactive");
    $('#jq-board').removeClass("show active").addClass("hide inactive");
    $('#rd').removeClass("show active").addClass("hide inactive");
}

function jquery_disp() {
    $('#direct').addClass("jquery_mov").removeClass("html_mov css_mov java_mov");
    $('#rd').removeClass("hide inactive").addClass("show active");
    $('#jq-board').removeClass("hide inactive").addClass("show active");
    $('#c-board').removeClass("show active").addClass("hide inactive");
    $('#h-board').removeClass("show active").addClass("hide inactive");
    $('#j-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("show active").addClass("hide inactive");
}
/****************************************************************************************/

/************************************** about me ****************************************/
function show_back() {
    $('#com1').removeClass("hide inactive").addClass("show active");
}
function remove_com() {
    $('#com1').removeClass("show active").addClass("hide inactive");
}
/****************************************************************************************/