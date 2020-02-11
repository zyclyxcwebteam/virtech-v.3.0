
let contactButton = document.getElementById('contactButton');
let contactLink = document.getElementById('contactLink');
let contactClose = document.getElementById('contactClose');
 
contactLink.addEventListener('click',function(event){
  event.preventDefault();
  gsap.to('.contact-wrapper',{display:'block',height:'100vh',duration:0.5})    
})

contactButton.addEventListener('click',function(event){
event.preventDefault();
gsap.to('.contact-wrapper',{display:'block',height:'100vh',duration:0.5})    
})

contactClose.addEventListener('click',function(event){
event.preventDefault();
gsap.to('#contactModal',{display:'none',height:'0px',duration:0.5})
})
