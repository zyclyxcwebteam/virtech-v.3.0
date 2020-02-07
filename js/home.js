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
homeTitles.to('.home-shape',{duration:2,x:-60})

homeTitles.fromTo('.title-1',{display:'none',opacity:0,y:100,x:180},{y:0,x:180,opacity:1,display:'block',duration:2})
homeTitles.to('.title-1',{y:-1000,display:'none',opacity:0,duration:0.8,delay:2.5})

homeTitles.fromTo('.title-2',{display:'none',opacity:0,y:100,x:180},{y:0,x:180,opacity:1,display:'block',duration:2})
homeTitles.to('.title-2',{y:-1000,display:'none',opacity:0,duration:0.8,delay:2.5})


homeTitles.fromTo('.title-3',{display:'none',opacity:0,y:100,x:180},{y:0,x:180,opacity:1,display:'block',duration:2})
homeTitles.to('.title-3',{y:-1000,display:'none',opacity:0,duration:0.8,delay:2.5})


homeTitles.fromTo('.title-4',{display:'none',opacity:0,y:100,x:180},{y:0,x:180,opacity:1,display:'block',duration:2})
homeTitles.to('.title-4',{y:-1000,display:'none',opacity:0,duration:0.8,delay:2.5})
    
// gsap.fromTo('.char',{opacity: 0, scale: 0.5, y:-50,display:'inline-block'},{stagger:0.08,duration:0.8,scale:1,y:0,opacity:1, ease: "bounce.out" })


// industry card border animation
let border = gsap.timeline({duration:0.01});
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
  // border.to(`#${indID} .top-line`,{width:'100%',duration:0.2})
  // border.to(`#${indID} .right-line`,{height:'100%',duration:0.2})
  // border.to(`#${indID} .bottom-line`,{width:'100%',duration:0.2})
  // border.to(`#${indID} .left-line`,{height:'100%',duration:0.2}) 
  gsap.from(`#ind-content-${index}`,{duration:1,opacity:0.5,y:100}) 
})
$('.industry').on('mouseleave',function(){
  let indID = $(this).attr('id');
  let index = $(this).attr('data-index');
  //$(this).toggleClass('active')
  //$(`#ind-content-${index}`).css('display','none')  
  // border.to(`#${indID} .left-line`,{height:'0%',duration:0.1})
  // border.to(`#${indID} .bottom-line`,{width:'0%',duration:0.1})
  // border.to(`#${indID} .right-line`,{height:'0%',duration:0.1})
  // border.to(`#${indID} .top-line`,{width:'0%',duration:0.1})  
})
 


$("#industryOuter .card").each(createIndHover);
function createIndHover(i, element) {
  let border = gsap.timeline({duration:0.2});      
  border.to($(this).find('.top-line'),{width:'100%',duration:0.2})
  border.to($(this).find('.right-line'),{height:'100%',duration:0.2})
  border.to($(this).find('.bottom-line'),{width:'100%',duration:0.2})
  border.to($(this).find('.left-line'),{height:'100%',duration:0.2})   
  $(element).hover(doIt);  
  function doIt() {
     border.reversed() ? border.play() : border.reverse();     
  }
  border.reverse();
}
