// green sock version 2


var loadStopTime = new TimelineMax({paused:true});
loadStopTime.from( ".load", 1, { opacity:0, ease:Power4.easeOut, autoAlpha: 0});

var loadTime = new TimelineMax({paused:true});
loadTime.from( ".loaded", 1, { opacity:0, ease:Power4.easeOut,});

var time01 = new TimelineMax({paused:true});
time01.from( "#intro #charactor-illust", 1, { x:300, opacity:0, ease:Power4.easeOut,})
      .from( "#intro .intro-imgs-element1", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,})
      .from( "#intro .intro-imgs-element2", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,},"-=0.8")
      .from( "#intro .intro-imgs-element3", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,})
      .from( "#intro .intro-imgs-element4", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,},"-=1.0")
      .from( "#intro .intro-imgs-element5", 1, { scale:0.5, opacity:0, ease:Power4.easeOut,},"-=1.0")
      .from( "#intro .intro-imgs-element6", 1, { x:300, opacity:0, ease:Power4.easeOut,})
      .from( "#intro #svg-intro-title1",1, { y:300, opacity:0, ease:Power4.easeOut,},"-=1.0")
      .from( "#intro #svg-intro-title2",1, { y:300, opacity:0, ease:Power4.easeOut,},"-=0.6")
      .from( "#intro .intro-greetings",1, { y:200, opacity:0, ease:Power4.easeOut,},"-=0.6")
      .from( "#intro .intro-button",1, { y:100, opacity:0, ease:Power4.easeOut,},"-=0.6");




// var time01 = new TimelineMax({paused:true});
// time01.from( "#intro #charactor-illust", 1, { x:300, opacity:0, ease:Power4.easeOut,})
//         .from( "#intro .intro-imgs-element1", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,})
//         .from( "#intro .intro-imgs-element2", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,},"-=0.6")
//         .from( "#intro .intro-imgs-element3", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,})
//         .from( "#intro .intro-imgs-element4", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,},"-=0.6")
//         .from( "#intro .intro-imgs-element5", 1, { scale:0.5, opacity:0, ease:Power4.easeOut,},"-=0.6")
//         .from( "#intro .intro-imgs-element5", 1, { scale:0.5, opacity:0, ease:Power4.easeOut,},"-=0.6")
//         .from( "#intro .intro-imgs-element6", 1, { scale:0, opacity:0, ease:Power4.easeOut,},"-=0.6")
//       .from( "#intro #svg-intro-title1",1, { y:300, opacity:0, ease:Power4.easeOut,},"+=1.0")
//       .from( "#intro #svg-intro-title2",1, { y:300, opacity:0, ease:Power4.easeOut,},"-=0.6")
//       .from( "#intro .intro-greetings",1, { y:300, opacity:0, ease:Power4.easeOut,},"-=0.6")
//       .from( "#intro .intro-button",1, { x:300, opacity:0, ease:Power4.easeOut,},"-=0.6");
 

// var time02 = new TimelineMax({paused:true});
// time02.from("#about-me .section-title", 1, { y:300, opacity:0, ease:Power4.easeOut,})
//         .from("#about-me #career .about-content__title", 1, { x:-300, opacity:0, ease:Power4.easeOut,}, 0.15,"-=0.6")
//         .staggerFrom("#about-me #career .about-content__body > dl", 1, { y:300, opacity:0, ease:Power4.easeOut,}, 0.15,"-=0.6")
//         .from("#about-me #contact .about-content__title", 1, { x:-300, opacity:0, ease:Power4.easeOut,},"-=0.6")
//         .staggerFrom("#about-me #contact .about-content__body > dl", 1, { y:300, opacity:0, ease:Power4.easeOut,}, 0.15,"-=0.6")
//         .from("#about-me #favorite .about-content__title", 1, { x:-300, opacity:0, ease:Power4.easeOut,},"-=0.6")
//         .staggerFrom("#about-me #favorite .favorite-item__wrap > .favorite-item", 1, { y:300, opacity:0, ease:Power4.easeOut,}, 0.15,"-=0.6");
      


 
            

//스크롤매직 사용
var controller = new ScrollMagic.Controller({});
var scene01 = new ScrollMagic.Scene({
      triggerElement : "#intro",
      // 스크롤 닫는 기준이 hook
      triggerHook:0,
      // 애니메이션 실행 위치
      ///offset:100,
      // 애니메이션 시간
      duration:"100%",
      //duration:"100%",

});
scene01.addIndicators({
      name:"intro-section",
      colorTrigger:"#f00",
      colorStart:"#f00",
      colorEnd:"#00f",
});
scene01.addTo(controller);
// 스크롤 할때 애니메이션 time01 사용
scene01.setTween(time01);
// 스크롤 되는 동안 섹션 고정
scene01.setPin("#intro");

//섹션2
var scene02 = new ScrollMagic.Scene({
      triggerElement : "#about-me",
      triggerHook:0,
      //offset:100,
      duration:"100%",
});
scene02.addIndicators({
      name:"section03",
      colorTrigger:"#f00",
      colorStart:"#f00",
      colorEnd:"#00f",
});
scene02.addTo(controller);
scene02.setTween(time02);
scene02.setPin("#about-me");







