$(document).ready(function() {
  let jobOpeningsCount = document.getElementById("openingsCount");
  let path = "https://agile-plateau-09650.herokuapp.com/jobopenings";
  let html = "";
  let content = [];

  fetch(path)
    .then(response => {
      return response.json();
    })
    .then(function(data) {
      console.log(data.length);
      jobOpeningsCount.innerHTML = `${data.length}`;

      html += data
        .map(function(data) {
          return `        
        <div class="card mx-3 p-0 py-3 career-card">
        <div class="card-body py-5">
        <div class="career-text">
          <h5 class="card-title text-center">${data.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">${data.location}</h6>
        </div>
          <a href="./job-details.html?id=${data.id}" class="button button-blue career-btn">Apply Now</a>           
        </div>
      </div>
        `;
        })
        .join("");
    })
    .then(function() {
      $("#owlCareers").html(html);

      $("#owlCareers").owlCarousel({
        autoplay: true,
        loop: true,
        center: true,
        autoplaySpeed: 3000,
        dots: false,
        nav: true,
        autoplayHoverPause: true,
        transitionStyle: "fade",
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          900: { items: 3 }
        }
      });
    });
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
