$(function(){
 // ! scroll magic controller
let controller = new ScrollMagic.Controller();
let companyIntroAnimation = gsap.timeline()
 
//.from("#introContainer .intro-bg-title", { opacity: 1, duration: 2 })
//.to("#introContainer .intro-bg-title", {duration: 1,fontSize:'2.5rem',opacity:0.6,top:'15%'})
.to("#introContainer .bg-title", {duration: 0.8,opacity:0.7,transform:'translate(0,0)',top:0,left:0,fontSize:'3.5rem'})
.from("#introSlides .slide-1",{opacity:0,duration:2,ease: "power1.out"})
//.from(".testimonials .test-card",{stagger:0.1,y:20,duration:2,opacity:0.98,ease: "power1.out",skewX:8,skewY:8})       
.from(".intro-content",{opacity:0.98,y:20,duration:1.3,ease: "power1.out"},"-=2")
.to("#introSlides", 4, { x: "-33.333%",delay:4 })       
.to("#introSlides", 4, { x: "-66.666%" })               

// create scene to pin and link animation
new ScrollMagic.Scene({
triggerElement: "#introContainer",
triggerHook:0.13,
duration: "400%",                 
})
.setPin("#introContainer")
.setTween(companyIntroAnimation)
.addIndicators() // Indicators - remove on production
.addTo(controller);     
})


// let coreValues = gsap.timeline();
// gsap.fromTo('#introContainer .core-values .card',{autoAlpha:0,y:50},{stagger:2,y:0,autoAlpha:1,duration:6})
// gsap.to('#introContainer .core-values .core-icon-outer',{stagger:2,backgroundColor:'#00C9A7',duration:6,delay:1})
