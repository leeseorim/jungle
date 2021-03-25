$(function(){

    $("header .wrap .login ul .login-s > ul").hide();

    $("header .wrap .login ul .login-s > a").on("click",function(){
        $("header .wrap .login ul .login-s > ul").slideToggle();

    });
});