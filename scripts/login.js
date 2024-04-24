document.addEventListener("DOMContentLoaded", function () {
  const elInputEmail = document.querySelector(".login__email");
  const elErrorMessageId = document.querySelector(".error-message_id");
  const elErrorMessageId2 = document.querySelector(".error-message_id2");
  const elInputPassword = document.querySelector(".login__pw");
  const elErrorMessagePw = document.querySelector(".error-message_pw");
  const elErrorMessagePw2 = document.querySelector(".error-message_pw2");

  elInputEmail.addEventListener("input", function (event) {
    console.log(event.target.value);
  });

  function validEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  elInputEmail.addEventListener("focusout", function () {
    if (!elInputEmail.value.trim()) {
      elInputEmail.style.outline = "2px solid red";
      elErrorMessageId.classList.remove("hide");
      elErrorMessageId2.classList.add("hide");
    } else {
      if (elInputEmail.value.trim() && !validEmail(elInputEmail.value.trim())) {
        elInputEmail.style.outline = "2px solid red";
        elErrorMessageId.classList.add("hide");
        elErrorMessageId2.classList.remove("hide");
      } else {
        elInputEmail.style.outline = "";
        elErrorMessageId.classList.add("hide");
        elErrorMessageId2.classList.add("hide");
      }
    }
  });

  function validPw(password) {
    return password.length >= 8;
  }

  elInputPassword.addEventListener("focusout", function () {
    if (!elInputPassword.value.trim()) {
      elInputPassword.style.outline = "2px solid red";
      elErrorMessagePw.classList.remove("hide");
      elErrorMessagePw2.classList.add("hide");
    } else {
      if (
        elInputPassword.value.trim() &&
        !validPw(elInputPassword.value.trim())
      ) {
        elInputPassword.style.outline = "2px solid red";
        elErrorMessagePw.classList.add("hide");
        elErrorMessagePw2.classList.remove("hide");
      } else {
        elInputPassword.style.outline = "";
        elErrorMessagePw.classList.add("hide");
        elErrorMessagePw2.classList.add("hide");
      }
    }
  });
});
