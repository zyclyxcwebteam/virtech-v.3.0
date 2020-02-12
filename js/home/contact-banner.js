$(function(){
    // ! scroll magic controller
    let controller = new ScrollMagic.Controller();
    
    let contactAnimation = gsap.timeline()         
    .fromTo("#contactBanner .overlay", { width:'0%',opacity:0,backgroundColor:'rgba(0, 144, 166,0.4)'},{width:'58.8%',backgroundColor:'rgba(0, 144, 166,0.75)',duration:0.3,opacity:1 })
    .fromTo("#contactBanner .overlay-2", { width:'0%',opacity:0,backgroundColor:'rgba(1, 137, 81,0.5)'},{width:'58.8%',backgroundColor:'rgba(1, 137, 81,0.75)',duration:0.3,opacity:1 },"-=0.3")
    
    new ScrollMagic.Scene({
        triggerElement: "#contactBanner",
        triggerHook:"onEnter",
        reverse:false,                              
    })
      //.setPin("#industryInner")
        .setTween(contactAnimation)        
        .addTo(controller);
});

