let arrow_right = App.loadSpritesheet("arrow_right.png");
_EVENT_TEXT_ANSWER = "성경속으로";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //이미 풀었는지 안풀었는지 체크 후 타일 설치
    if(App.storage == "solved_is_false" || App.storage == undefined){
        //임파서블 블럭 설치
        Map.putTileEffect(52, 14, TileEffectType.IMPASSABLE);
        Map.putTileEffect(52, 15, TileEffectType.IMPASSABLE);
        Map.putTileEffect(52, 16, TileEffectType.IMPASSABLE);

        //지정영역 설치
        Map.putTileEffect(51, 14, TileEffectType.LOCATION, {
            name: "portal_front",
            width: 1,
            height: 3,   
        });

        //앱 스토리지에 변수 저장
        App.storage = "solved_is_false";
        App.save();
    }
    else{

        //임파서블 블럭 제거
        Map.putTileEffect(52, 14, TileEffectType.NONE);
        Map.putTileEffect(52, 15, TileEffectType.NONE);
        Map.putTileEffect(52, 16, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(51, 14, arrow_right);
        Map.putObject(51, 15, arrow_right);
        Map.putObject(51, 16, arrow_right);
    }

    //5초간 장소 라벨 띄움
    player.showCenterLabel("지하실",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[지하실]", 0x9BF542);
    App.sayToAll("캄캄하고 쿱쿱한 공간이다... 도대체 어디로 통하는 길일까?", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("조명 아래 있는 글씨만 조합해보자. (한글, 다섯 글자)", 0x66ffff);
    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){

        //solved 변수를 1로 수정
        App.storage = "solved_is_true";
        App.save();

        //채팅창에 문열림 게시
        App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

        //임파서블 블럭 제거
        Map.putTileEffect(52, 14, TileEffectType.NONE);
        Map.putTileEffect(52, 15, TileEffectType.NONE);
        Map.putTileEffect(52, 16, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(51, 14, arrow_right);
        Map.putObject(51, 15, arrow_right);
        Map.putObject(51, 16, arrow_right);

        //사운드 재생
        player.playSound("Magical Background by gbudden.wav", false, true);
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
