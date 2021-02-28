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
    

    

    $("#section2 .inner .wrap3 .port-box1 > a").on("click",function(){

        $("#section2 .inner .iframe.iframe1").addClass("on");
        $("#section2 .back").addClass("on")  

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


    $("#section3 .wrap-input > form .group > input").on("textInput",function(event){ //input에 키프레스이벤트
        var _typo = event.originalEvent.data; //키프레스시 타이핑한 값
        //rgb(색상정보) 랜덤으로 추출
        var _r = Math.floor(Math.random()*256);
        var _g = Math.floor(Math.random()*256);
        var _b = Math.floor(Math.random()*256);
        var _rgb = "rgb("+_r+","+_g+","+_b+")";//3개의 색상정보를 하나의 css포멧으로 합함.

        var _rn = Math.floor(Math.random()*3);//svg애니메이션을 담은 클래스를 랜덤으로 적용하기 위한 랜덤값(0~3)

        $("<span class='ani-"+_rn+"' style='color:"+_rgb+"' >"+_typo+"</span>")
        .appendTo($("#section3 .wrap-typo .wrap-typo-inner"))//화면에 동적으로 타이포span을 넣어줌
        .on("animationend",function(){ //애니메이션이 끝나는 시점에 발생하는 이벤트
            $(this).remove(); //동적으로 생성된 타이포 span을 html상에서 완전 삭제
        })

        //대상.append(추가되는마크업);
        //추가되는마크업.appendTo(대상).추가이벤트
    })
    

    

});