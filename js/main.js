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



//styling of overlaying section

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});





  // styling for scrolling text in company_slogen section

  gsap.to(".scroll_heading", {
    duration: .5,
    
    // width: "100%",
    x: -1700,
    scrollTrigger: {
        trigger: ".company_slogan",
        start: "top 80%",
        scrub: .5,
        // x: -700,
        
    }
  })




