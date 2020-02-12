
$(document).ready(function() {
    let jobOpenings = document.getElementById('jobOpenings');
    let path = "https://agile-plateau-09650.herokuapp.com/jobopenings";
    let html = '';

    fetch(path)
        .then(response => {
            return response.json();
        })
        .then(function(data){
            console.log(data)
            html += data.map(function(data){
                return (`<div class="box">
                <div class="face front">
                  <div class="front-text">
                    <h5 class="pin1">${data.title}</h5>
                    <p class="m-0 pin"><i class="fas fa-map-marker-alt mr-2"></i>${data.location}</p>
                    <hr>
                    <p class="py-2">${data.title}</p>
                  </div>
                </div>
                <div class="face Back">
                  <div class="Back-text">
                  <h5 class="pin1 text-center mb-5">${data.title}</h5>
                    <a href="./job-details.html" class="btn btn-block  btn-info">Read More</a>
                  </div>
                </div>
              </div>`)
            }).join('');
        })
        .then(function(){
            jobOpenings.innerHTML = html;
        })
});