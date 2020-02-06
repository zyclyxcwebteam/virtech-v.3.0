$(function () {
  particlesJS.load('particles', 'http://127.0.0.1:5500/js/p.json', function() {
    console.log('callback - particles.js config loaded');
  });

  // init Scroll Magic    
  let controller = new ScrollMagic.Controller();

  // services slide animation
  let slideAnimation = gsap.timeline()       
      .from("#masterContainer .service-bg-title", {y:20,duration: 2,opacity:1})
      .from("#slidesContainer .slide-1",{opacity:0,duration:2,ease: "power1.out"})
      
      .from("#slidesContainer .title-card-1",{y:150,duration:1,ease: "power1.out"})
      .from("#aiCards .card",{y:150,duration:1,opacity:0.98,ease: "power1.out"})             
      .to("#slidesContainer", 4, {x: "-25%",delay:4 })

      .from("#slidesContainer .title-card-2",{x:100,duration:1,opacity:0.95,ease: "power1.out"})
      .from("#appCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      .to("#slidesContainer", 4, {x: "-50%" })
      
      .from("#slidesContainer .title-card-3",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      .from("#infraCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      .to("#slidesContainer", 4, {x: "-75%" })

      .from("#slidesContainer .title-card-4",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      .from("#businessCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
             
  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#masterContainer",
      triggerHook: "onLeave",
      duration: "800%",                 
  })
      .setPin("#masterContainer")
      .setTween(slideAnimation)
      .addIndicators() // Indicators - remove on production
      .addTo(controller);    


// Industries section
 
let industryAnimation = gsap.timeline()
.from("#industryContainer .bg-title", { opacity: 1, duration: 2 })
.from("#industryOuter",{opacity:0,duration:2,ease: "power1.out"})
.from("#industryOuter .industry",{y:100,duration:2,opacity:0.98,ease: "power1.out",scaleX:0.8,scaleY:.8})
.fromTo("#industryOuter .ind-content-wrapper",{y:100,opacity:98},{y:0,ease: "power1.out"})
new ScrollMagic.Scene({
  triggerElement: "#industryContainer",
  triggerHook: "onLeave",
  duration: "100%",                 
  })
  .setPin("#industryContainer")
  .setTween(industryAnimation)
  .addIndicators() // Indicators - remove on production
  .addTo(controller); 

// Company Intro
let companyIntroAnimation = gsap.timeline()
 
.from("#introContainer .intro-bg-title", { opacity: 1, duration: 2 })
.from("#introSlides .slide-1",{opacity:0,duration:2,ease: "power1.out"})
.from(".testimonials .test-card",{stagger:0.1,y:400,duration:2,opacity:0.98,ease: "power1.out",skewX:8,skewY:8})       
.from(".intro-content",{opacity:0.98,y:400,duration:1.3,ease: "power1.out"},"-=2")
.to("#introSlides", 4, { x: "-33.333%",delay:4 })       
.to("#introSlides", 4, { x: "-66.666%" })               
// create scene to pin and link animation
new ScrollMagic.Scene({
triggerElement: "#introContainer",
triggerHook: "onLeave",
duration: "600%",                 
})
.setPin("#introContainer")
.setTween(companyIntroAnimation)
.addIndicators() // Indicators - remove on production
.addTo(controller);    
 


});

