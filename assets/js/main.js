// dialog show and hide function
function fnShowPop(sGetName){
      var $layer = $("#"+ sGetName);
      $layer.addClass("on");
      if($(window).width() <768) {
            $("html, body").css("overflow","hidden").css("height","100%");
      }
}
function fnHidePop(sGetName){
      $("#"+ sGetName).removeClass("on");
      if($(window).width() <768) {
            $("html, body").css("overflow","auto").css("height","auto");
      }
}

// green sock version 2
var loadStopTime = new TimelineMax({paused:true});
loadStopTime.from( ".load", 1, { opacity:0, ease:Power4.easeOut, autoAlpha: 0});

var loadTime = new TimelineMax({paused:true});
loadTime.from( ".loaded", 1, { opacity:0, ease:Power4.easeOut,});

var time01 = new TimelineMax({paused:true});
time01.from( "#intro #svg-intro-title1",1, { y:300, opacity:0, ease:Power4.easeOut,},"-=1.0")
      .from( "#intro #svg-intro-title2",1, { y:300, opacity:0, ease:Power4.easeOut,},"-=0.6")
      .from( "#intro .intro-greetings",1, { y:200, opacity:0, ease:Power4.easeOut,},"-=0.6")
      .from( "#intro .intro-button",1, { y:100, opacity:0, ease:Power4.easeOut,},"-=0.6")
      .from( "#intro #charactor-illust", 1, { x:300, opacity:0, ease:Power4.easeOut},"-=0.6")
      .from( "#intro .intro-imgs-element1", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,})
      .from( "#intro .intro-imgs-element2", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,},"-=0.8")
      .from( "#intro .intro-imgs-element3", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,})
      .from( "#intro .intro-imgs-element4", 1, { rotation:"+=90", opacity:0, ease:Power4.easeOut,},"-=1.0")
      .from( "#intro .intro-imgs-element5", 1, { scale:0.5, opacity:0, ease:Power4.easeOut,},"-=1.0")
      .from( "#intro .intro-imgs-element6", 1, { x:300, opacity:0, ease:Power4.easeOut,},"-=0.8");