_EVENT_TEXT_ANSWER = "가장귀한것";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //5초간 장소 라벨 띄움
    player.showCenterLabel("요셉과 마리아의 집",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[요셉과 마리아의 집]", 0x9BF542);
    App.sayToAll("요셉과 마리아의 집이다.", 0x9BF542);
    App.sayToAll("찾아 온 동방박사들은 저마다 향유, 몰약, 황금을 드리며", 0x9BF542);
    App.sayToAll("태어나신 예수님을 경배하고 있다.", 0x9BF542);
});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        //채팅창에 힌트 게시
        App.sayToAll("네모의 색깔과 자리가 그대로 글자의 자음이나 모음을 의미한다. (한글, 다섯 글자)", 0x66ffff);
    
    } // 정답 입력 시
    else if(_EVENT_TEXT_ANSWER == text){
    
        //채팅창에 문열림 게시
        App.sayToAll("가장귀한것", 0x9BF542);
        App.sayToAll("동방박사들은 예수님께 하찮은 것이 아닌", 0x9BF542);
        App.sayToAll("가장 귀한 것을 드리며 경배했다.", 0x9BF542);
        App.sayToAll("밖으로 나가서 이 키워드를 다시 입력해보자!", 0x9BF542);
   
    }
    else{
        return;
    }
});
