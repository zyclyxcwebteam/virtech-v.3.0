// validations

(function() {

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

let contactButton = document.getElementById('contactButton');
let contactLink = document.getElementById('contactLink');
let contactClose = document.getElementById('contactClose');
 
contactLink.addEventListener('click',function(event){
  event.preventDefault();
  gsap.to('.contact-wrapper',{display:'block',minHeight:'100vh',duration:0.5})    
})

contactButton.addEventListener('click',function(event){
event.preventDefault();
gsap.to('.contact-wrapper',{display:'block',minHeight:'100vh',duration:0.5})    
})


contactClose.addEventListener('click',function(event){
  event.preventDefault();
  gsap.to('.contact-wrapper',{display:'none',minHeight:'0px',duration:0.5})
  })

})();