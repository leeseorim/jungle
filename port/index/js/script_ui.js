$(function(){
    $("#fullpage").fullpage({
        sectionsColor:["#dffaff","#fefffa","#dfffea","#eee"],
        navigation: true,
        navigationTooltips:["Home","About me","Portfolio","Contact"],
        anchors:["home","about me","portfolio","contact"]
    });

    $("#section1 .inner .wrap1 .who > div").hide();

    $("#section1 .inner .wrap1 .who.who1 > h5> button").on("click",function(){
        $("#section1 .inner .wrap1 .who.who1 > div").toggle("slow");

    });
    $("#section1 .inner .wrap1 .who.who2 > h5> button").on("click",function(){
        $("#section1 .inner .wrap1 .who.who2 > div").toggle("slow");

    });
    $("#section1 .inner .wrap1 .who.who3 > h5> button").on("click",function(){
        $("#section1 .inner .wrap1 .who.who3 > div").toggle("slow");

    });



    $("#section2 .inner .wrap3 .port-box1 > a").on("click",function(){
        $("#section2 .inner .wrap3 .port.port1").addClass("on");
        $("#section2 .back").addClass("on")
        
        $("body").on('scroll touchmove mousewheel', function(e){

            e.preventDefault();
            
            e.stopPropagation(); 
            
            return false;
            
            })   

    });

    $("#section2 .inner .wrap3 .port-box2 > a").on("click",function(){
        $("#section2 .inner .wrap3 .port.port2").addClass("on");
        $("#section2 .back").addClass("on")
        $("body").on('scroll touchmove mousewheel', function(e){

            e.preventDefault();
            
            e.stopPropagation(); 
            
            return false;
            
            })   

    });

    $("#section2 .inner .wrap3 .port").click(function(){
        $(this).removeClass("on");  
        $("#section2 .back").removeClass("on")

        $("body").off('scroll touchmove mousewheel');    
    });
    

});