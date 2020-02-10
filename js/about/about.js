gsap.registerPlugin(CSSRulePlugin);
$(function(){
let borderLine = CSSRulePlugin.getRule('.do-content:after'); 
console.log(borderLine)    
let controller = new ScrollMagic.Controller();
let howWeDo = gsap.timeline();

howWeDo.fromTo('.do-content',{'--border-width':'0%'},{'--border-width':'100%',duration:12})
howWeDo.fromTo('.do-icon',{y:60,opacity:0,'--border-width':'0%'},{stagger:2,y:0,opacity:1,'--border-width':'100%',duration:1},"-=12")
 
new ScrollMagic.Scene({
    triggerElement: "#howWeDoMaster",
    triggerHook:"onEnter",                      
    })     
    .setTween(howWeDo)
    .addIndicators()
    .addTo(controller);     

    
})