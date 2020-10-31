// let isChatBotOpen = false;
// let sessionID = null;
// let timeOutID = null;
// document.getElementById('userText').setAttribute("disabled", true);
// document.querySelector('.sendBtn').setAttribute("disabled", true);
// document.querySelector('.sendBtn').innerHTML = `<span class="spinner-border spinner-border-sm  text-white" role="status">
// <span class="sr-only">Loading...</span></span>`;

// getNewSession();

// fetch('https://pure-tor-36404.herokuapp.com/')
//   .then(function(res){
//     return res.json();
//   })

// // reset session after 5 minutes
// function sessionTimeOut(){
//   timeOutID=setTimeout(function(){
//     sessionID = null;
//     if(isChatBotOpen && sessionID === null){
//       getNewSession();
//     }
//   },300000);
// }

// // create a session
// function getNewSession(){
//   fetch('https://pure-tor-36404.herokuapp.com/session')
//   .then(function(session){
//     return session.json();
//   })
//   .then(function(data){
//     sessionID = data.session;
//     let userInput = document.getElementById("userText")
//     userInput.removeAttribute("disabled");
//     document.querySelector('.sendBtn').removeAttribute("disabled");
//     document.querySelector('.sendBtn').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 172 172"><g fill="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M170.643.752a3.389 3.389 0 00-3.709-.309L1.814 89.883a3.381 3.381 0 00-1.76 3.306 3.388 3.388 0 002.324 2.93l46.938 15.318-4.542 46.467a3.378 3.378 0 002.029 3.454c.43.201.9.295 1.357.295.954 0 1.895-.403 2.553-1.155l29.603-33.446 44.572 43.94c.645.632 1.505.981 2.392.981.31 0 .618-.054.927-.134a3.395 3.395 0 002.379-2.446l41.28-165.12a3.4 3.4 0 00-1.223-3.52zM56.223 110.806l67.12-54.274-45.741 63.33-25.034 28.26z" fill="#fff"/></g></svg>`;
//     userInput.focus();
//   })
//   .then(function(){
//     if(timeOutID){
//       clearTimeout(timeOutID);
//     }
//     sessionTimeOut();
//   })
// }

// function show(x) {
//   if (x == 0) {
//     document.getElementById("box1").style.display = "none";
//     isChatBotOpen = false;
//   } else {
//     document.getElementById("box1").style.display = "inline";
//     document.getElementById('userText').focus();
//     isChatBotOpen = true;
//     if(sessionID === null){
//       getNewSession();
//     }
//   }
// }

// let messagesElement = document.getElementById("botMessages");
// document
// .getElementById("bot-form")
// .addEventListener("submit", function(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   let userText = document.getElementById("userText").value;

//   // if user input not empty send API Request to chat bot
//   if(userText !== '' && sessionID){
//   messagesElement.innerHTML += `<p id="userReplay">${userText}</p>`;

//   // disable user input
//   document.getElementById('userText').setAttribute("disabled", true);
//   document.querySelector('.sendBtn').setAttribute("disabled", true);
//   document.querySelector('.sendBtn').innerHTML = `<span class="spinner-border spinner-border-sm text-white" role="status">
//   <span class="sr-only">Loading...</span></span>`;
//   document.getElementById("userText").value = "";

//   fetch("https://pure-tor-36404.herokuapp.com/virtech", {
//     method: "post",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({ text: userText,session_id:sessionID })
//   })
//     .then(function(response) {
//       document.getElementById("userText").value = "";
//       return response.json();
//     })
//     .then(function(output){
//         if(output[0]){
//          if (output[0].text) {
//             messagesElement.innerHTML += `<p id="botReplay">${output[0].text}</p>`;
//           }

//           if (output[0].title) {
//             messagesElement.innerHTML += `<p id="botReplay">${output[0].title}</p>`;
//           }

//           if (output[0].description) {
//             messagesElement.innerHTML += `<p id="botReplay">${output[0].description}</p>`;
//           }

//           if (output[0].options) {
//             let html = `<p id="botReplay"> `;
//             html += output[0].options
//               .map(function(option) {
//                 return option.value.input.text;
//               })
//               .join(", ");
//             html += "</p>";
//             messagesElement.innerHTML += html;
//           }
//         }
//     })
//     .then(function(){
//       // enable input and remove loading ...
//     let userInput = document.getElementById("userText")
//     userInput.removeAttribute("disabled");
//     document.querySelector('.sendBtn').removeAttribute("disabled");
//     document.querySelector('.sendBtn').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 172 172"><g fill="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M170.643.752a3.389 3.389 0 00-3.709-.309L1.814 89.883a3.381 3.381 0 00-1.76 3.306 3.388 3.388 0 002.324 2.93l46.938 15.318-4.542 46.467a3.378 3.378 0 002.029 3.454c.43.201.9.295 1.357.295.954 0 1.895-.403 2.553-1.155l29.603-33.446 44.572 43.94c.645.632 1.505.981 2.392.981.31 0 .618-.054.927-.134a3.395 3.395 0 002.379-2.446l41.28-165.12a3.4 3.4 0 00-1.223-3.52zM56.223 110.806l67.12-54.274-45.741 63.33-25.034 28.26z" fill="#fff"/></g></svg>`;
//     userInput.focus();
//     })
//     .then(function(){
//       let chatBot=document.getElementById("scroll");
//       chatBot.scrollTop = chatBot.scrollHeight;
//     })
//     .catch(function(error){
//       console.log(error);
//     })
//   }
// });

function show(x) {
  if (x == 0) {
    document.getElementById("box1").style.display = "none";
    isChatBotOpen = false;
  } else {
    document.getElementById("box1").style.display = "inline";
    document.getElementById("userText").focus();
    isChatBotOpen = true;
  }
}

function getButtonResponse(text) {
  console.log(text);
  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  fetch(
    `https://fathomless-tundra-93354.herokuapp.com/?message=${text}&id=1`,
    requestOptions
  )
    .then(function (response) {
      // document.getElementById("userText").value = "";
      return response.json();
    })
    .then(function (output) {
      console.log(output);
      // if (output[0].text) {
      //     messagesElement.innerHTML += `<p id="botReplay">${output[0].text}</p>`;
      // }

      for (var k = 0; k < output.length; k++) {
        if (output[k].text) {
          messagesElement.innerHTML += `<p id="botReplay">${output[k].text}</p>`;
        }
        if (output[k].image) {
          messagesElement.innerHTML += `<img class="bot-img" src=${output[k].image} />`;
        }
      }
      // if (output) {
      //     messagesElement.innerHTML += `<p id="botReplay">${output[0].text}</p>`;
      // }
      if (output[0].buttons) {
        for (var i = 0; i < output[0].buttons.length; i++) {
          if (output[0].buttons[i].title) {
            console.log(output[0].buttons[i]);
            messagesElement.innerHTML += `<button type="button" onClick="getButtonResponse('${
              output[0].buttons[i + 1].payload
            }')">${output[0].buttons[i].title}</button>`;
          }
        }
      }
    })
    .then(function () {
      // enable input and remove loading ...
      let userInput = document.getElementById("userText");
      userInput.removeAttribute("disabled");
      document.querySelector(".sendBtn").removeAttribute("disabled");
      document.querySelector(
        ".sendBtn"
      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 172 172"><g fill="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M170.643.752a3.389 3.389 0 00-3.709-.309L1.814 89.883a3.381 3.381 0 00-1.76 3.306 3.388 3.388 0 002.324 2.93l46.938 15.318-4.542 46.467a3.378 3.378 0 002.029 3.454c.43.201.9.295 1.357.295.954 0 1.895-.403 2.553-1.155l29.603-33.446 44.572 43.94c.645.632 1.505.981 2.392.981.31 0 .618-.054.927-.134a3.395 3.395 0 002.379-2.446l41.28-165.12a3.4 3.4 0 00-1.223-3.52zM56.223 110.806l67.12-54.274-45.741 63.33-25.034 28.26z" fill="#fff"/></g></svg>`;
      userInput.focus();
    })
    .then(function () {
      let chatBot = document.getElementById("scroll");
      chatBot.scrollTop = chatBot.scrollHeight;
    })
    .catch(function (error) {
      console.log(error);
    });
}

let messagesElement = document.getElementById("botMessages");
document.getElementById("bot-form").addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
  let userText = document.getElementById("userText").value;
  // if user input not empty send API Request to chat bot
  if (userText !== "") {
    messagesElement.innerHTML += `<p id="userReplay">${userText}</p>`;
    // disable user input
    document.getElementById("userText").setAttribute("disabled", true);
    document.querySelector(".sendBtn").setAttribute("disabled", true);
    document.querySelector(
      ".sendBtn"
    ).innerHTML = `<span class="spinner-border spinner-border-sm text-white" role="status">
<span class="sr-only">Loading...</span></span>`;
    document.getElementById("userText").value = "";
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    fetch(
      `https://fathomless-tundra-93354.herokuapp.com/?message=${userText}&id=1`,
      requestOptions
    )
      .then(function (response) {
        document.getElementById("userText").value = "";
        return response.json();
      })
      .then(function (output) {
        console.log(output);
        if (output) {
          messagesElement.innerHTML += `<p id="botReplay">${output[0].text}</p>`;
        }
        if (output[0].buttons) {
          var b = '<div class="d-flex">';
          for (var i = 0; i < output[0].buttons.length; i++) {
            if (output[0].buttons[i].title) {
              b += `<button type="button" class="m-2 w-50 btn btn-primary" onClick="getButtonResponse('${
                output[0].buttons[i + 1].payload
              }')">${output[0].buttons[i].title}</button>`;
            }
          }
          messagesElement.innerHTML += b;
          b += "</div>";
        }
      })
      .then(function () {
        // enable input and remove loading ...
        let userInput = document.getElementById("userText");
        userInput.removeAttribute("disabled");
        document.querySelector(".sendBtn").removeAttribute("disabled");
        document.querySelector(
          ".sendBtn"
        ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 172 172"><g fill="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M170.643.752a3.389 3.389 0 00-3.709-.309L1.814 89.883a3.381 3.381 0 00-1.76 3.306 3.388 3.388 0 002.324 2.93l46.938 15.318-4.542 46.467a3.378 3.378 0 002.029 3.454c.43.201.9.295 1.357.295.954 0 1.895-.403 2.553-1.155l29.603-33.446 44.572 43.94c.645.632 1.505.981 2.392.981.31 0 .618-.054.927-.134a3.395 3.395 0 002.379-2.446l41.28-165.12a3.4 3.4 0 00-1.223-3.52zM56.223 110.806l67.12-54.274-45.741 63.33-25.034 28.26z" fill="#fff"/></g></svg>`;
        userInput.focus();
      })
      .then(function () {
        let chatBot = document.getElementById("scroll");
        chatBot.scrollTop = chatBot.scrollHeight;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});
