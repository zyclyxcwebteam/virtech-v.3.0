//  fade loading screen
$(window).on('load',function(){
    $('.loading-wrapper').fadeOut();
});



// Splitting();

var circle = new ProgressBar.Circle('#progress', {
  color: '#ffffff4d',
  duration: 19700,
  easing: 'linear'
});

circle.animate(1);

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
     backgroundColor:gsap.utils.interpolate('green','orange',gsap.utils.random(0,1)),
     boxShadow:'inset 0 0 50px #fff,inset 20px 0 80px #f0f,inset -20px 0 80px #0ff,inset 20px 0 300px #f0f,inset -20px 0 300px #0ff,0 0 50px #fff,-10px 0 80px #f0f,10px 0 80px #0ff'
},
{
    duration:5,
    repeat:-1,
    yoyo:true,
    rotate:gsap.utils.interpolate(0,360),
    backgroundColor:gsap.utils.interpolate('white','blue',gsap.utils.random(0,1)),    
    boxShadow:'inset 0 0 50px #fff,inset 20px 0 80px #f0f,inset -20px 0 80px #0ff,inset 20px 0 300px #f0f,inset -20px 0 300px #0ff,0 0 50px #fff,-10px 0 80px #f0f,10px 0 80px #0ff'     
})
    
gsap.fromTo('.char',{opacity: 0, scale: 0.5, y:-50,display:'inline-block'},{stagger:0.08,duration:0.8,scale:1,y:0,opacity:1, ease: "bounce.out" })


// industry card border animation
let border = gsap.timeline({duration:0.01});

// $('.industry').mouseover(function(){
//   border.to('.top-line',{width:'100%',duration:0.2})
//   border.to('.right-line',{height:'100%',duration:0.2})
//   border.to('.bottom-line',{width:'100%',duration:0.2})
//   border.to('.left-line',{height:'100%',duration:0.2})  
// })

//  industry cards
$('.industry').on('mouseenter',function(){
  $('.industry').each(function(){
     $(this).removeClass('active');
  })
  $('.ind-content').each(function(){
    $(this).removeClass('active');
 })
   
 // $('#industry-1').removeClass('active');
  $(this).toggleClass('active')
    let indID = $(this).attr('id');
    let index = $(this).attr('data-index');
  $(`#ind-content-${index}`).addClass('active');
  //gsap.from(`#ind-content-${index}`,{duration:1,opacity:0.5,y:100})     
  border.to(`#${indID} .top-line`,{width:'100%',duration:0.2})
  border.to(`#${indID} .right-line`,{height:'100%',duration:0.2})
  border.to(`#${indID} .bottom-line`,{width:'100%',duration:0.2})
  border.to(`#${indID} .left-line`,{height:'100%',duration:0.2}) 
  gsap.from(`#ind-content-${index}`,{duration:1,opacity:0.5,y:100}) 
})
$('.industry').on('mouseleave',function(){
  let indID = $(this).attr('id');
  let index = $(this).attr('data-index');
  //$(this).toggleClass('active')
  //$(`#ind-content-${index}`).css('display','none')  
  border.to(`#${indID} .left-line`,{height:'0%',duration:0.1})
  border.to(`#${indID} .bottom-line`,{width:'0%',duration:0.1})
  border.to(`#${indID} .right-line`,{height:'0%',duration:0.1})
  border.to(`#${indID} .top-line`,{width:'0%',duration:0.1})  
})
$('')
// services

var controller = new ScrollMagic.Controller();
var services = document.querySelectorAll(".panel");
var service = gsap.timeline();
// var offset = window.innerHeight;

for (let i = 1; i < services.length; i++) {
  // service.from('.services',{duration:2,backgroundColor:'#eee',height:'0%'})
  service.from(services[i],{ yPercent:100, ease: "none",duration:3});
}

new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration:"500%"
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
