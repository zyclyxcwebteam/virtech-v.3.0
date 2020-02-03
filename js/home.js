//  fade loading screen
$(window).on('load',function(){
    $('.loading-wrapper').fadeOut();
});

Splitting();



let homeTitles = gsap.timeline({repeat:-1});

homeTitles.fromTo('.title-1',{display:'none',opacity:0,y:100},{y:0,opacity:1,display:'block',duration:2})
homeTitles.to('.title-1',{y:-1000,display:'none',opacity:0,duration:0.8,delay:2.5})

homeTitles.fromTo('.title-2',{display:'none',opacity:0,y:100},{y:0,opacity:1,display:'block',duration:2})
homeTitles.to('.title-2',{y:-1000,display:'none',opacity:0,duration:0.8,delay:2.5})


homeTitles.fromTo('.title-3',{display:'none',opacity:0,y:100},{y:0,opacity:1,display:'block',duration:2})
homeTitles.to('.title-3',{y:-1000,display:'none',opacity:0,duration:0.8,delay:2.5})


homeTitles.fromTo('.title-4',{display:'none',opacity:0,y:100},{y:0,opacity:1,display:'block',duration:2})
homeTitles.to('.title-4',{y:-1000,display:'none',opacity:0,duration:0.8,delay:2.5})

// let homeShape = gsap.timeline({repeat:-1}); 
 gsap.fromTo('#shape-1',{
     backgroundColor:gsap.utils.interpolate('white','orange',gsap.utils.random(0,1)),
     boxShadow:'inset 0 0 50px #fff,inset 20px 0 80px #f0f,inset -20px 0 80px #0ff,inset 20px 0 300px #f0f,inset -20px 0 300px #0ff,0 0 50px #fff,-10px 0 80px #f0f,10px 0 80px #0ff'
},
{
    duration:5,
    repeat:-1,
    yoyo:true,
    rotate:gsap.utils.interpolate(0,360),
    backgroundColor:gsap.utils.interpolate('green','blue',gsap.utils.random(0,1)),    
    boxShadow:'inset 0 0 50px #fff,inset 20px 0 80px #f0f,inset -20px 0 80px #0ff,inset 20px 0 300px #f0f,inset -20px 0 300px #0ff,0 0 50px #fff,-10px 0 80px #f0f,10px 0 80px #0ff'     
})
    
gsap.fromTo('.char',{opacity: 0, scale: 0.5, y:-50,display:'inline-block'},{stagger:0.08,duration:0.8,scale:1,y:0,opacity:1, ease: "bounce.out" })


// services

var controller = new ScrollMagic.Controller();
var sections = document.querySelectorAll(".panel");
var service = gsap.timeline();
var offset = window.innerHeight;

for (let i = 1; i < sections.length; i++) {
  service.from(sections[i], 2, { xPercent:100,opacity:0, ease: "slow(0.7, 0.7, false)"}, "+=1");
}

new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration:"400%"
})
  .setPin("#pinMaster")
  .setTween(service)   
  .addTo(controller);

// $("section").each(function(i) {
//   let target1 = $(this).find("h1");
//   let split = new SplitText(target1, { type: "chars" });
//   var tl = new TimelineMax();
//   tl.staggerFrom(
//     split.chars,
//     0.5,
//     { opacity: 0, scale: 0.5, y: -100, ease: Bounce.easeOut },
//     0.05
//   );

//   new ScrollMagic.Scene({
//     triggerElement: "#pinMaster",
//     triggerHook: 0,
//     offset: i * offset
//   })
//     .setTween(tl)
//     .addTo(controller)
//     .addIndicators({
//       colorTrigger: "white",
//       colorStart: "white",
//       colorEnd: "white",
//       indent: 40
//     });
// });
