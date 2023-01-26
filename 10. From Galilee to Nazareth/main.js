let arrow_right = App.loadSpritesheet("arrow_right.png");
_EVENT_TEXT_ANSWER = "5";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //임파서블 블럭 설치
    Map.putTileEffect(71, 12, TileEffectType.IMPASSABLE);
    Map.putTileEffect(70, 12, TileEffectType.IMPASSABLE);
    Map.putTileEffect(70, 13, TileEffectType.IMPASSABLE);
    Map.putTileEffect(70, 14, TileEffectType.IMPASSABLE);
    Map.putTileEffect(70, 15, TileEffectType.IMPASSABLE);
    Map.putTileEffect(70, 16, TileEffectType.IMPASSABLE);
    Map.putTileEffect(70, 17, TileEffectType.IMPASSABLE);
    Map.putTileEffect(70, 18, TileEffectType.IMPASSABLE);
    Map.putTileEffect(71, 18, TileEffectType.IMPASSABLE);

    //지정영역 설치
    Map.putTileEffect(69, 13, TileEffectType.LOCATION, {
        name: "portal_front",
        width: 1,
        height: 5,   
    });

    //화살표 오브젝트 설치
    Map.putObject(8, 15, arrow_right);

    //이미 풀었는지 안풀었는지 체크 후 타일 설치
    if(App.storage == 0 || App.storage == undefined){
        
        //앱 스토리지에 변수 저장
        App.storage = 0;
        App.save();

        //화살표 오브젝트 삭제
        Map.putObject(69, 14, null);
        Map.putObject(69, 15, null);
    }
    else{

        //임파서블 블럭 제거
        Map.putTileEffect(71, 12, TileEffectType.NONE);
        Map.putTileEffect(70, 12, TileEffectType.NONE);
        Map.putTileEffect(70, 13, TileEffectType.NONE);
        Map.putTileEffect(70, 14, TileEffectType.NONE);
        Map.putTileEffect(70, 15, TileEffectType.NONE);
        Map.putTileEffect(70, 16, TileEffectType.NONE);
        Map.putTileEffect(70, 17, TileEffectType.NONE);
        Map.putTileEffect(70, 18, TileEffectType.NONE);
        Map.putTileEffect(71, 18, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(69, 14, arrow_right);
        Map.putObject(69, 15, arrow_right);

    }

    //3초간 장소 라벨 띄움
    player.showCenterLabel("갈릴리에서 베들레헴까지",0xFFFFFF, 0x000000, 0, 3000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[갈릴리에서 베들레헴까지]", 0x9BF542);
    App.sayToAll("호적을 등록하라는 황제의 명령에 따라", 0x9BF542);
    App.sayToAll("마리아와 요셉 부부도 고향 베들레헴으로 이동한다.", 0x9BF542);
    App.sayToAll("이때 마리아는 이미 임신하여 해산할 날이 얼마 남지 않았다.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("각 아이콘은 하나의 장소를 뜻한다. 해당하는 장소명의 글자 수를 수식에 대입해보자. (숫자, 한 글자)", 0x66ffff);

    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){

        //solved 변수를 1로 수정
        App.storage = 1;
        App.save();

        //채팅창에 문열림 게시
        App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

        //임파서블 블럭 제거
        Map.putTileEffect(71, 12, TileEffectType.NONE);
        Map.putTileEffect(70, 12, TileEffectType.NONE);
        Map.putTileEffect(70, 13, TileEffectType.NONE);
        Map.putTileEffect(70, 14, TileEffectType.NONE);
        Map.putTileEffect(70, 15, TileEffectType.NONE);
        Map.putTileEffect(70, 16, TileEffectType.NONE);
        Map.putTileEffect(70, 17, TileEffectType.NONE);
        Map.putTileEffect(70, 18, TileEffectType.NONE);
        Map.putTileEffect(71, 18, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(69, 14, arrow_right);
        Map.putObject(69, 15, arrow_right);

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
