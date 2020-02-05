$(function () {
  // init Scroll Magic    
  let controller = new ScrollMagic.Controller();

  // define movement of panels
  let slideAnimation = gsap.timeline()       
      .from("#masterContainer .bg-title", { opacity: 1, duration: 2 })
      .from("#slidesContainer .slide-1",{opacity:0,duration:2,ease: "power1.out"})
      
      .from("#slidesContainer .title-card-1",{x:250,duration:2,opacity:0,ease: "power1.out"})
      .from("#aiCards .card",{stagger:0.5,x:350,duration:2,opacity:0,ease: "power1.out"})             
      .to("#slidesContainer", 4, { x: "-25%",delay:4 })

      .from("#slidesContainer .title-card-2",{x:150,duration:2,opacity:0,ease: "power1.out"})
      .from("#appCards .card",{stagger:0.5,x:150,duration:2,opacity:0,ease: "power1.out"})
      .to("#slidesContainer", 4, { x: "-50%" })
      
      .from("#slidesContainer .title-card-3",{x:150,duration:2,opacity:0,ease: "power1.out"})
      .from("#infraCards .card",{stagger:0.5,x:150,duration:2,opacity:0,ease: "power1.out"})
      .to("#slidesContainer", 4, { x: "-75%" })

      .from("#slidesContainer .title-card-4",{x:150,duration:2,opacity:0,ease: "power1.out"})
      .from("#businessCards .card",{stagger:0.5,x:150,duration:2,opacity:0,ease: "power1.out"})
             
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
 
.from("#introContainer .bg-title", { opacity: 1, duration: 2 })
.from("#introSlides .slide-1",{opacity:0,duration:2,ease: "power1.out"})       
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