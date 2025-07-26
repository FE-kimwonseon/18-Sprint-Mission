import {
  form,
  userEmail,
  userPassword,
  emailErrorMsg,
  pwErrorMsg,
  pwToggle,
  errMsg,
  changeImg,
} from "./shared_variable.js";

import { validateemail, showError, hideError, activeButton } from "./validate.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/item";
});

// 이메일 focusout
userEmail.addEventListener("focusout", () => {
  if (userEmail.value === "") {
    showError(userEmail, emailErrorMsg, errMsg.id.voidOut.trim());
  } else if (!validateemail(userEmail.value)) {
    showError(userEmail, emailErrorMsg, errMsg.id.fail.trim());
  } else {
    hideError(userEmail, emailErrorMsg);
  }
  activeButton();
});

// 비밀번호 focusout
userPassword.addEventListener("focusout", () => {
  if (userPassword.value.length === 0) {
    showError(userPassword, pwErrorMsg, errMsg.pw.voidOut.trim());
  } else if (userPassword.value.length < 8) {
    showError(userPassword, pwErrorMsg, errMsg.pw.fail.trim());
  } else {
    hideError(userPassword, pwErrorMsg);
  }
  activeButton();
});

// 비밀번호 보기
pwToggle.forEach((button) => {
  button.addEventListener("click", (target) => {
    const clickBtn = target.currentTarget;
    const parentEle = clickBtn.closest(".flex_item");
    const targetInput = parentEle.querySelector(".input_field");
    const img = clickBtn.querySelector(".pw-icon");

    if (targetInput.type === "password") {
      targetInput.type = "text";
      img.src = changeImg.show;
    } else {
      targetInput.type = "password";
      img.src = changeImg.hide;
    }
  });
});
