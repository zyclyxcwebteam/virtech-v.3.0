$(function () {
    // init Scroll Magic    
   
    //$('.your-nav-container').find('a[href="' + location.pathname + '"]').parents('li').addClass('active');
    let controller = new ScrollMagic.Controller();

    // define movement of panels
    let slideAnimation = gsap.timeline()
        .from(".bg-title", { opacity: 1, duration: 2 })
        .from(".slide-1",{opacity:0,duration:2,delay:1,ease: "power1.out"})
        //.to("#slidesContainer", 4, { x: "-25%", })         
        .to("#slidesContainer", 4, { x: "-50%" })         
        //.to("#slidesContainer", 4, { x: "-75%" })         
    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#masterContainer",
        triggerHook: "onLeave",
        duration: "200%",
        // reverse:false          
    })
        .setPin("#masterContainer")
        .setTween(slideAnimation)
        .addIndicators() // Indicators - remove on production
        .addTo(controller);             
});