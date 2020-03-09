// validations

(function() {
  let contactButton = document.getElementById("contactButton");
  let contactLink = document.getElementById("contactLink");
  let contactClose = document.getElementById("contactClose");
  let form = document.getElementById("contactForm");

  function contactFormShow() {
    gsap.to(".contact-wrapper", {
      display: "flex",
      minHeight: "100%",
      top: "20px",
      bottom: "unset",
      duration: 0.5
    });
  }

  function contactFormHide() {
    form.reset();
    form.classList.remove("was-validated");
    document.getElementById("formStatus").classList.remove("show");
    gsap.to(".contact-wrapper", {
      display: "none",
      bottom: "0",
      top: "110%",
      minHeight: "0px",
      duration: 0.5
    });
  }

  // window.addEventListener('load', function() {

  //   let contactForm = document.getElementById('contactForm');

  //   var validation = Array.prototype.filter.call(forms, function(form) {
  //     form.addEventListener('submit', function(event) {
  //       if (form.checkValidity() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
  //       form.classList.add('was-validated');
  //     }, false);
  //   });
  // }, false);

  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    contactFormShow();
  });

  contactButton.addEventListener("click", function(event) {
    event.preventDefault();
    contactFormShow();
  });

  contactClose.addEventListener("click", function(event) {
    event.preventDefault();
    contactFormHide();
  });

  // TODO -  form validations

  form.addEventListener(
    "submit",
    function(event) {
      event.preventDefault();
      form.classList.add("was-validated");
      //   disable send message button
      document.getElementById("contactSubmit").setAttribute("disabled", true);
      document.getElementById(
        "contactSubmit"
      ).innerHTML = `<span>Please Wait .. <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span></span>`;

      // if any errors enable send message button to re-send form data
      if (!form.checkValidity()) {
        document.getElementById("contactSubmit").removeAttribute("disabled");
        document.getElementById("contactSubmit").innerHTML = `Submit`;
      }

      // if no errors send form data to the API
      if (form.checkValidity()) {
        let formData = new FormData(form);
        data = {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message")
        };
        fetch("https://agile-plateau-09650.herokuapp.com/enquirymessages", {
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(function(response) {
            document
              .getElementById("contactSubmit")
              .setAttribute("disabled", true);
            document.getElementById(
              "contactSubmit"
            ).innerHTML = `<span>Please Wait .. </span><span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span></span>`;
            return response.json();
          })
          .then(function(jsondata) {
            form.reset();
            form.classList.remove("was-validated");
            document.getElementById("formStatus").classList.add("show");
            document
              .getElementById("contactSubmit")
              .removeAttribute("disabled");
            document.getElementById("contactSubmit").innerHTML = `Submit`;
          })
          .catch(function(error) {
            console.log(error);
            // document.getElementById("errorAlert").textContent =
            //   "Something went wrong! Please try again";
            document
              .getElementById("contactSubmit")
              .removeAttribute("disabled");
            document.getElementById("contactSubmit").innerHTML = `Submit`;
          });
      }
    },
    false
  );
})();
