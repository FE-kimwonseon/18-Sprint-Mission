import { userEmail, userPassword, submitButton } from "./shared_variable.js";

// 이메일 정규 표현식 체크
export function validateemail(value) {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return emailRegex.test(value);
}

// error messsage show
export function showError(inputEle, errorEle, message) {
  inputEle.style.border = "1px solid #f74747";
  errorEle.innerHTML = message;
  errorEle.style.display = "block";
}

// error message hide
export function hideError(inputEle, errorEle) {
  inputEle.style.border = "none";
  errorEle.style.display = "none";
}

// 버튼 활성화
export function activeButton() {
  const isValidEmail = validateemail(userEmail.value) && userPassword.value.length <= 8;

  submitButton.disabled = isValidEmail;
}
