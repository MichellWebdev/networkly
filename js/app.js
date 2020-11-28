// Login modal
let loginModal = document.getElementById('loginModal');

let loginBtn = document.getElementById('loginButton');

let span = document.getElementsByClassName('closeLoginModal')[0];

loginBtn.onclick = function () {
  loginModal.style.display = 'block';
};

span.onclick = function () {
  loginModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
};
