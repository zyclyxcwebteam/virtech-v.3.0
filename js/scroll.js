$(function () {
  // init Scroll Magic    
  let controller = new ScrollMagic.Controller();

  // define movement of panels
  let slideAnimation = gsap.timeline()
      .from("#masterContainer .bg-title", { opacity: 1, duration: 2 })       
      .to("#slidesContainer", 4, { x: "-25%",delay:4 })       
      .to("#slidesContainer", 4, { x: "-50%" })       
      .to("#slidesContainer", 4, { x: "-75%" })       
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
            
// Company Intro
let companyIntroAnimation = gsap.timeline()
.from("#introContainer .bg-title", { opacity: 1, duration: 2 })       
.to("#introSlides", 4, { x: "-25%",delay:4 })       
.to("#introSlides", 4, { x: "-50%" })       
.to("#introSlides", 4, { x: "-75%" })       
// create scene to pin and link animation
new ScrollMagic.Scene({
triggerElement: "#introContainer",
triggerHook: "onLeave",
duration: "800%",                 
})
.setPin("#introContainer")
.setTween(companyIntroAnimation)
.addIndicators() // Indicators - remove on production
.addTo(controller);    
});