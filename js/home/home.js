$(document).ready(function () { 

// our clients/partners
$(".clients-carousel").owlCarousel({
    autoplay: true,     
    loop: true,
    center: true,
    autoplaySpeed: 2000,
    dots:false,
    responsive: {
      0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 }
    }
  });

  // ! Home loading animation
let homePageLoad = gsap.timeline({onComplete:startTitleCarousel})
homePageLoad.to('.home-inner',{opacity:0,duration:0.01})
homePageLoad.fromTo('#masterNavbar',{opacity:1 },{opacity:0,duration:0.01,ease:Expo.easeInOut})
homePageLoad.fromTo('#page-loader img',{maxWidth:'50%'},{maxWidth:'170px',left:'10%',top:'6%',duration:2,delay:1})  
homePageLoad.fromTo('#masterNavbar',{opacity:0 },{y:0,opacity:1,duration:0.01,ease:Expo.easeInOut})
homePageLoad.to('#masterLogo',{opacity:1,duration:0.001}) 
homePageLoad.to('.home-inner',{opacity:1,duration:0.1})
homePageLoad.to("#page-loader", { duration: 1, top: "-110%", ease: Expo.easeInOut })

// ! Home Titles carousel
function startTitleCarousel(){
    let homeTitleCarousel = gsap.timeline({repeat:-1});
    homeTitleCarousel.fromTo('#title-1',{display:'none',opacity:0.7,y:80,x:150},{display:'block',opacity:1,x:150,y:0,duration:2})
    homeTitleCarousel.to('#title-1',{y:-700,display:'none',opacity:0,duration:1,delay:5})
    
    homeTitleCarousel.fromTo('#title-2',{display:'none',opacity:0.7,x:150,y:80},{display:'block',opacity:1,x:150,y:0,duration:2})
    homeTitleCarousel.to('#title-2',{y:-700,display:'none',opacity:0,duration:1,delay:5})
    
    homeTitleCarousel.fromTo('#title-3',{display:'none',opacity:0.7,x:150,y:80},{display:'block',opacity:1,x:150,y:0,duration:2})
    homeTitleCarousel.to('#title-3',{y:-700,display:'none',opacity:0,duration:1,delay:5})
    
    homeTitleCarousel.fromTo('#title-4',{display:'none',opacity:0.7,x:150,y:80},{display:'block',opacity:1,x:150,y:0,duration:2})
    homeTitleCarousel.to('#title-4',{y:-700,display:'none',opacity:0,duration:1,delay:5}) 
    
} 

//  side navigation links
let controller = new ScrollMagic.Controller();
controller.scrollTo(function (newpos) {
    TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power4.easeInOut});
});


$(document).on("click", ".side-nav a[href^='#']", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
        e.preventDefault();
 
        // trigger scroll
        controller.scrollTo(id);
 
        // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }
});

let contactButton = document.getElementById('contactButton');
let contactLink = document.getElementById('contactLink');
let pocButton = document.getElementById('pocContact');
let contactClose = document.getElementById('contactClose');
 
contactLink.addEventListener('click',function(event){
  event.preventDefault();
  gsap.to('.contact-wrapper',{display:'block',height:'100vh',duration:0.5})    
})

contactButton.addEventListener('click',function(event){
event.preventDefault();
gsap.to('.contact-wrapper',{display:'block',height:'100vh',duration:0.5})    
})


pocButton.addEventListener('click',function(event){
    event.preventDefault();
    gsap.to('.contact-wrapper',{display:'block',height:'100vh',duration:0.5})    
    })

contactClose.addEventListener('click',function(event){
event.preventDefault();
gsap.to('#contactModal',{display:'none',height:'0px',duration:0.5})
})

})