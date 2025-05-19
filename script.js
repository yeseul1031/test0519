// 아이디 유효성 검사
function isMoreThan4Length(value) {
  return value.length >= 4;
}

let elInputUsername = document.querySelector('#username'); 
let elFailureMessage = document.querySelector('.failure-message'); 
let elSuccessMessage = document.querySelector('.success-message'); 

elInputUsername.onkeyup = function () {
	if (isMoreThan4Length(elInputUsername.value)) {
		elSuccessMessage.classList.remove('hide'); 
		elFailureMessage.classList.add('hide');
	} else { 
		elSuccessMessage.classList.add('hide'); 
		elFailureMessage.classList.remove('hide');
	} 
}; 

// 비밀번호 일치 확인 

function isMatch(a, b) {
  return a === b;
}

 if (typeof module !== 'undefined' && module.exports) {
  module.exports = { isMatch };
 }

const passwordInput = document.querySelector('#password');
const passwordRetypeInput = document.querySelector('#password-retype');
const mismatchMessage = document.querySelector('.mismatch-message');

passwordRetypeInput.addEventListener('keyup', () => {
  if (isMatch(passwordInput.value, passwordRetypeInput.value)) {
    mismatchMessage.classList.add('hide');
  } else {
    mismatchMessage.classList.remove('hide');
  }
});
