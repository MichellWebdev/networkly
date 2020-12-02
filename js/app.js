// modals
let loginModal = document.getElementById('loginModal');
let signupModal = document.getElementById('signupModal');
let signupModalTwo = document.getElementById('signupModalTwo');

let loginBtn = document.getElementById('loginButton');
let signupBtn = document.getElementById('signupButton');

let spanLogin = document.getElementsByClassName('closeLoginModal')[0];
let spanSignup = document.getElementsByClassName('closeSignupModal')[0];
let spanSignupTwo = document.getElementsByClassName('closeSignupModalTwo')[0];

loginBtn.onclick = function () {
  loginModal.style.display = 'block';
};

signupBtn.onclick = function () {
  signupModal.style.display = 'block';
};

function openSecondModal() {
  loginModal.style.display = 'none';
  signupModal.style.display = 'none';
  signupModalTwo.style.display = 'block';
}

spanLogin.onclick = function () {
  loginModal.style.display = 'none';
};

spanSignup.onclick = function () {
  signupModal.style.display = 'none';
};

spanSignupTwo.onclick = function () {
  signupModalTwo.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
};

window.onclick = function (event) {
  if (event.target == signupModal) {
    signupModal.style.display = 'none';
  }
};

window.onclick = function (event) {
  if (event.target == signupModalTwo) {
    signupModalTwo.style.display = 'none';
  }
};

function displayLoginModal() {
  loginModal.style.display = 'block';
  signupModal.style.display = 'none';
  signupModalTwo.style.display = 'none';
}

function displaySignupModal() {
  loginModal.style.display = 'none';
  signupModal.style.display = 'block';
}

// // Validation for modals
// function validateForm() {
//   let validationMessage = document.getElementsByClassName('validationMessage');
//   let validation = document.forms['signupForm']['fullName'].value;
//   if (validation == '') {
//     validationMessage.style.display = 'none';
//     return false;
//   }
// }
// // this does not work at ll
