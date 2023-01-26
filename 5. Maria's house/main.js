_EVENT_TEXT_ANSWER = "5931";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //5초간 장소 라벨 띄움
    player.showCenterLabel("마리아의 집",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[마리아의 집]", 0x9BF542);
    App.sayToAll("성경 속 인물인 마리아의 집이다.", 0x9BF542);
    App.sayToAll("마리아에 앞에 천사가 나타나 이야기하는 것이 들린다.", 0x9BF542);
    App.sayToAll("'네가 성령으로 잉태하여 아이를 낳을 것이니,", 0x9BF542);
    App.sayToAll("그 이름을 예수라 하라.'", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("빵에서 숫자를 찾을 수 있을 것 같다. 탄 부분은 먹을 수 없을 것 같다. (숫자, 네 글자)", 0x66ffff);
    
    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){
    
        //채팅창에 문열림 게시
        App.sayToAll("찾았다!", 0x9BF542);
        App.sayToAll("요셉의 집 비밀번호는 바로 이거였어!", 0x9BF542);
        App.sayToAll("밖에 나가서 비밀번호를 다시 한 번 쳐보자.", 0x9BF542);
   
    }
    else{
        return;
    }
});
