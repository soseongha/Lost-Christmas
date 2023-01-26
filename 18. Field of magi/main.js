let arrow_right = App.loadSpritesheet("arrow_right.png");
_EVENT_TEXT_ANSWER = "별";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //임파서블 블럭 설치
    Map.putTileEffect(46, 26, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 26, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 27, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 28, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 29, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 30, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 31, TileEffectType.IMPASSABLE);
    Map.putTileEffect(46, 31, TileEffectType.IMPASSABLE);

    //지정영역 설치
    Map.putTileEffect(44, 27, TileEffectType.LOCATION, {
        name: "portal_front",
        width: 1,
        height: 4,   
    });


    //이미 풀었는지 안풀었는지 체크 후 타일 설치
    if(App.storage == 0 || App.storage == undefined){
        
        //앱 스토리지에 변수 저장
        App.storage = 0;
        App.save();

        //화살표 오브젝트 삭제
        Map.putObject(45, 27, null);
        Map.putObject(45, 28, null);
        Map.putObject(45, 29, null);
    }
    else{

        //임파서블 블럭 제거
        Map.putTileEffect(46, 26, TileEffectType.NONE);
        Map.putTileEffect(45, 26, TileEffectType.NONE);
        Map.putTileEffect(45, 27, TileEffectType.NONE);
        Map.putTileEffect(45, 28, TileEffectType.NONE);
        Map.putTileEffect(45, 29, TileEffectType.NONE);
        Map.putTileEffect(45, 30, TileEffectType.NONE);
        Map.putTileEffect(45, 31, TileEffectType.NONE);
        Map.putTileEffect(46, 31, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(45, 27, arrow_right);
        Map.putObject(45, 28, arrow_right);
        Map.putObject(45, 29, arrow_right);

    }

    //3초간 장소 라벨 띄움
    player.showCenterLabel("예루살렘",0xFFFFFF, 0x000000, 0, 3000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[예루살렘]", 0x9BF542);
    App.sayToAll("다른 때에, 동방에서 온 박사들은 별을 연구하다가", 0x9BF542);
    App.sayToAll("유대인의 왕의 별을 발견한다.", 0x9BF542);
    App.sayToAll("앞으로 가서 그들이 관찰하는 것을 보자.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("뒤의 사각형이 겹쳐지도록 렌즈를 4개를 겹치면 글자가 나타난다 (한글, 한 글자)", 0x66ffff);

    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){

        //solved 변수를 1로 수정
        App.storage = 1;
        App.save();

        //채팅창에 문열림 게시
        App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

        //임파서블 블럭 제거
        Map.putTileEffect(46, 26, TileEffectType.NONE);
        Map.putTileEffect(45, 26, TileEffectType.NONE);
        Map.putTileEffect(45, 27, TileEffectType.NONE);
        Map.putTileEffect(45, 28, TileEffectType.NONE);
        Map.putTileEffect(45, 29, TileEffectType.NONE);
        Map.putTileEffect(45, 30, TileEffectType.NONE);
        Map.putTileEffect(45, 31, TileEffectType.NONE);
        Map.putTileEffect(46, 31, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(45, 27, arrow_right);
        Map.putObject(45, 28, arrow_right);
        Map.putObject(45, 29, arrow_right);

        //사운드 재생
        player.playSound("Magical Background by gbudden.wav", false, true);
    }
    else{
        return;
    }
});

/*플레이어가 지정 영역에 도착 시 이벤트*/
App.addOnLocationTouched("portal_front", function(player){

    if(App.storage == 0){
        player.showCenterLabel("알 수 없는 힘에 의해 막혀있다...");
    }
});
