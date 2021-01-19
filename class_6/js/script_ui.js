$(function(){
    var loadData; // json 데이터를 담는 변수
    var loadDataLength;

    // 자리셋팅 버튼
    $(".btn_setting").click(function(){
        $(".section.box_intro").removeClass("on");
        loadDataFn();
    });

    function loadDataFn(){
        $.ajax({
            url:"js/data.json", // 데이터 경로
            dataType: "json",
            success:function(result){
                loadData = result.seatInfo;
                settingSeatFn();
            }
        });
    }

    //자리 배치
    function settingSeatFn(){
        //console.log(loadData.length);
        $(".section.reservation").addClass("on");
        loadDataLength = loadData.length
        for(var i = 0; i<loadDataLength; i++){
            var n = loadData[i].name;
            var p = loadData[i].price;
            var r = loadData[i].reserve;
        
            $(".section.reservation > ol").append('<li class="unit"><button data-price="'+p+'" '+r+'>'+n+'</button></li>');
        }
        $(".section.reservation > ol button").click(function(){
            $(this).toggleClass("select");
            updateinfoFn();
        });
    }

    //자리값 업데이트
    function updateInfoFn(){
        var selectArr =[];
        for(var i=0; i < loadDataLength; i++){
            if($(".section.reservation > ol button").eq(i).hasClass("select") == true){
                selectArr.push(i);
            }
        }
        console.log(selectArr);
            
    }
})