// ! Home page - Industries section
$(function(){
    // ! scroll magic controller
    let controller = new ScrollMagic.Controller();
    
    let industriesAnimation = gsap.timeline()
    .to('#industryMaster #industryInner',{display:'none',duration:0.01})    
    .fromTo("#industryMaster .bg-title-dark", { fontSize:'5rem'},{fontSize:'2.5rem',duration: 1 })
    .fromTo('#industryMaster #industryInner',{opacity:0.8,y:50,display:'none'},{opacity:1,y:0,display:'block',duration:1})     


    new ScrollMagic.Scene({
        triggerElement: "#industryMaster",
        triggerHook:0.5,
        reverse:false,
                                  
    })
      //   .setPin("#industryInner")
        .setTween(industriesAnimation)        
        .addTo(controller);
// ! Industry Card hover 
 
$('.industry').on('mouseenter',function(){
  $('.industry').each(function(){
     $(this).removeClass('active');
  })
  $('.ind-content').each(function(){
    $(this).removeClass('active');
 })

  $(this).toggleClass('active')
    let indID = $(this).attr('id');
    let index = $(this).attr('data-index');
  $(`#ind-content-${index}`).addClass('active');
   gsap.from(`#ind-content-${index}`,{duration:1,opacity:0.5,y:100}) 
})
 
$("#industryInner .card").each(createIndHover);
 function createIndHover(i, element) {
  let border = gsap.timeline({duration:0.2});      
  border.to($(this).find('.top-line'),{width:'98.2%',right:0,duration:0.2})
  border.to($(this).find('.right-line'),{height:'98.2%',duration:0.2})
  border.to($(this).find('.bottom-line'),{width:'98.2%',duration:0.2})
  border.to($(this).find('.left-line'),{height:'98.2%',duration:0.2})   
  $(element).hover(doIt);  
  function doIt() {
     border.reversed() ? border.play() : border.reverse();     
  }
  border.reverse();
}


    })
