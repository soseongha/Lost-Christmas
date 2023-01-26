_EVENT_TEXT_ANSWER = "구유";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //5초간 장소 라벨 띄움
    player.showCenterLabel("베들레헴의 집",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[베들레헴의 집]", 0x9BF542);
    App.sayToAll("아이를 낳을 곳이 없던 마리아와 요셉은", 0x9BF542);
    App.sayToAll("이 곳의 마굿간에서 아이를 낳았다.", 0x9BF542);
    App.sayToAll("위로 가서 태어나신 아기 예수를 보자.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("제시된 숫자를 달력 안에서 순서대로 색칠해보자. (한글, 두 글자)", 0x66ffff);
    
    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){
    
        //채팅창에 문열림 게시
        App.sayToAll("구유", 0x9BF542);
        App.sayToAll("맞다! 모든 단서들이 '구유'라는 답으로 향한다.", 0x9BF542);
        App.sayToAll("'구유'가 그만큼 중요한 단어라는 뜻일까...", 0x9BF542);
        App.sayToAll("밖으로 나가서 이 단어를 다시 입력해보자!", 0x9BF542);
   
    }
    else{
        return;
    }
});
