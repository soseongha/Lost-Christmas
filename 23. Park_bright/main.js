let transition_1 = App.loadSpritesheet("transition_1.png");
let transition_2 = App.loadSpritesheet("transition_2.png");
let transition_3 = App.loadSpritesheet("transition_3.png");
let transition_4 = App.loadSpritesheet("transition_4.png");
_EVENT_TEXT_SUNJONG = "순종";
_EVENT_TEXT_GYUMSON = "겸손";
_EVENT_TEXT_LOVE = "사랑";
_EVENT_TEXT_PRAISE = "찬양";
_EVENT_TEXT_JESUS = "예수님";
let music_before = "soon christmas.mp3";
let music_after = "joy to the world.mp3";

/*플레이어가 입장시 이벤트*/
App.onJoinPlayer.Add(function(player){

    //지정영역 설치
    Map.putTileEffect(18, 15, TileEffectType.LOCATION, {
        name: "ladder_top",
        width: 1,
        height: 1,   
    });

    //사운드 재생
    App.stopSound();
    App.playSound(music_before, true, false);

    //3초간 장소 라벨 띄움
    player.showCenterLabel("광장",0xFFFFFF, 0x000000, 0, 3000);

    //플레이어 타이틀 수정
    player.title = "헬퍼";
    player.sendUpdated();

    //채팅창에 장소 정보 게시
    App.sayToAll("[광장]", 0x9BF542);
    App.sayToAll("처음에 봤던 광장으로 돌아왔다!", 0x9BF542);
    App.sayToAll("여전히 무언가 허전하다...", 0x9BF542);
    App.sayToAll("어서 축제기획자에게 가서 말을 걸어보자.", 0x9BF542);

   //하나도 안 풀었다면
   if(App.storage == 0 || App.storage == undefined){
       
       //앱 스토리지에 변수 저장(6개의 상태 중 0번째 상태임을 저장)
       App.storage = 0;
       App.save();

   }
   else if(App.storage == 1){

       //오브젝트 설치
       Map.putObject(0, 0, null);
       Map.putObject(0, 0, transition_1);

        //채팅창에 문열림 게시 
        App.runLater(function() {
            App.sayToAll("트리에 구슬들이 달렸다..!", 0x9BF542);
        }, 0);
        App.runLater(function() {
            App.sayToAll("----------------------------------------", 0x9BF542);
        }, 1);   
        App.runLater(function() {
            App.sayToAll("두 번째 구슬: ㄱㅅ의 구슬", 0x9BF542);
        }, 2);
        App.runLater(function() {
            App.sayToAll("예수님께서는 가장 높은 곳에서 가장 낮은 곳으로 오심으로, ㄱㅅ을 보이셨다.", 0x9BF542);
        }, 3);
       
   }
   else if(App.storage == 2){

        //오브젝트 설치
        Map.putObject(0, 0, null);
        Map.putObject(0, 0, transition_2);

        //채팅창에 문열림 게시
        App.runLater(function() {
            App.sayToAll("주변이 환해졌다..!", 0x9BF542);
        }, 0);
        App.runLater(function() {
            App.sayToAll("----------------------------------------", 0x9BF542);
        }, 1);   
        App.runLater(function() {
            App.sayToAll("세 번째 구슬: ㅅㄹ의 구슬", 0x9BF542);
        }, 2);
        App.runLater(function() {
            App.sayToAll("소외된 자들에게 가장 먼저 예수님의 탄생을 알리셨다. 이처럼 하나님은 연약하고 소외된 자들도 ㅅㄹ하신다.", 0x9BF542);
        }, 3);

   }
   else if(App.storage == 3){

        //오브젝트 설치
        Map.putObject(0, 0, null);
        Map.putObject(0, 0, transition_3);

        //채팅창에 문열림 게시
        App.runLater(function() {
            App.sayToAll("사람들이 미소를 되찾아가고 있다..!", 0x9BF542);
        }, 0);
        App.runLater(function() {
            App.sayToAll("----------------------------------------", 0x9BF542);
        }, 1);   
        App.runLater(function() {
            App.sayToAll("네 번째 구슬: ㅊㅇ의 구슬", 0x9BF542);
        }, 2);
        App.runLater(function() {
            App.sayToAll("목자들이 예수님의 나심을 ㅊㅇ한 것처럼, 우리 또한 이 땅에 오신 예수님을 ㅊㅇ해야 한다.", 0x9BF542);
        }, 3);

    }
    else if(App.storage == 4){

        //사운드 재생
        App.stopSound();
        App.playSound(music_after, true, false);

        //채팅창에 문열림 게시
        App.runLater(function() {
            App.sayToAll("기쁜 찬양이 흘러나온다!", 0x9BF542);
        }, 0);
        App.runLater(function() {
            App.sayToAll("----------------------------------------", 0x9BF542);
        }, 1);   
        App.runLater(function() {
            App.sayToAll("'순종'하심으로 '겸손'을 보이시고, 우리를 여전히 '사랑'하시며, '찬양'받기 합당하신 분.", 0x9BF542);
        }, 2);
        App.runLater(function() {
            App.sayToAll("이제, 크리스마스의 주인이신 그 분을 불러보자!", 0x9BF542);
        }, 3);
    
    }
    else if(App.storage == 5){

        //사운드 재생
        App.stopSound();
        App.playSound(music_after, true, false);

        //오브젝트 설치
        Map.putObject(0, 0, null);
        Map.putObject(0, 0, transition_4);

        //채팅창에 문열림 게시
        App.runLater(function() {
            App.sayToAll("----------------------------------------", 0x9BF542);
        }, 0);
        App.runLater(function() {
            App.sayToAll("[예수님]", 0x9BF542);
        }, 1);   
        App.runLater(function() {
            App.sayToAll("드디어 잃어버린 크리스마스의 모든 걸 되찾았다!", 0x9BF542);
        }, 2);
        App.runLater(function() {
            App.sayToAll("크리스마스는 바로 '예수님'의 태어나심을 축하하는 날이다!", 0x9BF542);
        }, 3);
        App.runLater(function() {
            App.sayToAll("선물, 화려한 조명, 웅장한 트리 그 무엇도 아닌 예수님 한 분만으로 기뻐할 수 있는 크리스마스가 되기를!", 0xde00ff);
        }, 4);
        App.runLater(function() {
            App.sayToAll("예수님과 함께 메리 크리스마스!♥", 0xde00ff);
        }, 5);

    }

});


/*채팅 입력 시의 이벤트*/
App.onSay.Add(function (player, text){

   //순종 입력 시
   if(_EVENT_TEXT_SUNJONG == text){

       if(App.storage == 0 || App.storage == undefined){

            //solved 변수를 수정
            App.storage = 1;
            App.save();

            //오브젝트 설치
            Map.putObject(0, 0, transition_1);

            //채팅창에 문열림 게시 
            App.runLater(function() {
                App.sayToAll("트리에 구슬들이 달렸다..!", 0x9BF542);
            }, 0);
            App.runLater(function() {
                App.sayToAll("----------------------------------------", 0x9BF542);
            }, 1);   
            App.runLater(function() {
                App.sayToAll("두 번째 구슬: ㄱㅅ의 구슬", 0x9BF542);
            }, 2);
            App.runLater(function() {
                App.sayToAll("예수님께서는 가장 높은 곳에서 가장 낮은 곳으로 오심으로, ㄱㅅ을 보이셨다.", 0x9BF542);
            }, 3);
       }
   } //겸손 입력 시
   else if(_EVENT_TEXT_GYUMSON == text){

       if(App.storage == 1){

           //solved 변수를 수정
           App.storage = 2;
           App.save();

           //오브젝트 설치
           Map.putObject(0, 0, null);
           Map.putObject(0, 0, transition_2);

           //채팅창에 문열림 게시
            App.runLater(function() {
                App.sayToAll("주변이 환해졌다..!", 0x9BF542);
            }, 0);
            App.runLater(function() {
                App.sayToAll("----------------------------------------", 0x9BF542);
            }, 1);   
            App.runLater(function() {
                App.sayToAll("세 번째 구슬: ㅅㄹ의 구슬", 0x9BF542);
            }, 2);
            App.runLater(function() {
                App.sayToAll("소외된 자들에게 가장 먼저 예수님의 탄생을 알리셨다. 이처럼 하나님은 연약하고 소외된 자들도 ㅅㄹ하신다.", 0x9BF542);
            }, 3);

        }
   }//사랑 입력 시
   else if(_EVENT_TEXT_LOVE == text){

       if(App.storage == 2){

           //solved 변수를 수정
           App.storage = 3;
           App.save();

           //오브젝트 설치
           Map.putObject(0, 0, null);
           Map.putObject(0, 0, transition_3);

            //채팅창에 문열림 게시
            App.runLater(function() {
                App.sayToAll("사람들이 미소를 되찾아가고 있다..!", 0x9BF542);
            }, 0);
            App.runLater(function() {
                App.sayToAll("----------------------------------------", 0x9BF542);
            }, 1);   
            App.runLater(function() {
                App.sayToAll("네 번째 구슬: ㅊㅇ의 구슬", 0x9BF542);
            }, 2);
            App.runLater(function() {
                App.sayToAll("목자들이 예수님의 나심을 ㅊㅇ한 것처럼, 우리 또한 이 땅에 오신 예수님을 ㅊㅇ해야 한다.", 0x9BF542);
            }, 3);

        }
   }//찬양 입력 시
   else if(_EVENT_TEXT_PRAISE == text){

    if(App.storage == 3){

        //solved 변수를 수정
        App.storage = 4;
        App.save();

        //사운드 재생
        App.stopSound();
        App.playSound(music_after, true, false);

    
        //채팅창에 문열림 게시
        App.runLater(function() {
            App.sayToAll("기쁜 찬양이 흘러나온다!", 0x9BF542);
        }, 0);
        App.runLater(function() {
            App.sayToAll("----------------------------------------", 0x9BF542);
        }, 1);   
        App.runLater(function() {
            App.sayToAll("'순종'하심으로 '겸손'을 보이시고, 우리를 여전히 '사랑'하시며, '찬양'받기 합당하신 분.", 0x9BF542);
        }, 2);
        App.runLater(function() {
            App.sayToAll("이제, 크리스마스의 주인이신 그 분을 불러보자!", 0x9BF542);
        }, 3);

        }
    }//예수님 입력 시
    else if(_EVENT_TEXT_JESUS == text){

        if(App.storage == 4){
    
            //solved 변수를 수정
            App.storage = 5;
            App.save();
    
            //오브젝트 설치
            Map.putObject(0, 0, null);
            Map.putObject(0, 0, transition_4);

                   //채팅창에 문열림 게시
            App.runLater(function() {
                App.sayToAll("----------------------------------------", 0x9BF542);
            }, 0);
            App.runLater(function() {
                App.sayToAll("[예수님]", 0x9BF542);
            }, 1);   
            App.runLater(function() {
                App.sayToAll("드디어 잃어버린 크리스마스의 모든 걸 되찾았다!", 0x9BF542);
            }, 2);
            App.runLater(function() {
                App.sayToAll("크리스마스는 바로 '예수님'의 태어나심을 축하하는 날이다!", 0x9BF542);
            }, 3);
            App.runLater(function() {
                App.sayToAll("선물, 화려한 조명, 웅장한 트리 그 무엇도 아닌 예수님 한 분으로 기뻐할 수 있는 크리스마스가 되기를!", 0xde00ff);
            }, 4);
            App.runLater(function() {
                App.sayToAll("예수님과 함께 메리 크리스마스!♥", 0xde00ff);
            }, 5);

            }
        }
});


/*플레이어가 지정 영역에 도착 시 이벤트*/
App.addOnLocationTouched("ladder_top", function(player){

    App.runLater(function() {
        App.sayToAll("첫 번째 구슬: ㅅㅈ의 구슬", 0x9BF542);
	}, 0);
    App.runLater(function() {
        App.sayToAll("성령으로 잉태한 마리아, 요셉은 ㅅㅈ하여 그녀를 아내로 맞아들인다.", 0x9BF542);
	}, 1);
    
});
