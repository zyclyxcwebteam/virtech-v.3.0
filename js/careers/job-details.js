(function() {
    'use strict';
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

          const formdata = new FormData(document.getElementById('jobForm'));
   
          fetch('http://localhost:3000/application-form',{
            method:'post',
            body:formdata
          }).then(function(response){
             
             return response.text();
          }).then(function(text){
            console.log(text+"text is");
          }).catch(function (error){
            console.log(error);
          })

        }, false);
      });
    }, false);
  })();

  
   