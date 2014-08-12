/******************document ready function*******************/
$(document).ready(function(){   
    
    
    $("#contactID").hide();
    
    $("#plane").sprite({fps: 4, no_of_frames: 14});
    $('#sun').sprite({fps:4, no_of_frames: 4});
    
});
/********* ends here **********/
function select_screen(screen_id) {
    var id = screen_id;
    
    if (id=='skill_ref'){
        $('#main_body').removeClass("black blue bubbles").addClass("white");
        $("#skill_section").removeClass("hide inactive").addClass("active show");
        $("#home_section").removeClass("active show").addClass("hide inactive");
        $("#contact_section").removeClass("active show").addClass("hide inactive");
        $("#about-me").removeClass("active show").addClass("hide inactive");
    }
    else if (id=='about') {
        $('#main_body').removeClass("black white").addClass("blue bubbles");
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
/********************* onload function ***************************/
window.onload=function() {
    $("#main_body").addClass("black");
    $("#skill_section").removeClass("active show").addClass("inactive hide");
    $("#home_section").removeClass("inactive hide").addClass("show active");
    $("#about-me").removeClass("active show").addClass("hide inactive");
};



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
