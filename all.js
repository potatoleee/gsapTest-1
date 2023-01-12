gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: true
});

// Animate From
$(".banner").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".logo");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });
    tl.from(targetElement, {
      width: "90%",
      y:"-70%",
      duration: 1
    });
  });

//sticky circle To
$(".circle-content").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".circle");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    tl.fromTo(targetElement, {
        //從圓形
        width: "35em",
        height: "35em",
        borderRadius:"35em",
        duration:1
      },
      { //到滿版
        width: "100vw",
        height: "100vh",
        borderRadius:"0em",
        duration:1
      }
    );
  });


  // dark to light color change
$(".circle-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("body,nav");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        // 從黑
        backgroundColor: "#2e2a27",
        color: "#e8e2da",
        duration:1
      },
      { //變暗
        backgroundColor: "#e8e2da",
        color: "#2e2a27",
        duration: 1
      }
    );
  });