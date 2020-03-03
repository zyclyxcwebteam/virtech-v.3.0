
$(document).ready(function () {
  let jobOpenings = document.getElementById('jobOpenings');
  let path = "https://agile-plateau-09650.herokuapp.com/jobopenings";
  //let html = '<div class="owl-carousel careers-carousel d-flex justify-content-center align-items-center">';
  let html = '';
  let content=[];

function formatDescription(description){
        let maxLength = 200;         
        if (description.length > maxLength) {
          return description.substr(0, maxLength) + '...<br> <a href="#">( Read More )</a>';
        }
        else {
          return description;
        }

}

  fetch(path)
    .then(response => {
      return response.json();
    })
    .then(function (data) {       
      console.log(data)
      


      html += data.map(function (data) { 
        //content.push({title:data.title,location:data.location,id:data.id});  
        return (`        
        <div class="card mx-2 p-0 career-card">
        <div class="card-body py-5">
          <h5 class="card-title text-center">${data.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">${data.location}</h6>
          <p class="card-text m-0"></p>
          <a href="./job-details.html?id=${data.id}" class="card-link">Know More</a>           
        </div>
      </div>
        `)
      }).join('');
    })
    .then(function () {

      $("#owl-demo").html(html)
      console.log(JSON.stringify(content))

      $("#owl-demo").owlCarousel({
        autoplay: true,     
    loop: true,
    center: true,
    autoplaySpeed: 2000,
    dots:false,
    transitionStyle : "fade",
    responsive: {
      0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 }
    }
      });
      
    })
});


// $('#description').html(function (index, currentText) {
//   console.log(currentText)
//   var maxLength = $(this).attr('data-maxLength');
//   if (currentText >= maxLength) {
//     return currentText.substr(0, maxLength) + '...';
//   }
//   else {
//     return currentText;
//   }
// })