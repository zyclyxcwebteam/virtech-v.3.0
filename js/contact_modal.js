// validations

(function () {
  let contactButton = document.getElementById("contactButton");
  let contactLink = document.getElementById("contactLink");
  let contactClose = document.getElementById("contactClose");
  let pocContactButton = document.getElementById("pocContact");
  let form = document.getElementById("contactForm");

  // get country code and store it in localstorage
  if (!localStorage.getItem("countryCode")) {
    $.get("https://ipinfo.io/json", function () {}, "jsonp").always(function (
      resp
    ) {
      let countryCode = resp && resp.country ? resp.country : "";
      localStorage.setItem("countryCode", countryCode);
    });
  }
  // phone number label float to top on typing
  let input = document.querySelector("#phone");

  input.addEventListener("keyup", function () {
    if (input.value.length === 1) {
      document.getElementById("phoneLabel").classList.add("show-label");
    }
    if (input.value === "") {
      document.getElementById("phoneLabel").classList.remove("show-label");
    }
    if ($("#phone").is(":invalid")) {
      $("#phoneInvalid").css({ opacity: "1", display: "block" });
    } else {
      $("#phoneInvalid").css({ opacity: "0", display: "block" });
    }
  });

  input.addEventListener("blur", function () {
    if (input.value === "") {
      document.getElementById("phoneLabel").classList.remove("show-label");
    }
  });
  var contactCountryCode = window.intlTelInput(input, {
    initialCountry: "auto",
    separateDialCode: true,

    geoIpLookup: function (callback) {
      callback(localStorage.getItem("countryCode"));
    },
    utilsScript: "./js/utils.js",
  });

  function contactFormShow() {
    gsap.to(".contact-wrapper", {
      display: "flex",
      minHeight: "100%",
      top: "60px",
      bottom: "unset",
      duration: 0.5,
      ease: "power4.out",
    });
  }

  function contactFormHide() {
    form.reset();
    form.classList.remove("was-validated");
    $("#phoneInvalid").css({ opacity: "0" });
    document.getElementById("formStatus").classList.remove("show");
    document.getElementById("phoneLabel").classList.remove("show-label");
    gsap.to(".contact-wrapper", {
      display: "none",
      bottom: "0",
      top: "110%",
      minHeight: "0%",
      duration: 0.5,
      ease: "power4.out",
    });
  }
  contactLink &&
    contactLink.addEventListener("click", function (event) {
      event.preventDefault();
      contactFormShow();
    });

  contactButton &&
    contactButton.addEventListener("click", function (event) {
      event.preventDefault();
      contactFormShow();
    });

  pocContactButton &&
    pocContactButton.addEventListener("click", function (event) {
      event.preventDefault();
      contactFormShow();
    });
  contactClose &&
    contactClose.addEventListener("click", function (event) {
      event.preventDefault();
      contactFormHide();
    });

  // TODO -  form validations

  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      form.classList.add("was-validated");
      // Show phone number error message on invalid
      if ($("#phone").is(":invalid")) {
        $("#phoneInvalid").css({ opacity: "1", display: "block" });
      }
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
        let fullname = document.querySelector("#username").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let message = document.querySelector("#message").value;
        let date = new Date();
        let website = "virtech";
        let contactCountry = contactCountryCode.getSelectedCountryData()
          .dialCode;

        data = {
          fullname: fullname,
          email: email,
          phone: phone,
          date: date,
          message: message,
          countryCode: contactCountry,
          website: website,
        };

        fetch("https://zyclyx-backend-api.herokuapp.com/business-enquiries", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then(function (response) {
            document
              .getElementById("contactSubmit")
              .setAttribute("disabled", true);
            document.getElementById(
              "contactSubmit"
            ).innerHTML = `<span>Please Wait .. </span><span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span></span>`;
            return response.json();
          })
          .then(function (jsondata) {
            // console.log(jsondata)
            form.reset();
            form.classList.remove("was-validated");
            document.getElementById("formStatus").classList.add("show");
            document
              .getElementById("contactSubmit")
              .removeAttribute("disabled");
            document.getElementById("contactSubmit").innerHTML = `Submit`;
          })
          .catch(function (error) {
            // console.log(error);
            // document.getElementById("errorAlert").textContent =
            //   "Something went wrong! Please try again";
            document
              .getElementById("contactSubmit")
              .removeAttribute("disabled");
            document.getElementById("contactSubmit").innerHTML = `Submit`;
          });

        // send email here
        fetch("https://zyclyx-email-sender.herokuapp.com/contact", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then(function (res) {
            return res.json();
          })
          .then(function (resjson) {
            // console.log(resjson);
          });
      }
    },
    false
  );
})();
