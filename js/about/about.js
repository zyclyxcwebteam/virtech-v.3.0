$(function(){     
let controller = new ScrollMagic.Controller();
let howWeDo = gsap.timeline();
//howWeDo.fromTo('.do-content',{autoAlpha:1,duration:0.01})
howWeDo.to('.do-content',{'--border-width':'0%',duration:0.001})
howWeDo.fromTo('.do-content',{'--border-width':'0%'},{'--border-width':'20%',duration:2})
howWeDo.fromTo('#do-icon-1',{autoAlpha:0,opacity:0,y:-55},{autoAlpha:1,opacity:1,y:0,duration:2},"-=2")
howWeDo.fromTo('#do-text-1',{autoAlpha:0,y:55},{autoAlpha:1,y:0,duration:2},"-=2")
//howWeDo.fromTo('.do-icon',{'--circle-opacity':0},{'--circle-opacity':1,duration:2},"-=2")

howWeDo.fromTo('.do-content',{'--border-width':'20%'},{'--border-width':'40%',duration:2})
howWeDo.fromTo('#do-icon-2',{autoAlpha:0,y:55},{y:0,autoAlpha:1,duration:2},"-=2")
howWeDo.fromTo('#do-text-2',{autoAlpha:0,y:-55},{autoAlpha:1,y:0,duration:2},"-=2")

howWeDo.fromTo('.do-content',{'--border-width':'40%'},{'--border-width':'60%',duration:2})
howWeDo.fromTo('#do-icon-3',{autoAlpha:0,y:-55},{y:0,autoAlpha:1,duration:2},"-=2")
howWeDo.fromTo('#do-text-3',{autoAlpha:0,y:55},{autoAlpha:1,y:0,duration:2},"-=2")

howWeDo.fromTo('.do-content',{'--border-width':'60%'},{'--border-width':'80%',duration:2})
howWeDo.fromTo('#do-icon-4',{autoAlpha:0,y:55},{y:0,autoAlpha:1,duration:2},"-=2")
howWeDo.fromTo('#do-text-4',{autoAlpha:0,y:-55},{y:0,autoAlpha:1,y:0,duration:2},"-=2")

howWeDo.fromTo('.do-content',{'--border-width':'80%'},{'--border-width':'100%',duration:2})
howWeDo.fromTo('#do-icon-5',{autoAlpha:0,y:-55},{y:0,autoAlpha:1,duration:2},"-=2")
howWeDo.fromTo('#do-text-5',{autoAlpha:0,y:55},{y:0,autoAlpha:1,y:0,duration:2},"-=2")
//howWeDo.fromTo('.do-icon',{y:60,opacity:0,'--border-width':'0%'},{stagger:2,y:0,opacity:1,'--border-width':'100%',duration:1},"-=12")

new ScrollMagic.Scene({
    triggerElement: "#howWeDoMaster",
    triggerHook:0.2,
    reverse:false       
    })     
    .setTween(howWeDo)
    .addIndicators({name:'how we do'})
    .addTo(controller);
    
    let missionBg = gsap.timeline()
    missionBg.to('#missionMaster', { '--mission-bg':'#eeeef0', duration: 0.8 })
    missionBg.fromTo(".mission-vission .about-text",{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:0.2})
    
    new ScrollMagic.Scene({
        triggerElement:'#missionMaster',
        triggerHook:0.25,
        reverse:false
    })
    .setTween(missionBg)
    .addIndicators({name:'mission-color'})
    .addTo(controller)    




    // end of init 
});

