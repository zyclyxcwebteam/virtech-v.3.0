function checkContactForm(contactForm) {

    if (contactForm.firstname.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter First Name!'

      })

      contactForm.firstname.focus();
      return false;
    }
    re = /[0-9]/;
    if (re.test(contactForm.firstname.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'First Name cannot be in numbers!'

      })
      contactForm.firstname.focus();
      return false;

    }
    if (contactForm.lasttname.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Last Name!'

      })
      contactForm.lasttname.focus();
      return false;
    }
    re = /[0-9]/;
    if (re.test(contactForm.lasttname.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Last Name cannot be in numbers!'

      })
      contactForm.lasttname.focus();
      return false;
    }
    if (contactForm.email.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Email id!'

      })
      contactForm.email.focus();
      return false;
    }

    re = /^([A-Za-z0-9_\-\.])+([A-Za-z0-9_\-\.])+([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!re.test(contactForm.email.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Valid Email Id!'
      })
      contactForm.email.focus();
      return false;
    }
    if (contactForm.phone.value == "") {
      Swal.fire(
        {
          icon: 'error',
          title: 'Oops...',
          text: 'Please Enter Phone Number!'
        }
      )
      contactForm.phone.focus();
      return false;
    }
    re = /[0-9]/;
    if (!re.test(contactForm.phone.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Valid Phone Number !'

      })
      contactForm.phone.focus();
      return false;
    }
    if (contactForm.message.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Message!'
      })
      contactForm.message.focus();
      return false;
    }
    return true;
  }



  
  var myForm = document.getElementById('contactForm');
  myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = "Applied Successfull";
    // swal("Good job!", "You clicked the button!", "success");

    const formdata = new FormData(this);
    console.log(formdata)

    fetch('http://localhost:3003/jobapplicationform', {
      method: 'post',
      body: formdata
    }).then(function (response) {

      return response.text();
      console.log(response.text() + "responce is")


    }).then(function (text) {
      console.log(text + "text is");
      if (status == text) {
        swal("Applied Successfull", "You clicked the button!", "success");
      }
      else {
        swal("file is not supported", "You clicked the button!", "error");
      }


    }).catch(function (error) {
      console.log(error);
    })
  })