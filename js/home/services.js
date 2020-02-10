$(function(){
    let controller = new ScrollMagic.Controller();

  // services slide animation
  let slideAnimation = gsap.timeline()       
      .from("#masterContainer .service-bg-title", {duration: 2,opacity:1})
      .to("#masterContainer .service-bg-title", {duration: 1,top:'10%',opacity:0.5,fontSize:'2.5rem'})
      .from("#slidesContainer .slide-1",{opacity:0,duration:2,ease: "power1.out"})
      
      //.from("#slidesContainer .title-card-1",{y:150,duration:1,ease: "power1.out"})
      //.from("#aiCards .card",{y:150,duration:1,opacity:0.98,ease: "power1.out"},"-=1")             
      .to("#slidesContainer", 4, {x: "-25%",delay:4 })

      //.from("#slidesContainer .title-card-2",{x:100,duration:1,opacity:0.95,ease: "power1.out"})
      //.from("#appCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      .to("#slidesContainer", 4, {x: "-50%" })
      
      //.from("#slidesContainer .title-card-3",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      //.from("#infraCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      .to("#slidesContainer", 4, {x: "-75%" })

      //.from("#slidesContainer .title-card-4",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
     // .from("#businessCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
             
  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#masterContainer",
      triggerHook: "onLeave",
      duration: "400%",                 
  })
      .setPin("#masterContainer")
      .setTween(slideAnimation)
     // .addIndicators() // Indicators - remove on production
      .addTo(controller);    

})