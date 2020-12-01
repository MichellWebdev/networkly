// modals
let loginModal = document.getElementById('loginModal');
let signupModal = document.getElementById('signupModal');

let loginBtn = document.getElementById('loginButton');
let signupBtn = document.getElementById('signupButton');

let spanLogin = document.getElementsByClassName('closeLoginModal')[0];
let spanSignup = document.getElementsByClassName('closeSignupModal')[0];

loginBtn.onclick = function () {
  loginModal.style.display = 'block';
};

signupBtn.onclick = function () {
  signupModal.style.display = 'block';
};

spanLogin.onclick = function () {
  loginModal.style.display = 'none';
};

spanSignup.onclick = function () {
  signupModal.style.display = 'none';
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
