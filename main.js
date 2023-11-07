"use strict";

window.addEventListener('scroll', function(){
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 150;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });
  window.addEventListener('load', function(){
    let h1 = document.querySelector("h1");
    h1.animate(
        {
            opacity: ["0.5", "1"],
            transform: ["rotate(3deg)","rotate(-3deg)","rotate(3deg)","rotate(-3deg)","rotate(3deg)","rotate(-3deg)","rotate(0)"]
        },
        {
            duration: 800,
            direction: "alternate",
        }
    )
  });
