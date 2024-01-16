const tl = gsap.timeline();

tl.to("body", {
  overflow: "hidden"
})
  .to(".preloader .text-container", {
    duration: .5,
    opacity: 1,
    ease: "Power3.easeOut"
  })
  .from(".preloader .text-container span", {
    duration: 1.5,
    delay: .1,
    y: 150,
    skewY: 10,
    stagger: 0.4,
    ease: "Power3.easeOut"
  })
  .to(".preloader .text-container span", {
    duration: 1.2,
    y: 150,
    skewY: -20,
    stagger: 0.2,
    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 1,
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "auto"
    },
    "-=1"
  )
  .to(".preloader", {
    display: "none"
  });



  //styling of video sect

  // var bgvideo = document.querySelector('#BgVideo');
  // // bgvideo.muted = "true";
  // bgvideo.play();