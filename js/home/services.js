$(function(){    
    let controller = new ScrollMagic.Controller();

  // services slide animation
  let slideAnimation = gsap.timeline()       
      //.from("#masterContainer .service-bg-title", {duration: 1,opacity:1})
      .to("#masterContainer .bg-title", {duration: 0.8,opacity:0.7,transform:'translate(0,0)',left:0,top:0,fontSize:'3.5rem'})
      .from("#slidesContainer .slide-1",{opacity:0,duration:1,ease: "power1.out"})
      
      //.from("#slidesContainer .title-card-1",{y:150,duration:1,ease: "power1.out"})
      //.from("#aiCards .card",{y:150,duration:1,opacity:0.98,ease: "power1.out"},"-=1")             
      .to("#slidesContainer", 4, {x: "-25%" })

      //.from("#slidesContainer .title-card-2",{x:100,duration:1,opacity:0.95,ease: "power1.out"})
      //.from("#appCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      .to("#slidesContainer", 4, {x: "-50%",  ease: Linear.easeNone})
      
      //.from("#slidesContainer .title-card-3",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      //.from("#infraCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
      .to("#slidesContainer", 4, {x: "-75%" })

      //.from("#slidesContainer .title-card-4",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
     // .from("#businessCards .card",{x:100,duration:1,opacity:0.98,ease: "power1.out"})
             
  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#masterContainer",
      triggerHook:0.13,
      duration: "400%",                 
  })
      .setPin("#masterContainer")
      .setTween(slideAnimation)
      .addIndicators() // Indicators - remove on production
      .addTo(controller);    

})