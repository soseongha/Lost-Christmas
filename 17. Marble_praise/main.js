let arrow_right = App.loadSpritesheet("arrow_right.png");
/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //5초간 장소 라벨 띄움
    player.showCenterLabel("찬양의 구슬 방",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //화살표 오브젝트 설치
    Map.putObject(27, 14, arrow_right);
    Map.putObject(27, 15, arrow_right);
    Map.putObject(27, 16, arrow_right);

    //채팅창에 장소 정보 게시
    App.sayToAll("[찬양의 구슬 방]", 0x9BF542);
    App.sayToAll("이곳은 찬양의 구슬 방이다.", 0x9BF542);
    App.sayToAll("목자들이 예수님의 태어나심을 찬양하는 장면이 담겨있다.", 0x9BF542);
    App.sayToAll("가까이 가서 확인해보자.", 0x9BF542);
});


