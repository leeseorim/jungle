$(function(){
    var loadData; //json데이터를 담는 변수
    var loadDataLength; //json데이터의 길이값
    var selectNameArr; //전역변수
    var selectTotal; //전역변수

    // 자리셋팅 버튼
    $(".btn_setting").click(function(){
        $(".section.box_intro").removeClass("on");//첫화면 가림
        loadDataFn();
    });

    // 자리배치 완료 버튼
    $(".box_info .btn_submit").click(function(){
        $(".section.reservation").removeClass("on");//자리배치 화면 가림
        $(".section.complete").addClass("on");
    });

    // 완료화면의 리셋버튼
    $(".btn_reset").click(function(){
        console.log(selectNameArr, selectTotal);
        //서버에 저장된값 전달하는 구간(타이밍)
        
        location.reload();//첫화면으로 이동(새로고침    )
        
    })
    
    

    //ajax 로드
    function loadDataFn(){
        $.ajax({
            url:"js/data.json",//데이터 경로
            dataType:"json",
            success:function(result){
                loadData = result.seatInfo;
                settingSeatFn();
            }
        });
    };

    //자리 배치
    function settingSeatFn(){
        //console.log(loadData.length);
        $(".section.reservation").addClass("on"); //자리배치 보임
        loadDataLength = loadData.length;
        for(var i = 0; i<loadDataLength; i++){
            var n = loadData[i].name;
            var p = loadData[i].price;
            var r = loadData[i].reserve;
            //console.log(n, p, r);
            $(".section.reservation > ol").append('<li class="unit"><button data-price="'+p+'" '+r+'>'+n+'</button></li>');
        }

        $(".section.reservation > ol button").click(function(){
            $(this).toggleClass("select");
            updateInfoFn();
        });
    }

    //자리값 업데이트
    function updateInfoFn(){
        var selectArr = []; //배열 초기화& 정의
        selectNameArr = []; //선택된 자리의 이름
        selectTotal = 0; //선택된 자리가격의 총합

        //index값 찾기
        for(var i = 0; i < loadDataLength; i++){
            if($(".section.reservation > ol button").eq(i).hasClass("select") == true){
                selectArr.push(i); //선택된 자리의 INDEX값을 배열에 저장
            }
        }
        //하단 선택 정보 업데이트
        for(var i=0; i<selectArr.length; i++){
            var _i = selectArr[i];
            var _cost;
            selectNameArr.push(loadData[_i].name);
            _cost = loadData[_i].price;
            selectTotal += Number(_cost);
        }

        $(".txt_info_name").text(selectNameArr);
        $(".txt_info_total").text(selectTotal);

        $(".section.complete .txt_name").text(selectNameArr);
        $(".section.complete .txt_price > strong").text(selectTotal);
    
    }


})