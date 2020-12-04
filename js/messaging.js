// MESSAGING

var overviewContainer = select('.right__section-overview');
var chatContainer = select('.right__section-chat');

function displayOverview() {
  overviewContainer.classList.remove("slideOut");
  chatContainer.classList.remove("slideIn");
  overviewContainer.style.display = "block";
  overviewContainer.classList.add("slideIn");
  chatContainer.classList.add("slideOut");
}

function displayChat() {
    chatContainer.classList.remove("slideOut");
    overviewContainer.classList.remove("slideIn");
    overviewContainer.classList.add("slideOut");
    chatContainer.style.display = "block";
    chatContainer.classList.add("slideIn");
}

// FEEDBACK

var successContainer = select(".main__status-success");
var failContainer = select(".main__status-fail");

failContainer.classList.add("fadeIn");

setTimeout(() => {
    failContainer.classList.add("fadeOut");
    successContainer.classList.add("fadeIn");
}, 2000);

setTimeout(() => {
    successContainer.classList.add("fadeOut");
}, 4000);

function select(s) {
    return document.querySelector(s);
  }