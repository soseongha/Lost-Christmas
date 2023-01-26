let arrow_right = App.loadSpritesheet("arrow_right.png");
_EVENT_TEXT_ANSWER = "순종";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //임파서블 블럭 설치
    Map.putTileEffect(39, 19, TileEffectType.IMPASSABLE);
    Map.putTileEffect(38, 19, TileEffectType.IMPASSABLE);
    Map.putTileEffect(38, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(38, 21, TileEffectType.IMPASSABLE);
    Map.putTileEffect(38, 22, TileEffectType.IMPASSABLE);
    Map.putTileEffect(38, 23, TileEffectType.IMPASSABLE);
    Map.putTileEffect(38, 24, TileEffectType.IMPASSABLE);
    Map.putTileEffect(39, 24, TileEffectType.IMPASSABLE);

    //지정영역 설치
    Map.putTileEffect(37, 20, TileEffectType.LOCATION, {
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
        Map.putObject(37, 21, null);
        Map.putObject(37, 22, null);
    }
    else{

        //임파서블 블럭 제거
        Map.putTileEffect(39, 19, TileEffectType.NONE);
        Map.putTileEffect(38, 19, TileEffectType.NONE);
        Map.putTileEffect(38, 20, TileEffectType.NONE);
        Map.putTileEffect(38, 21, TileEffectType.NONE);
        Map.putTileEffect(38, 22, TileEffectType.NONE);
        Map.putTileEffect(38, 23, TileEffectType.NONE);
        Map.putTileEffect(38, 24, TileEffectType.NONE);
        Map.putTileEffect(39, 24, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(37, 21, arrow_right);
        Map.putObject(37, 22, arrow_right);

    }

    //3초간 장소 라벨 띄움
    player.showCenterLabel("혼인잔치",0xFFFFFF, 0x000000, 0, 3000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[혼인잔치]", 0x9BF542);
    App.sayToAll("천사의 도움으로 마리아와 요셉이 결혼하였다.", 0x9BF542);
    App.sayToAll("여기는 그 둘의 혼인잔치가 열리는 곳 같다.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("음식의 구조는 초성, 중성, 종성으로 이루어진다.", 0x66ffff);
        App.sayToAll("빵 위의 토핑은 초성을, 빵은 중성을, 접시는 종성을 의미한다. (한글, 두 글자)", 0x66ffff);

    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){

        //solved 변수를 1로 수정
        App.storage = 1;
        App.save();

        //채팅창에 문열림 게시
        App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

        //임파서블 블럭 제거
        Map.putTileEffect(39, 19, TileEffectType.NONE);
        Map.putTileEffect(38, 19, TileEffectType.NONE);
        Map.putTileEffect(38, 20, TileEffectType.NONE);
        Map.putTileEffect(38, 21, TileEffectType.NONE);
        Map.putTileEffect(38, 22, TileEffectType.NONE);
        Map.putTileEffect(38, 23, TileEffectType.NONE);
        Map.putTileEffect(38, 24, TileEffectType.NONE);
        Map.putTileEffect(39, 24, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(37, 21, arrow_right);
        Map.putObject(37, 22, arrow_right);

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
