let arrow_right = App.loadSpritesheet("arrow_right.png");
let arrow_bottom = App.loadSpritesheet("arrow_bottom.png");
_EVENT_TEXT_ANSWER_MARIA = "1004";
_EVENT_TEXT_ANSWER_JOSEPH = "5931";
_EVENT_TEXT_ANSWER_NEXT = "성령";
_EVENT_TEXT_HINT = "힌트";


/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

     //지정영역 설치
     Map.putTileEffect(43, 19, TileEffectType.LOCATION, {
        name: "portal_front_maria",
        width: 5,
        height: 1,   
    });
    Map.putTileEffect(72, 19, TileEffectType.LOCATION, {
        name: "portal_front_joseph",
        width: 5,
        height: 1,   
    });
    Map.putTileEffect(81, 14, TileEffectType.LOCATION, {
        name: "portal_front_next",
        width: 1,
        height: 5,   
    });

    //임파서블 블럭 설치
    Map.putTileEffect(43, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(44, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(45, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(46, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(47, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(72, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(73, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(74, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(75, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(76, 20, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 14, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 15, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 16, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 17, TileEffectType.IMPASSABLE);
    Map.putTileEffect(83, 18, TileEffectType.IMPASSABLE);

    //5초간 장소 라벨 띄움
    player.showCenterLabel("갈릴리 나사렛",0xFFFFFF, 0x000000, 0, 5000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[갈릴리 나사렛]", 0x9BF542);
    App.sayToAll("성경 속에 나오는 갈릴리 나사렛이다..!", 0x9BF542);
    App.sayToAll("이곳에서 축제기획자가 말한 것들을 찾을 수 있으려나...", 0x9BF542);

    //하나도 안 풀었다면
    if(App.storage == 0 || App.storage == undefined){
        
        //앱 스토리지에 변수 저장(3 문제 중 맞힌 문제의 수)
        App.storage = 0;
        App.save();
    }
    //첫 문제만 푼 상태라면
    else if(App.storage == 1){

        //임파서블 블럭 제거
        Map.putTileEffect(43, 20, TileEffectType.NONE);
        Map.putTileEffect(44, 20, TileEffectType.NONE);
        Map.putTileEffect(45, 20, TileEffectType.NONE);
        Map.putTileEffect(46, 20, TileEffectType.NONE);
        Map.putTileEffect(47, 20, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(44, 18, arrow_bottom);
        Map.putObject(45, 18, arrow_bottom);
        Map.putObject(46, 18, arrow_bottom);
    }
    //두 문제만 푼 상태라면
    else if(App.storage == 2){

        //임파서블 블럭 제거
        Map.putTileEffect(43, 20, TileEffectType.NONE);
        Map.putTileEffect(44, 20, TileEffectType.NONE);
        Map.putTileEffect(45, 20, TileEffectType.NONE);
        Map.putTileEffect(46, 20, TileEffectType.NONE);
        Map.putTileEffect(47, 20, TileEffectType.NONE);
        Map.putTileEffect(72, 20, TileEffectType.NONE);
        Map.putTileEffect(73, 20, TileEffectType.NONE);
        Map.putTileEffect(74, 20, TileEffectType.NONE);
        Map.putTileEffect(75, 20, TileEffectType.NONE);
        Map.putTileEffect(76, 20, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(44, 18, null);
        Map.putObject(45, 18, null);
        Map.putObject(46, 18, null);
        Map.putObject(73, 18, arrow_bottom);
        Map.putObject(74, 18, arrow_bottom);
    }
     //세 문제 푼 상태라면
     else if(App.storage == 3){

        //임파서블 블럭 제거
        Map.putTileEffect(43, 20, TileEffectType.NONE);
        Map.putTileEffect(44, 20, TileEffectType.NONE);
        Map.putTileEffect(45, 20, TileEffectType.NONE);
        Map.putTileEffect(46, 20, TileEffectType.NONE);
        Map.putTileEffect(47, 20, TileEffectType.NONE);
        Map.putTileEffect(72, 20, TileEffectType.NONE);
        Map.putTileEffect(73, 20, TileEffectType.NONE);
        Map.putTileEffect(74, 20, TileEffectType.NONE);
        Map.putTileEffect(75, 20, TileEffectType.NONE);
        Map.putTileEffect(76, 20, TileEffectType.NONE);
        Map.putTileEffect(83, 14, TileEffectType.NONE);
        Map.putTileEffect(83, 15, TileEffectType.NONE);
        Map.putTileEffect(83, 16, TileEffectType.NONE);
        Map.putTileEffect(83, 17, TileEffectType.NONE);
        Map.putTileEffect(83, 18, TileEffectType.NONE);

        //화살표 오브젝트 설치
        Map.putObject(44, 18, null);
        Map.putObject(45, 18, null);
        Map.putObject(46, 18, null);
        Map.putObject(73, 18, null);
        Map.putObject(74, 18, null);
        Map.putObject(82, 15, arrow_right);
    }

});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

    //힌트 입력 시
    if(_EVENT_TEXT_HINT == text){

        if(App.storage == 0 || App.storage == undefined){
            App.sayToAll("나무마다 적힌 숫자가 다 다르다. 유심히 살펴보자. (숫자, 네 글자)", 0x66ffff);
        }
        else if(App.storage == 1){
            App.sayToAll("빵에서 숫자를 찾을 수 있을 것 같다. 탄 부분은 먹을 수 없을 것 같다. (숫자, 네 글자)", 0x66ffff);
        }
        else if(App.storage == 2){
            App.sayToAll("퍼즐을 맞춰보자. (한글, 두 글자)", 0x66ffff);
        }
        else if(App.storage == 3){
            App.sayToAll("퍼즐을 맞춰보자. (한글, 두 글자)", 0x66ffff);
        }

    } // 첫 번째 정답 입력 시
    else if(_EVENT_TEXT_ANSWER_MARIA == text){

        if(App.storage == 0){
            //solved 변수를 수정
            App.storage = 1;
            App.save();

            //채팅창에 문열림 게시
            App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

            //임파서블 블럭 제거
            Map.putTileEffect(43, 20, TileEffectType.NONE);
            Map.putTileEffect(44, 20, TileEffectType.NONE);
            Map.putTileEffect(45, 20, TileEffectType.NONE);
            Map.putTileEffect(46, 20, TileEffectType.NONE);
            Map.putTileEffect(47, 20, TileEffectType.NONE);

            //화살표 오브젝트 설치
            Map.putObject(44, 18, arrow_bottom);
            Map.putObject(45, 18, arrow_bottom);
            Map.putObject(46, 18, arrow_bottom);
            
            //사운드 재생
            player.playSound("Magical Background by gbudden.wav", false, true);
        }
    }
    else if(_EVENT_TEXT_ANSWER_JOSEPH == text){

        if(App.storage == 1){
            //solved 변수를 수정
            App.storage = 2;
            App.save();

            //채팅창에 문열림 게시
            App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

            //임파서블 블럭 제거
            Map.putTileEffect(43, 20, TileEffectType.NONE);
            Map.putTileEffect(44, 20, TileEffectType.NONE);
            Map.putTileEffect(45, 20, TileEffectType.NONE);
            Map.putTileEffect(46, 20, TileEffectType.NONE);
            Map.putTileEffect(47, 20, TileEffectType.NONE);
            Map.putTileEffect(72, 20, TileEffectType.NONE);
            Map.putTileEffect(73, 20, TileEffectType.NONE);
            Map.putTileEffect(74, 20, TileEffectType.NONE);
            Map.putTileEffect(75, 20, TileEffectType.NONE);
            Map.putTileEffect(76, 20, TileEffectType.NONE);

            //화살표 오브젝트 설치 및 제거
            Map.putObject(44, 18, null);
            Map.putObject(45, 18, null);
            Map.putObject(46, 18, null);
            Map.putObject(73, 18, arrow_bottom);
            Map.putObject(74, 18, arrow_bottom);

            //사운드 재생
            player.playSound("Magical Background by gbudden.wav", false, true);
        }
    }
    else if(_EVENT_TEXT_ANSWER_NEXT == text){

        if(App.storage == 2){
            //solved 변수를 수정
            App.storage = 3;
            App.save();

            //채팅창에 문열림 게시
            App.sayToAll("새로운 길이 열렸다.", 0x9BF542);

            //임파서블 블럭 제거
            Map.putTileEffect(43, 20, TileEffectType.NONE);
            Map.putTileEffect(44, 20, TileEffectType.NONE);
            Map.putTileEffect(45, 20, TileEffectType.NONE);
            Map.putTileEffect(46, 20, TileEffectType.NONE);
            Map.putTileEffect(47, 20, TileEffectType.NONE);
            Map.putTileEffect(72, 20, TileEffectType.NONE);
            Map.putTileEffect(73, 20, TileEffectType.NONE);
            Map.putTileEffect(74, 20, TileEffectType.NONE);
            Map.putTileEffect(75, 20, TileEffectType.NONE);
            Map.putTileEffect(76, 20, TileEffectType.NONE);
            Map.putTileEffect(83, 14, TileEffectType.NONE);
            Map.putTileEffect(83, 15, TileEffectType.NONE);
            Map.putTileEffect(83, 16, TileEffectType.NONE);
            Map.putTileEffect(83, 17, TileEffectType.NONE);
            Map.putTileEffect(83, 18, TileEffectType.NONE);

            //화살표 오브젝트 설치 및 삭제
            Map.putObject(44, 18, null);
            Map.putObject(45, 18, null);
            Map.putObject(46, 18, null);
            Map.putObject(73, 18, null);
            Map.putObject(74, 18, null);
            Map.putObject(82, 15, arrow_right);

            //사운드 재생
            player.playSound("Magical Background by gbudden.wav", false, true);
        }
    }
});

/*플레이어가 지정 영역에 도착 시 이벤트*/
App.addOnLocationTouched("portal_front_maria", function(player){

    if(App.storage < 1){
        player.showCenterLabel("알 수 없는 힘에 의해 막혀있다...", 0xFFFFFF, 0x000000, 0, 3000);
    }
});
App.addOnLocationTouched("portal_front_joseph", function(player){

    if(App.storage < 2){
        player.showCenterLabel("알 수 없는 힘에 의해 막혀있다...", 0xFFFFFF, 0x000000, 0, 3000);
    }
});
App.addOnLocationTouched("portal_front_next", function(player){

    if(App.storage < 3){
        player.showCenterLabel("알 수 없는 힘에 의해 막혀있다...", 0xFFFFFF, 0x000000, 0, 3000);
    }
});