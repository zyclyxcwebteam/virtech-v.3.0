$(function(){     

    var typed = new Typed('.fade-title', {
        strings: ["Automation", "Artificial Intelligence", "Cybersecurity", "Blockchain", "Internet of Things", "Big Data"],
        typeSpeed: 60,
        backSpeed: 20,
        loop: true,
        backDelay: 500,
        startDelay: 1000,
      });
      
let controller = new ScrollMagic.Controller();
gsap.to('.do-content',{'--border-width':'0%',duration:0.001})

let howWeDo = gsap.timeline();
//howWeDo.fromTo('.do-content',{autoAlpha:1,duration:0.01})
howWeDo.to('.do-content',{'--border-width':'0%',duration:0.001})
howWeDo.fromTo('.do-content',{'--border-width':'0%'},{'--border-width':'20%',duration:2})
howWeDo.fromTo('#do-icon-1',{autoAlpha:0,opacity:0,y:-55},{autoAlpha:1,opacity:1,y:0,duration:2},"-=2")
howWeDo.fromTo('#do-text-1',{autoAlpha:0,y:55},{autoAlpha:1,y:0,duration:2},"-=2")
howWeDo.fromTo('#do-icon-1',{'--circle-color':0},{'--circle-color':1,duration:0.02})

howWeDo.fromTo('.do-content',{'--border-width':'20%'},{'--border-width':'40%',duration:2})
howWeDo.fromTo('#do-icon-2',{autoAlpha:0,y:55},{y:0,autoAlpha:1,duration:2},"-=2")
howWeDo.fromTo('#do-text-2',{autoAlpha:0,y:-55},{autoAlpha:1,y:0,duration:2},"-=2")
howWeDo.fromTo('#do-icon-2',{'--circle-color':0},{'--circle-color':1,duration:0.02})


howWeDo.fromTo('.do-content',{'--border-width':'40%'},{'--border-width':'60%',duration:2})
howWeDo.fromTo('#do-icon-3',{autoAlpha:0,y:-55},{y:0,autoAlpha:1,duration:2},"-=2")
howWeDo.fromTo('#do-text-3',{autoAlpha:0,y:55},{autoAlpha:1,y:0,duration:2},"-=2")
howWeDo.fromTo('#do-icon-3',{'--circle-color':0},{'--circle-color':1,duration:0.02})

howWeDo.fromTo('.do-content',{'--border-width':'60%'},{'--border-width':'80%',duration:2})
howWeDo.fromTo('#do-icon-4',{autoAlpha:0,y:55},{y:0,autoAlpha:1,duration:2},"-=2")
howWeDo.fromTo('#do-text-4',{autoAlpha:0,y:-55},{y:0,autoAlpha:1,y:0,duration:2},"-=2")
howWeDo.fromTo('#do-icon-4',{'--circle-color':0},{'--circle-color':1,duration:0.02})

howWeDo.fromTo('.do-content',{'--border-width':'80%'},{'--border-width':'100%',duration:2})
howWeDo.fromTo('#do-icon-5',{autoAlpha:0,y:-55},{y:0,autoAlpha:1,duration:2},"-=2")
howWeDo.fromTo('#do-text-5',{autoAlpha:0,y:55},{y:0,autoAlpha:1,y:0,duration:2},"-=2")
howWeDo.fromTo('#do-icon-5',{'--circle-color':0},{'--circle-color':1,duration:0.02})

new ScrollMagic.Scene({
    triggerElement: "#howWeDoMaster",
    triggerHook:0.2,
    reverse:false       
    })     
    .setTween(howWeDo)     
    .addTo(controller);
    
   

// how we do it mobile
gsap.to('.how-wedo-line',{'--line-height':'0%',duration:0.001})
let howWeDoSM = gsap.timeline();
//howWeDo.fromTo('.do-content',{autoAlpha:1,duration:0.01})
//howWeDoSM.to('.how-wedo-line',{'--line-height':'0%',duration:0.001})

howWeDoSM.fromTo('.how-wedo-line',{'--line-height':'0%'},{'--line-height':'20%',duration:2})
howWeDoSM.fromTo('#do-sm-icon-1',{autoAlpha:0,opacity:0,x:-55},{autoAlpha:1,opacity:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-text-1',{autoAlpha:0,x:150},{autoAlpha:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-icon-1',{'--circle-sm-opacity':0},{'--circle-sm-opacity':1,duration:0.02})
 

howWeDoSM.fromTo('.how-wedo-line',{'--line-height':'20%'},{'--line-height':'40%',duration:2})
howWeDoSM.fromTo('#do-sm-icon-2',{autoAlpha:0,opacity:0,x:-55},{autoAlpha:1,opacity:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-text-2',{autoAlpha:0,x:150},{autoAlpha:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-icon-2',{'--circle-sm-opacity':0},{'--circle-sm-opacity':1,duration:0.02})


howWeDoSM.fromTo('.how-wedo-line',{'--line-height':'40%'},{'--line-height':'60%',duration:2})
howWeDoSM.fromTo('#do-sm-icon-3',{autoAlpha:0,opacity:0,x:-55},{autoAlpha:1,opacity:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-text-3',{autoAlpha:0,x:150},{autoAlpha:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-icon-3',{'--circle-sm-opacity':0},{'--circle-sm-opacity':1,duration:0.02})


howWeDoSM.fromTo('.how-wedo-line',{'--line-height':'60%'},{'--line-height':'80%',duration:2})
howWeDoSM.fromTo('#do-sm-icon-4',{autoAlpha:0,opacity:0,x:-55},{autoAlpha:1,opacity:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-text-4',{autoAlpha:0,x:150},{autoAlpha:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-icon-4',{'--circle-sm-opacity':0},{'--circle-sm-opacity':1,duration:0.02})


howWeDoSM.fromTo('.how-wedo-line',{'--line-height':'80%'},{'--line-height':'100%',duration:2})
howWeDoSM.fromTo('#do-sm-icon-5',{autoAlpha:0,opacity:0,x:-55},{autoAlpha:1,opacity:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-text-5',{autoAlpha:0,x:150},{autoAlpha:1,x:0,duration:2},"-=2")
howWeDoSM.fromTo('#do-sm-icon-5',{'--circle-sm-opacity':0},{'--circle-sm-opacity':1,duration:0.02})

new ScrollMagic.Scene({
    triggerElement: "#howWeDoSM",
    triggerHook:0.2,
    reverse:false       
    })     
    .setTween(howWeDoSM)     
    .addTo(controller);
    
    // end of init 
});

