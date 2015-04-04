$(document).ready(function(){
    $(".menu-bar, .icon-menu h1").click(function(){
        $(".menu").animate({left: "0px"}, 200);
        $("body").animate({left: "620px"}, 200);
    });
    

});