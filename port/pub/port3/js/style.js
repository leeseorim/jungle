$(function(){

    $("header .wrap .login ul .login-s > ul").hide();

    $("header .wrap .login ul .login-s > a").on("click",function(){
        $("header .wrap .login ul .login-s > ul").toggle();

    });

    $("header nav .gnb li .gnb-s").hide();

    $("header nav .gnb li a").mouseenter(function(){
        $("header nav .gnb li .gnb-s").show();
        $("header nav").addClass("on");
    });

    $("header .nav").mouseleave(function(){
        $("header nav .gnb li .gnb-s").hide();
        $("header .nav.on").removeClass("on");
    });
    
});