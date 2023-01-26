let arrow_right = App.loadSpritesheet("arrow_right.png");
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){


    Map.putTileEffect(73, 21, TileEffectType.LOCATION, {
        name: "portal_not_answer",
        width: 2,
        height: 5,   
    });

    //3초간 장소 라벨 띄움
    player.showCenterLabel("갈림길",0xFFFFFF, 0x000000, 0, 3000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[갈림길]", 0x9BF542);
    App.sayToAll("동방박사들은 꿈에서 헤롯왕에게로 돌아가지 말라는 지시를 받고", 0x9BF542);
    App.sayToAll("각자 다른 길로 고국에 돌아간다.", 0x9BF542);
    App.sayToAll("앞에 마침 갈림길이 있다.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("꿈에 헤롯에게로 돌아가지 말라 지시하심을 받아 다른 길로 고국에 돌아가니라(마태복음 2:12) (이정표를 보고 맞는 길로 이동)", 0x66ffff);

    }

});

/*플레이어가 지정 영역에 도착 시 이벤트*/
App.addOnLocationTouched("portal_not_answer", function(player){

    player.showCenterLabel("이곳은 가면 안되는 곳일 것 같다...");
    
});