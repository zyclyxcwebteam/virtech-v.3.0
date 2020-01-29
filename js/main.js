
$(document).ready(function () {
     
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
     $('.quick-navigation ul li a .circle').on('mouseenter', function (e) {
          e.preventDefault();
          gsap.to($(this), { duration: 0.1, height: '30px', width: '30px', backgroundImage: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)' })
     });
     $('.quick-navigation ul li a .circle').on('mouseleave', function (e) {
          e.preventDefault();
          gsap.to($(this), { duration: 0.1, height: '5px', width: '5px', backgroundImage: 'none' })
     });

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
