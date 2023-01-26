_EVENT_TEXT_ANSWER = "성령";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //5초간 장소 라벨 띄움
    player.showCenterLabel("요셉의 집",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[요셉의 집]", 0x9BF542);
    App.sayToAll("마리아의 약혼자인 요셉의 집이다.", 0x9BF542);
    App.sayToAll("약혼자인 마리아가 임신한 사실을 알게 된 요셉은", 0x9BF542);
    App.sayToAll("마리아를 위해 파혼해야 할 지 고민하다, 잠든 것 같다.", 0x9BF542);
});




/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("퍼즐을 맞춰보자. (한글, 두 글자)", 0x66ffff);
    
    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){
    
        //채팅창에 문열림 게시
        App.sayToAll("성령", 0x9BF542);
        App.sayToAll("요셉의 꿈에 나타난 천사는", 0x9BF542);
        App.sayToAll("마리아가 '성령'으로 잉태한 것이니, 그녀를 아내로 맞으라고 하였다.", 0x9BF542);
        App.sayToAll("밖으로 나가서 이 키워드를 다시 입력해보자!", 0x9BF542);
   
    }
    else{
        return;
    }
});
