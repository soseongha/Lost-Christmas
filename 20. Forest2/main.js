let arrow_right = App.loadSpritesheet("arrow_right.png");
let arrow_top = App.loadSpritesheet("arrow_top.png");
_EVENT_TEXT_ANSWER_MAGI_1 = "stop";
_EVENT_TEXT_ANSWER_MAGI_2 = "STOP";
_EVENT_TEXT_ANSWER_NEXT = "가장귀한것";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

     //지정영역 설치
     Map.putTileEffect(55, 26, TileEffectType.LOCATION, {
        name: "portal_front_magi",
        width: 4,
        height: 1,   
    });
    Map.putTileEffect(82, 27, TileEffectType.LOCATION, {
        name: "portal_front_next",
        width: 1,
        height: 4,   
    });

    //임파서블 블럭 설치
    Map.putTileEffect(55, 25, TileEffectType.IMPASSABLE);
    Map.putTileEffect(56, 25, TileEffectType.IMPASSABLE);
    Map.putTileEffect(57, 25, TileEffectType.IMPASSABLE);
    Map.putTileEffect(58, 25, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 27, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 28, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 29, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 30, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 31, TileEffectType.IMPASSABLE);
    Map.putTileEffect(84, 31, TileEffectType.IMPASSABLE);
    

    //5초간 장소 라벨 띄움
    player.showCenterLabel("갈릴리 나사렛",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[갈릴리 나사렛]", 0x9BF542);
    App.sayToAll("동방박사들이 보던 별이 문득 앞으로 그들을 인도하더니,", 0x9BF542);
    App.sayToAll("아기 예수가 계시는 집 위에 머물러섰다.", 0x9BF542);
    App.sayToAll("바로 저 집인 것 같다!", 0x9BF542);

    //하나도 안 풀었다면
    if(App.storage == 0 || App.storage == undefined){
        
        //앱 스토리지에 변수 저장(3 문제 중 맞힌 문제의 수)
        App.storage = 0;
        App.save();
    }
    //첫 문제만 푼 상태라면
    else if(App.storage == 1){

        //임파서블 블럭 제거
        Map.putTileEffect(55, 25, TileEffectType.NONE);
        Map.putTileEffect(56, 25, TileEffectType.NONE);
        Map.putTileEffect(57, 25, TileEffectType.NONE);
        Map.putTileEffect(58, 25, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(56, 26, arrow_top);
        Map.putObject(57, 26, arrow_top);
        Map.putObject(83, 28, null);
        Map.putObject(83, 29, null);
        
    }
    //두 문제만 푼 상태라면
    else if(App.storage == 2){

        //임파서블 블럭 제거
        Map.putTileEffect(55, 25, TileEffectType.NONE);
        Map.putTileEffect(56, 25, TileEffectType.NONE);
        Map.putTileEffect(57, 25, TileEffectType.NONE);
        Map.putTileEffect(58, 25, TileEffectType.NONE);
        Map.putTileEffect(83, 27, TileEffectType.NONE);
        Map.putTileEffect(83, 28, TileEffectType.NONE);
        Map.putTileEffect(83, 29, TileEffectType.NONE);
        Map.putTileEffect(83, 30, TileEffectType.NONE);
        Map.putTileEffect(83, 31, TileEffectType.NONE);
        Map.putTileEffect(84, 31, TileEffectType.NONE);

        //화살표 오브젝트 설치 및 삭제
        Map.putObject(56, 26, null);
        Map.putObject(57, 26, null);
        Map.putObject(83, 28, arrow_right);
        Map.putObject(83, 29, arrow_right);
    }

});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        if(App.storage == 0 || App.storage == undefined){
            App.sayToAll("잘린 도형 안에 적힌 글자들만 읽어보자. (영어, 네 글자)", 0x66ffff);
        }
        else if(App.storage == 1){
            App.sayToAll("네모의 색깔과 자리가 그대로 글자의 자음이나 모음을 의미한다. (한글, 다섯 글자)", 0x66ffff);
        }
        else if(App.storage == 2){
            App.sayToAll("네모의 색깔과 자리가 그대로 글자의 자음이나 모음을 의미한다. (한글, 다섯 글자)", 0x66ffff);
        }
    

    } // 첫 번째 정답 입력 시
    else if(_EVENT_TEXT_ANSWER_MAGI_1 == text || _EVENT_TEXT_ANSWER_MAGI_2 == text){

        if(App.storage == 0){
            //solved 변수를 수정
            App.storage = 1;
            App.save();

            //채팅창에 문열림 게시
            App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

            //임파서블 블럭 제거
            Map.putTileEffect(55, 25, TileEffectType.NONE);
            Map.putTileEffect(56, 25, TileEffectType.NONE);
            Map.putTileEffect(57, 25, TileEffectType.NONE);
            Map.putTileEffect(58, 25, TileEffectType.NONE);

            //화살표 오브젝트 설치
            Map.putObject(56, 26, arrow_top);
            Map.putObject(57, 26, arrow_top);
            Map.putObject(83, 28, null);
            Map.putObject(83, 29, null);

            //사운드 재생
            player.playSound("Magical Background by gbudden.wav", false, true);
        }
    }
    else if(_EVENT_TEXT_ANSWER_NEXT == text){

        if(App.storage == 1){
            //solved 변수를 수정
            App.storage = 2;
            App.save();

            //채팅창에 문열림 게시
            App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

             //임파서블 블럭 제거
            Map.putTileEffect(55, 25, TileEffectType.NONE);
            Map.putTileEffect(56, 25, TileEffectType.NONE);
            Map.putTileEffect(57, 25, TileEffectType.NONE);
            Map.putTileEffect(58, 25, TileEffectType.NONE);
            Map.putTileEffect(83, 27, TileEffectType.NONE);
            Map.putTileEffect(83, 28, TileEffectType.NONE);
            Map.putTileEffect(83, 29, TileEffectType.NONE);
            Map.putTileEffect(83, 30, TileEffectType.NONE);
            Map.putTileEffect(83, 31, TileEffectType.NONE);
            Map.putTileEffect(84, 31, TileEffectType.NONE);

            //화살표 오브젝트 설치 및 삭제
            Map.putObject(56, 26, null);
            Map.putObject(57, 26, null);
            Map.putObject(83, 28, arrow_right);
            Map.putObject(83, 29, arrow_right);

            //사운드 재생
            player.playSound("Magical Background by gbudden.wav", false, true);
        }
    }
});

/*플레이어가 지정 영역에 도착 시 이벤트*/
App.addOnLocationTouched("portal_front_magi", function(player){

    if(App.storage < 1){
        player.showCenterLabel("알 수 없는 힘에 의해 막혀있다...", 0xFFFFFF, 0x000000, 0, 3000);
    }
});
App.addOnLocationTouched("portal_front_next", function(player){

    if(App.storage < 2){
        player.showCenterLabel("알 수 없는 힘에 의해 막혀있다...", 0xFFFFFF, 0x000000, 0, 3000);
    }
});