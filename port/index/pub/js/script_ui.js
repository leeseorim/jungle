$(function(){
    $("#fullpage").fullpage({
        sectionsColor:["#dffaff","#fefffa","#dfffea","#eee"],
        navigation: true,
        navigationTooltips:["Home","About me","Portfolio","Contact"],
        anchors:["home","about me","portfolio","contact"]
    });

    $("#section1 .inner .wrap1 .who > div").hide();

    $("#section1 .inner .wrap1 .who.who1 > h5> button").on("click",function(){
        $("#section1 .inner .wrap1 .who.who1 > div").slideToggle("fast");

    });
    $("#section1 .inner .wrap1 .who.who2 > h5> button").on("click",function(){
        $("#section1 .inner .wrap1 .who.who2 > div").slideToggle("fast");

    });
    $("#section1 .inner .wrap1 .who.who3 > h5> button").on("click",function(){
        $("#section1 .inner .wrap1 .who.who3 > div").slideToggle("fast");

    });



    // $("#section2 .inner .wrap3 .port-box1 > a").on("click",function(){

    //     $("#section2 .inner .wrap3 .port.port1").addClass("on");
    //     $("#section2 .back").addClass("on")

    //     $("html, body").css({'overflow': 'hidden', 'height': '100%', 'position':'fixed'})
    //     $("html, body").bind('scroll touchmove mousewheel', function(e){

    //         e.preventDefault();
            
    //         e.stopPropagation(); 
            
    //         return false;
            
    //         })    

    // });

    $("#section2 .inner .wrap3 .port-box1 > a").on("click",function(){

        $("#section2 .inner .iframe.iframe1").addClass("on");
        $("#section2 .back").addClass("on")

        // $("html, body").bind('scroll touchmove mousewheel', function(e){

        //     e.preventDefault();
            
        //     e.stopPropagation(); 
            
        //     return false;
            
        //     })    

    });

    $("#section2 .inner .wrap3 .port-box2 > a").on("click",function(){

        $("#section2 .inner .iframe.iframe2").addClass("on");
        $("#section2 .back").addClass("on")

    });

    $("#section2 .inner .wrap3 .port-box3 > a").on("click",function(){

        $("#section2 .inner .iframe.iframe3").addClass("on");
        $("#section2 .back").addClass("on")

    });
    
    $("#section2 .inner .wrap3 .port-box4 > a").on("click",function(){

        $("#section2 .inner .iframe.iframe4").addClass("on");
        $("#section2 .back").addClass("on")

    });
    

    $("#section2 .inner .iframe").click(function(){
        $(this).removeClass("on");  
        $("#section2 .back").removeClass("on")

        $("html, body").unbind('scroll touchmove mousewheel');    
    });
    

});