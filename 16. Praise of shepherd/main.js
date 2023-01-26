let arrow_right = App.loadSpritesheet("arrow_right.png");
_EVENT_TEXT_ANSWER = "praise";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //임파서블 블럭 설치
    Map.putTileEffect(46, 22, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 22, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 23, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 24, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 25, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 26, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 27, TileEffectType.IMPASSABLE);
    Map.putTileEffect(46, 27, TileEffectType.IMPASSABLE);

    //지정영역 설치
    Map.putTileEffect(44, 23, TileEffectType.LOCATION, {
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
        Map.putObject(45, 23, null);
        Map.putObject(45, 24, null);
        Map.putObject(45, 25, null);
    }
    else{

        //임파서블 블럭 제거
        Map.putTileEffect(46, 22, TileEffectType.NONE);
        Map.putTileEffect(45, 22, TileEffectType.NONE);
        Map.putTileEffect(45, 23, TileEffectType.NONE);
        Map.putTileEffect(45, 24, TileEffectType.NONE);
        Map.putTileEffect(45, 25, TileEffectType.NONE);
        Map.putTileEffect(45, 26, TileEffectType.NONE);
        Map.putTileEffect(45, 27, TileEffectType.NONE);
        Map.putTileEffect(46, 27, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(45, 23, arrow_right);
        Map.putObject(45, 24, arrow_right);
        Map.putObject(45, 25, arrow_right);

    }

    //3초간 장소 라벨 띄움
    player.showCenterLabel("베들레헴 길거리",0xFFFFFF, 0x000000, 0, 3000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[베들레헴 길거리]", 0x9BF542);
    App.sayToAll("목자들은 천사가 말한대로 베들레헴으로 이동하였다.", 0x9BF542);
    App.sayToAll("그리고 구유에 뉘인 아기예수를 보고 경배하였다.", 0x9BF542);
    App.sayToAll("앞에 보이는 집에서 경배하는 소리가 들린다.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("알파벳 o -1 = p (영어, 여섯 글자)", 0x66ffff);

    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){

        //solved 변수를 1로 수정
        App.storage = 1;
        App.save();

        //채팅창에 문열림 게시
        App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

        //임파서블 블럭 제거
        Map.putTileEffect(46, 22, TileEffectType.NONE);
        Map.putTileEffect(45, 22, TileEffectType.NONE);
        Map.putTileEffect(45, 23, TileEffectType.NONE);
        Map.putTileEffect(45, 24, TileEffectType.NONE);
        Map.putTileEffect(45, 25, TileEffectType.NONE);
        Map.putTileEffect(45, 26, TileEffectType.NONE);
        Map.putTileEffect(45, 27, TileEffectType.NONE);
        Map.putTileEffect(46, 27, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(45, 23, arrow_right);
        Map.putObject(45, 24, arrow_right);
        Map.putObject(45, 25, arrow_right);

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
