_EVENT_TEXT_HINT = "힌트";
_ENTER_MUSIC_NAME = "enter_music.mp3";

/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //5초간 장소 라벨 띄움
    player.showCenterLabel("튜토리얼", 0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();
     
    //채팅창에 장소 정보 게시
    App.runLater(function() {
        //등장음 플레이
        App.playSound(_ENTER_MUSIC_NAME, false, true);
		App.sayToAll("[튜토리얼]", 0x9BF542);
	}, 1);
    App.runLater(function() {
		App.sayToAll("'잃어버린 크리스마스를 찾아서'에 오신 헬퍼님!", 0x9BF542);
	}, 2);
    App.runLater(function() {
		App.sayToAll("콘텐츠 이용방법을 숙지하시고,", 0x9BF542);
	}, 3);
    App.runLater(function() {
		App.sayToAll("채팅창은 항상 켜놓은 채로 플레이해주세요.", 0x9BF542);
	}, 4);
    App.runLater(function() {
		App.sayToAll("이제 잃어버린 크리스마스를 찾아서 떠나봐요!", 0x9BF542);
	}, 5);
    
    
    
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("문제가 주어져 있는 공간에서 힌트 입력 시 힌트가 주어집니다.", 0x66ffff);
    } // 정답 입력 시
    
});

