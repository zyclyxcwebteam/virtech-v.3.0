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
  // let description=document.getElementById('description');
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
       <i class="fas fa-angle-double-right"></i>
      <p>${data.requirements[qalify]}</p>
      </li>`
    }
  }
  minqualifications.innerHTML = qualifyhtml;
  
  //job description 
   // description.textContent=data.description;
   jobtitle.textContent= data.title;
  title - data.title;
    // responsibilities
   let resHtml = ''
   if(data.requirements){
    for(let res in data.requirements){     
      resHtml +=`<li>
      <i class="fas fa-angle-double-right"></i>
      <p>${data.requirements[res]}</p>
    </li>`
    }
   }    
    responsibilitiesElement.innerHTML = resHtml;
  
  //job details
  //location.textContent=data.location; 
  })
})();