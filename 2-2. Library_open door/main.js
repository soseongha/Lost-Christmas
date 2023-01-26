let arrow_right = App.loadSpritesheet("arrow_right.png");

/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //라벨 띄움
    App.sayToAll("끼익하는 소리가 들리며 비밀문이 열렸다!", 0x9BF542);
    App.sayToAll("밑으로 내려가보자", 0x9BF542);
    player.playSound("creaking-floor-1.wav", false);

    //화살표 설치
    Map.putObject(31, 33, arrow_right);
    Map.putObject(31, 34, arrow_right);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //5초간 장소 라벨 띄움
    player.showCenterLabel("끼익하는 소리가 들리며 비밀문이 열렸다!",0xFFFFFF, 0x000000, 0, 5000);
});


