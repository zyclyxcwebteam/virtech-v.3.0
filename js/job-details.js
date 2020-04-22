(function() {

   /* UPDATE JOB DESCRIPTION PAGE CONTENT */ 
   let urlParams = new URLSearchParams(window.location.search);
   let id = urlParams.get('id');
   let title = '';  
   let responsibilitiesElement = document.getElementById('responsibilities');
    
   let jobtitle=document.getElementById('jobtitle');
   let jobTitleMmobile = document.getElementById('jobtitle-mobile');
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
    jobTitleMmobile.textContent = data.title;
   title - data.title;
     // responsibilities
    let resHtml = ''
    if(data.responsibilities){
     for(let res in data.responsibilities){     
       resHtml +=`<li>
       <i class="fas fa-angle-double-right"></i>
       <p>${data.responsibilities[res]}</p>
     </li>`
     }
    }    
     responsibilitiesElement.innerHTML = resHtml;
   
   //job details
   //location.textContent=data.location; 
   })

    //   International telephone country code
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        $.get('https://freegeoip.app/json/', function () { }, "jsonp").always(function (resp) {
          var countryCode = (resp && resp.country_code) ? resp.country_code : "";
          callback(countryCode);
        });
      },
      utilsScript: "./js/utils.js"
    });


  // Application form
   let jobApplicationForm= document.getElementById("jobApplication"); 

  jobApplicationForm.addEventListener("submit",function(event){
    event.preventDefault();
    jobApplicationForm.classList.add('was-validated');
      
    // if no errors send form data to the API
      if (jobApplicationForm.checkValidity()) {             
          let formData = new FormData(jobApplicationForm); 
          let data ={
            firstname:formData.get('firstname'),
            lastname:formData.get('lastname'),
            email:formData.get('email'),
            phone:formData.get('phone'),
            message:formData.get('message'),             
            position:title
          }  
          
          // console.log(data);
          fetch('https://agile-plateau-09650.herokuapp.com/jobapplications', {
              method: 'post',
              headers: {
                  "Content-type": "application/json"
              },
              body:JSON.stringify(data)
          })
              .then(function (response) {
                  document.getElementById("submitApplicationButton").setAttribute("disabled",true);
                  document.getElementById("submitApplicationButton").innerHTML = `<span>Please Wait .. <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span></span>`;
                  return response.json();
              })                 
              .then(function (jsondata) {                            
                // $('#JobApplicationModal').modal('show');
                console.log(jsondata)
                 document.getElementById("submitApplicationButton").innerHTML =`Submit Application <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 172 172"><g fill="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M170.643.752a3.389 3.389 0 00-3.709-.309L1.814 89.883a3.381 3.381 0 00-1.76 3.306 3.388 3.388 0 002.324 2.93l46.938 15.318-4.542 46.467a3.378 3.378 0 002.029 3.454c.43.201.9.295 1.357.295.954 0 1.895-.403 2.553-1.155l29.603-33.446 44.572 43.94c.645.632 1.505.981 2.392.981.31 0 .618-.054.927-.134a3.395 3.395 0 002.379-2.446l41.28-165.12a3.4 3.4 0 00-1.223-3.52zM56.223 110.806l67.12-54.274-45.741 63.33-25.034 28.26z" fill="#fff"/></g></svg>`;                 
                 document.getElementById("submitApplicationButton").removeAttribute("disabled");
                 jobApplicationForm.reset();
                 jobApplicationForm.classList.remove('was-validated'); 

              })
              .catch(function (error) {
                  document.getElementById("errorAlert").textContent = "Something went wrong! Please try again"
              })
       }
  }, false)
})();
   
 