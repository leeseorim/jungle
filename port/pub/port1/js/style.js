$(function(){
    // section2 슬라이드 애니메이션
    $(window).scroll(function(){
        var scrollValue1 = $(document).scrollTop();
        console.log(scrollValue1)

        if(110 < scrollValue1 == true){
            $(".section2.inner2").addClass("scroll1");
        }
        else{
            $(".section2.inner2").removeClass("scroll1");
        }
    });

    $(window).scroll(function(){
        var scrollValue1 = $(document).scrollTop();
        
        if(1330 < scrollValue1 == true){
            $(".section2.inner2").removeClass("scroll1");
        }

    });  
    
    // section4 슬라이드 애니메이션

    $(window).scroll(function(){
        var scrollValue2 = $(document).scrollTop();
        console.log(scrollValue2)

        if(1523 < scrollValue2 == true){
            $(".section4.inner2").addClass("scroll2");
        }
        else{
            $(".section4.inner2").removeClass("scroll2");
        }
    });

    $(window).scroll(function(){
        var scrollValue2 = $(document).scrollTop();
        
        if(2750 < scrollValue2 == true){
            $(".section4.inner2").removeClass("scroll2");
        }

    }); 


    var myMenuClose = function(){
        $("header nav ul").hide();
        $("#back").hide();
        $("#menuClose").hide();
    }

    $(window).on("resize", function(){
        console.log("리사이즈")
        if($(window).width() > 768) {
            $("header nav ul").show();
        } else {
            myMenuClose();
        };
    });


    $("#menuView").click(function(){
        $("header nav ul").slideDown();
        $("#menuClose").show();
        $("#back").show();
    })

    $("#menuClose").click(function(){
        $("header nav ul").slideToggle();
        $("#back").hide();
        $("#menuClose").fadeToggle();
    })



});