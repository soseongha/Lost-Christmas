let arrow_right = App.loadSpritesheet("arrow_right.png");
_EVENT_TEXT_ANSWER = "MOVE";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //임파서블 블럭 설치
    Map.putTileEffect(29, 25, TileEffectType.IMPASSABLE);
    Map.putTileEffect(28, 25, TileEffectType.IMPASSABLE);
    Map.putTileEffect(28, 26, TileEffectType.IMPASSABLE);
    Map.putTileEffect(28, 27, TileEffectType.IMPASSABLE);
    Map.putTileEffect(28, 28, TileEffectType.IMPASSABLE);
    Map.putTileEffect(28, 29, TileEffectType.IMPASSABLE);
    Map.putTileEffect(28, 30, TileEffectType.IMPASSABLE);
    Map.putTileEffect(29, 30, TileEffectType.IMPASSABLE);

    //지정영역 설치
    Map.putTileEffect(27, 26, TileEffectType.LOCATION, {
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
        Map.putObject(28, 27, null);
        Map.putObject(28, 26, null);
    }
    else{

        //임파서블 블럭 제거
        Map.putTileEffect(29, 25, TileEffectType.NONE);
        Map.putTileEffect(28, 25, TileEffectType.NONE);
        Map.putTileEffect(28, 26, TileEffectType.NONE);
        Map.putTileEffect(28, 27, TileEffectType.NONE);
        Map.putTileEffect(28, 28, TileEffectType.NONE);
        Map.putTileEffect(28, 29, TileEffectType.NONE);
        Map.putTileEffect(28, 30, TileEffectType.NONE);
        Map.putTileEffect(29, 30, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(28, 27, arrow_right);
        Map.putObject(28, 26, arrow_right);

    }

    //3초간 장소 라벨 띄움
    player.showCenterLabel("로마 황궁",0xFFFFFF, 0x000000, 0, 3000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[로마 황궁]", 0x9BF542);
    App.sayToAll("그로부터 얼마 뒤, 로마의 아우구스투스 황제는", 0x9BF542);
    App.sayToAll("식민지 백성들에게 호적을 등록하라고 명령했다.", 0x9BF542);
    App.sayToAll("이곳은 이를 명령한 황제의 황궁인 듯 하다.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("황제의 종이에 적혀있는 점 9개는 각각 1~9까지의 숫자를 의미한다. 창문으로 본 숫자를 순서대로 점에 연결해보자. (영어 대문자, 네 글자)", 0x66ffff);

    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){

        //solved 변수를 1로 수정
        App.storage = 1;
        App.save();

        //채팅창에 문열림 게시
        App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

        //임파서블 블럭 제거
        Map.putTileEffect(29, 25, TileEffectType.NONE);
        Map.putTileEffect(28, 25, TileEffectType.NONE);
        Map.putTileEffect(28, 26, TileEffectType.NONE);
        Map.putTileEffect(28, 27, TileEffectType.NONE);
        Map.putTileEffect(28, 28, TileEffectType.NONE);
        Map.putTileEffect(28, 29, TileEffectType.NONE);
        Map.putTileEffect(28, 30, TileEffectType.NONE);
        Map.putTileEffect(29, 30, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(28, 27, arrow_right);
        Map.putObject(28, 26, arrow_right);

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
