$(document).ready(function () { 
// ! Home loading animation
let homePageLoad = gsap.timeline({onComplete:startTitleCarousel})
homePageLoad.to('.home-inner',{opacity:0,duration:0.1}) 
homePageLoad.from('#masterLogo',{x:430,y:350,maxWidth:'500px',duration:4,delay:1,ease:Expo.easeInOut})
homePageLoad.fromTo('#masterNavbar',{y:-110 },{y:0,duration:2.3,ease:Expo.easeInOut},"-=3")
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
})