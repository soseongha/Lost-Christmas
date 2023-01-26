let arrow_right = App.loadSpritesheet("arrow_right.png");
_EVENT_TEXT_ANSWER = "서재";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //지정영역 설치
    Map.putTileEffect(18, 15, TileEffectType.LOCATION, {
        name: "ladder_top_1",
        width: 1,
        height: 1,   
    });

    //이미 풀었는지 안풀었는지 체크 후 타일 설치
    if(App.storage == "solved_is_false" || App.storage == undefined){
        //임파서블 블럭 설치
        Map.putTileEffect(30, 21, TileEffectType.IMPASSABLE);
        Map.putTileEffect(30, 22, TileEffectType.IMPASSABLE);
        Map.putTileEffect(30, 23, TileEffectType.IMPASSABLE);
        Map.putTileEffect(30, 24, TileEffectType.IMPASSABLE);
        Map.putTileEffect(30, 25, TileEffectType.IMPASSABLE);
        Map.putTileEffect(30, 26, TileEffectType.IMPASSABLE);
        Map.putTileEffect(30, 27, TileEffectType.IMPASSABLE);
      
        //지정영역 설치
        Map.putTileEffect(29, 21, TileEffectType.LOCATION, {
            name: "portal_front",
            width: 1,
            height: 7,   
        });

        //앱 스토리지에 변수 저장
        App.storage = "solved_is_false";
        App.save();
    }
    else{

        //임파서블 블럭 제거
        Map.putTileEffect(30, 21, TileEffectType.NONE);
        Map.putTileEffect(30, 22, TileEffectType.NONE);
        Map.putTileEffect(30, 23, TileEffectType.NONE);
        Map.putTileEffect(30, 24, TileEffectType.NONE);
        Map.putTileEffect(30, 25, TileEffectType.NONE);
        Map.putTileEffect(30, 26, TileEffectType.NONE);
        Map.putTileEffect(30, 27, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(30, 25, arrow_right);
        Map.putObject(30, 26, arrow_right);
        Map.putObject(30, 27, arrow_right);
    }

    //5초간 장소 라벨 띄움
    player.showCenterLabel("광장",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[광장]", 0x9BF542);
    App.sayToAll("이 곳, 광장에서 축제 준비가 한창인 것 같다.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("축제 기획자가 알려준 장소를 채팅창에 쳐보자.(한글, 두 글자)", 0x66ffff);
    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){

        //solved 변수를 1로 수정
        App.storage = "solved_is_true";
        App.save();

        //채팅창에 문열림 게시
        App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

        //임파서블 블럭 제거
        Map.putTileEffect(30, 21, TileEffectType.NONE);
        Map.putTileEffect(30, 22, TileEffectType.NONE);
        Map.putTileEffect(30, 23, TileEffectType.NONE);
        Map.putTileEffect(30, 24, TileEffectType.NONE);
        Map.putTileEffect(30, 25, TileEffectType.NONE);
        Map.putTileEffect(30, 26, TileEffectType.NONE);
        Map.putTileEffect(30, 27, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(30, 25, arrow_right);
        Map.putObject(30, 26, arrow_right);
        Map.putObject(30, 27, arrow_right);
    }
    else{
        return;
    }
});

/*플레이어가 지정 영역에 도착 시 이벤트*/
App.addOnLocationTouched("portal_front", function(player){

    if(App.storage == "solved_is_false"){
        player.showCenterLabel("알 수 없는 힘에 의해 막혀있다...");
    }
});
App.addOnLocationTouched("ladder_top_1", function(player){
    
    App.sayToAll("장식을 찾으러 서재에 가보자.", 0x9BF542);
    App.sayToAll("채팅창에 '서재'를 입력해보자.", 0x9BF542);
});

