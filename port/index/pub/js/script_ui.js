$(function(){
    $("#fullpage").fullpage({
        sectionsColor:["#dffaff","#fefffa","#dfffea","#eee"],
        navigation: true,
        navigationTooltips:["Home","About me","Portfolio","Contact"],
        anchors:["home","about_me","portfolio","contact"],
        
        'afterLoad' : function (anchorLink, index) {
            if (index == 1){
                $("#section0 #intro-tx").addClass("on")

            }else{
                $("#section0 #intro-tx").removeClass("on")
            }


			if (index == 2){

                $(".section .inner .title.title1").addClass("on")
                $("#section1 .inner .wrap1").addClass("on")
                $("#section1 .inner .wrap2").addClass("on")

            }else{
                $(".section .inner .title.title1").removeClass("on")
                $("#section1 .inner .wrap1").removeClass("on")
                $("#section1 .inner .wrap2").removeClass("on")
            }


            if (index == 3){

                $(".section .inner .title.title2").addClass("on")
                $("#section2 .inner .wrap-photo").addClass("on")
                $("#section2 .inner .wrap-txt").addClass("on")

            }else{
                $(".section .inner .title.title2").removeClass("on")
                $("#section2 .inner .wrap-photo").removeClass("on")
                $("#section2 .inner .wrap-txt").removeClass("on")

            }

        }
        

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




    //portfolio
    //슬릭 슬라이드 플러그인
    $("#section2 .inner .wrap-photo > ul").slick({
        dots:false, //하단 페이저 도트(점) 제거
        arrows:false, //좌우 버튼 제거
        slidesToShow:3, //한화면 보여지는 이미지 갯수
        SlidesToScroll:1, //좌우 이벤트를 통해서 움직이는 갯수
        variableWidth:true, //이미지(오브젝트가) 고정 값일 경우 겸침현상을 해결하기 위한 옵션
        centerMode:true //기본 왼쪽 모서리가 기본인 기준점을 가운데로 이동 시킴
    }).on("afterChange",function(event, slick, current){ //슬라이드가 한번 발생 후 이벤트 호출 (current : 순번(index))
        $("#section2 .inner .wrap-txt > ul > li").removeClass("select");//초기화
        $("#section2 .inner .wrap-txt > ul > li").eq(current).addClass("select"); //해당순번에 select(등장클래스) 적용
    })
    

  

  

    
    




   


        



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