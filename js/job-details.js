(function() {   
   /* UPDATE JOB DESCRIPTION PAGE CONTENT */ 
   let urlParams = new URLSearchParams(window.location.search);
   let id = urlParams.get('id');
   let responsibilities = document.getElementById('responsibilities');
   let jobTitle=document.getElementById('jobtitle');   
   let qualifications=document.getElementById('qualifications');    
   let title = null;   
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
   qualifications.innerHTML = qualifyhtml;
   
   //job description 
    // description.textContent=data.description;
    jobTitle.textContent= data.title;
    title=data.title;
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
     responsibilities.innerHTML = resHtml; 
   })

    //   International telephone country code
    var input = document.querySelector("#jobPhone");
 
  
  var iti =  window.intlTelInput(input, {
      initialCountry: "auto",
      separateDialCode:true,
      geoIpLookup: function (callback) {
        $.get('https://ipinfo.io/json', function () { }, "jsonp").always(function (resp) {         
         let countryCode = (resp && resp.countryCode) ? resp.countryCode : "";
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
  
   const fileField = document.querySelector('input[type="file"]');
   const firstName = document.querySelector('#firstname').value;
   const lastName = document.querySelector('#lastname').value;
   const email = document.querySelector('#email').value;
   const phone = document.querySelector('#jobPhone').value;
   const message = document.querySelector('#message').value;
   const countryCode = iti.getSelectedCountryData().dialCode
   
   let data = {
    firstname:firstName,
    lastname:lastName,
    email:email,
    phone:phone,
    subject:message,
    position:title,
    website:'virtech',
    country_code:countryCode,
    date: new Date()
  }

  const formData = new FormData();
   formData.append('firstname',firstName);
   formData.append('lastname',lastName);
   formData.append('email',email);
   formData.append('phone',phone);
   formData.append('message',message);
   formData.append('role',title);
   formData.append('resume', fileField.files[0]);
   formData.append('website','virtech');
   formData.append('countryCode',countryCode); 


    // send form data over email 
    fetch('https://zyclyx-email-sender.herokuapp.com/application-form',{
              method: 'post', 
              body:formData
          })
              .then(function (response) {
                  
                  return response.json();
              })                 
              .then(function (jsondata) {                                        
                console.log(jsondata)                
              })
              .catch(function (error) {
                  console.log(error);
              })

         // store form data in db
              fetch('https://zyclyx-backend-api.herokuapp.com/job-applications/',{
                method: 'post', 
                body:JSON.stringify(data)
            })
                .then(function (response) {
                    
                    return response.json();
                })                 
                .then(function (jsondata) {                                        
                // upload file
                  let fileData = new FormData();
                  fileData.append('files', fileField.files[0]);
                  fileData.append('refId',jsondata.id);
                  fileData.append('field','resume');
                  fileData.append('ref','job-applications');

                  fetch('https://zyclyx-backend-api.herokuapp.com/upload/',{
                method: 'post', 
                body:fileData
            })
            .then(function(res){
              return res;
            })
            .then(function(data){  
              jobApplicationForm.reset();
              jobApplicationForm.classList.remove("was-validated"); 
            })
                })
                .catch(function (error) {
                    console.log(error);
                })           
       }
  }, false)
})();
   
 