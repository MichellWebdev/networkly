var click = 0;
var divNum = 1;
var randNames = ['John Smith', 'Jane Doe', 'Selena Diaz', 'Florian Rau', 'Lorine Metz', 'Rowland Price', 'Alberto Strosin'];
var cancelModal = document.getElementById('cancelModal');
var newEvent = document.getElementById('newEvent')
// var cancelModal = document.getElementById('cover');

// setTimeout(() => {
//     newEvent.style.border = '1px solid #43736C'
// }, 1000);

// setTimeout(() => {
//     newEvent.style.border = '1px solid #F8F3F0'
// }, 2000);

function populateDate() {
    document.getElementById('create_event_date').value = "24 - 25, March, 2021"
}

function addAtendees() {

    click++
    var tag = ''

    if (click > 0 && click < 4) {
        for (i = 0; i < click; i++) {
            var name = randNames[i]
            tag += `<button class="tag_attendees text__8-roboto_light" type="button">${name}
            <span class="remove_participant">&#215;</span></button>`
        }
        document.getElementById('atendee_div1').innerHTML = tag
    }

    if (click > 3 && click < 7) {
        for (i = 0; i < 3; i++) {
            var name = randNames[i]
            tag += `<button class="tag_attendees text__8-roboto_light" type="button">${name}
            <span class="remove_participant">&#215;</span></button>`
        }
        document.getElementById('atendee_div1').innerHTML = tag
        tag = ''

        for (i = 3; i < click; i++) {
            var name = randNames[i]
            tag += `<button class="tag_attendees text__8-roboto_light" type="button">${name}
            <span class="remove_participant">&#215;</span></button>`
        }
        document.getElementById('atendee_div2').innerHTML = tag
    }
}

function displayCancelModal() {
    cancelModal.style.display = 'block';
}

function closeCancelModal() {
    cancelModal.style.display = 'none';
}