
$(document).ready(function () {
  let jobOpenings = document.getElementById('jobOpenings');
  let path = "https://agile-plateau-09650.herokuapp.com/jobopenings";
  let html = '';

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
        return (`<div class="col-md-4 col-12 border box m-2">
        <div class="box-content mx-3">    
        <div class="face front">
                  <div class="front-text">
                    <h5 class="pin1">${data.title}</h5>
                    <p class="m-0 pin"><i class="fas fa-map-marker-alt mr-2"></i>${data.location}</p>
                    <hr >
                    <p class="py-2 text-left" id="description">${formatDescription(data.description)}</p>
                  </div>
        </div>
        <div class="face Back">
                  <div class="Back-text">
                  <h5 class="pin1 text-center mb-5">${data.title}</h5>
                    <a href="./job-details.html?id=${data.id}" class="btn btn-block  btn-info">Read More</a>
                  </div>
        </div>
        </div>
              </div>`)
      }).join('');
    })
    .then(function () {
      jobOpenings.innerHTML = html;
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