(function() {
    'use strict';
    window.addEventListener('load', function() {       
      var forms = document.getElementsByClassName('needs-validation');       
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

   
(function(){
  /* UPDATE JOB DESCRIPTION PAGE CONTENT */ 
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id');
  let title = '';
  console.log(id)
  let responsibilitiesElement = document.getElementById('responsibilities');
   
  let jobtitle=document.getElementById('jobtitle');
  let description=document.getElementById('description');
  let minqualifications=document.getElementById('qualifications');
  let location=document.getElementById('location');
   
  
  fetch(`https://agile-plateau-09650.herokuapp.com/jobopenings/${id}`) 
  .then(function(response){
    return response.json();
  })
  .then(function(data){
  let qualifyhtml='';
  if(data.requirements){
    for(let qalify in data.requirements){
      qualifyhtml +=`<li>
      <span class="list-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="50" height="15"
      viewBox="0 0 172 172"
      style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M132.58333,86c0,25.8 -20.78333,46.58333 -46.58333,46.58333c-25.8,0 -46.58333,-20.78333 -46.58333,-46.58333c0,-25.8 20.78333,-46.58333 46.58333,-46.58333c25.8,0 46.58333,20.78333 46.58333,46.58333z" fill="#0c1b33"></path><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667zM86,28.66667c-31.53333,0 -57.33333,25.8 -57.33333,57.33333c0,31.53333 25.8,57.33333 57.33333,57.33333c31.53333,0 57.33333,-25.8 57.33333,-57.33333c0,-31.53333 -25.8,-57.33333 -57.33333,-57.33333z" fill="#03bed5"></path></g></g></svg></span>
      <p>${data.requirements[qalify]}</p>
      </li>`
    }
  }
  minqualifications.innerHTML = qualifyhtml;
  
  //job description 
    description.textContent=data.description;
   jobtitle.textContent= data.title;
  title - data.title;
    // responsibilities
   let resHtml = ''
   if(data.requirements){
    for(let res in data.requirements){     
      resHtml +=`<li>
      <span class="list-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="50" height="15"
      viewBox="0 0 172 172"
      style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M132.58333,86c0,25.8 -20.78333,46.58333 -46.58333,46.58333c-25.8,0 -46.58333,-20.78333 -46.58333,-46.58333c0,-25.8 20.78333,-46.58333 46.58333,-46.58333c25.8,0 46.58333,20.78333 46.58333,46.58333z" fill="#0c1b33"></path><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667zM86,28.66667c-31.53333,0 -57.33333,25.8 -57.33333,57.33333c0,31.53333 25.8,57.33333 57.33333,57.33333c31.53333,0 57.33333,-25.8 57.33333,-57.33333c0,-31.53333 -25.8,-57.33333 -57.33333,-57.33333z" fill="#03bed5"></path></g></g></svg></span>
      <p>${data.requirements[res]}</p>
    </li>`
    }
   }    
    responsibilitiesElement.innerHTML = resHtml;
  
  //job details
  //location.textContent=data.location; 
  })
})();