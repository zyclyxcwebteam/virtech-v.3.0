
$(document).ready(function () {

     // circle progress
     
     
     /* === INITIAL PAGE LOADING  === */
     
     gsap.to(".page-loading", { duration: 1, top: "-110%", ease: Expo.easeInOut });
     
     /* === END - INITIAL PAGE LOADING  === */
     
     
     /* === QUICK NAVIGATION  === */
     
     $('.quick-navigation ul li a').on('click', function (e) {
          e.preventDefault();
          let targetSection = $(this).attr('href');
          let targetOffset = $(targetSection).offset().top;
          gsap.to(window, { duration: 2, scrollTo: { y: targetOffset }, ease: Power3.easeOut });
     })
     // $('.quick-navigation ul li a .circle').on('mouseenter', function (e) {
     //      e.preventDefault();
     //      gsap.to($(this), { duration: 0.1, height: '30px', width: '30px', backgroundImage: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)' })
     // });
     // $('.quick-navigation ul li a .circle').on('mouseleave', function (e) {
     //      e.preventDefault();
     //      gsap.to($(this), { duration: 0.1, height: '5px', width: '5px', backgroundImage: 'none' })
     // });

     /* === END - QUICK NAVIGATION  === */

     /* === TITLE TEXT ANIMATION === */

     var textWrapper = document.querySelector('.letters');
     textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

     anime.timeline({ loop: false })
          .add({
               targets: '.ml7 .letter',
               translateY: ["1.1em", 0],
               translateX: ["0.55em", 0],
               translateZ: 0,
               rotateZ: [180, 0],
               duration: 750,
               easing: "easeOutExpo",
               delay: function (el, i) {
                    return 2000 + 50 * i;
               }
          });
          
     /* === END - TITLE TEXT ANIMATION === */

     gsap.fromTo(".logo", { x: 350, y: 200, width: '50%' }, { x: 12, y: 15, width: '12%', duration: 2, delay: 1.5 })
     gsap.from(".circle-shape", { xPercent: -70, yPercent: 5, opacity: 0, duration: 2, delay: 1.5 })
     gsap.from('.p1', { duration: 3, delay: 2.2, opacity: 0, y: 20, ease: Expo.easeInOut });
     gsap.from('.p2', { duration: 3, delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut });
     gsap.from('#one', { duration: 3, delay: 2.6, opacity: 0, y: 20, ease: Expo.easeInOut });
});



// scroll animations
const controller = new ScrollMagic.Controller();
var tl = new TimelineLite({ delay: 0.3 }),
     firstBg = document.querySelectorAll('.title-text-bg'),
     word = document.querySelectorAll('.title-text');
tl
     .to(firstBg, 0.4, { scaleX: 1 })
     .to(word, 0.3, { opacity: 1 }, "-=0.1")
     .to(firstBg, 0.4, { scaleX: 0 });

let scene = new ScrollMagic.Scene({ triggerElement: '.title-h1' })
     .setTween(tl)
     .addTo(controller);

//   section wipe animation

// $(function(){
//     const controller = new ScrollMagic.Controller({
//         globalSceneOptions:{
//             triggerHook:'onLeave',
//             duration:"200%"
//         }
//     });     
//     const slides = document.querySelectorAll("section.panel"); 
//     for (let i=0; i<slides.length;i++){
//         new ScrollMagic.Scene({
//             triggerElement:slides[i]
//         })
//         .setPin(slides[i],{pushFollowers:false})
//         .addIndicators()
//         .addTo(controller);
//     }
// });


/* === BUTTON ANIMATION === */
// gsap.to('.btn-one', {duration:2, "--bgColor":"red",backgroundColor:'red'});

// let btn = document.getElementById('btnOne');
// btn.addEventListener('mouseenter',function(){
//      gsap.to('.btn-one',{duration:1,"--bgWidth":"100%"})
//      gsap.to('.btn-one',{duration:0.2,backgroundColor:'#0090a6',delay:1})
// })

// btn.addEventListener('mouseleave',function(){
//      gsap.to('.btn-one',{duration:1,"--bgWidth":"0%",backgroundColor:'#fff'})      
// })


// let btnTwo = document.getElementById('btnTwo');
// btnTwo.addEventListener('mouseenter',function(){      
//      let rule = CSSRulePlugin.getRule(".btn-two::before");
//      gsap.to(rule, {duration: 0.6, cssRule: {width:"100%"}});
//      gsap.to(rule,{duration:0.2,delay:0.6,cssRule:{backgroundColor:'#0090a6'}})
// })

// btnTwo.addEventListener('mouseleave',function(){
//      let rule = CSSRulePlugin.getRule(".btn-two::before");
//      gsap.to(rule, {duration: 0.6, cssRule: {width:"22%",backgroundColor:"#0090a680"}});
// })

 

// SERVICES CARD 
$(".services .service-cards .card").each(borderHover);

function borderHover(i, element) {
  var tl = gsap.timeline({duration:0.2});

  tl.to($(this).find('.service-icon'), {display:'none'});
  tl.to($(this).find('.service-text'),{display:'block'});

  $(element).hover(doIt);

  function doIt() {
     tl.reversed() ? tl.play() : tl.reverse();     
  }
  tl.reverse();
}

// $(".panel-1").hover(function(){
//      gsap.to('.panel-1',{duration:1,right:"80%",left:"-40%"})
// })
// $(".panel-2").hover(function(){
//      gsap.to('.panel-2',{duration:1,right:"60%"})
// })
 
let flexPanels = gsap.timeline({repeat:-1,repeatDelay:1,delay:2,duration:4,yoyo:true,ease: "bounce.out"})
flexPanels.to('.panel-1',{right:"80%",left:"-40%"})
flexPanels.to('.panel-2',{right:"60%",left:"-20%"},"+=2")
//flexPanels.to('.panel-1',{right:"60%",left:"-20%"})
// flexPanels.to('.panel-2',{right:"60%",left:"0%"})