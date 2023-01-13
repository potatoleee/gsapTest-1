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

  //canvasvideo circle To
$(".video-content").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".videoCanvas");
  
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


  // This will copy the contents of video element to a canvas element

// let canvasEl = document.getElementById('canvas');
// let context = canvasEl.getContext('2d');
// let videoEl = document.getElementById('video');

// function updateCanvas() {
//   context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
  
//   window.requestAnimationFrame(updateCanvas);
// }

// requestAnimationFrame(updateCanvas);

// Source href="http://html5doctor.com/video-canvas-magic/

document.addEventListener('DOMContentLoaded', function(){
    var v = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var intervalRewind;
  
    v.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/967302/Outdoor-Camping-zip.mp4";
    v.crossorigin = "anonymous";
    v.type = "video/mp4";
  
     
    var cw = v.clientWidth;
    var ch = v.clientHeight;
    v.style.width = `${v.clientWidth}px`;
    v.style.height = `${v.clientHeight}px`;
    canvas.width = cw;
    canvas.height = ch;
    v.crossOrigin = "Anonymous";
    
     
    v.addEventListener('play', function(){
        draw(this, context, cw, ch);
  
    }, false);
  
    
  }, false);
  
  
  
  
  function draw(v, c, w, h) {
    if(v.paused || v.ended) {
      return false; 
    }
    c.drawImage(v, 0, 0, w, h);
    
     let pix = c.getImageData(0, 0, 1, 1).data;
     
     let updateBgColor = 'rgb(' + pix[0] + ',' + pix[1] + ',' + pix[2] + ')';
    //  document.body.style.backgroundColor = updateBgColor;
  
     
    setTimeout(draw, 1, v, c, w, h);
  }
  
  