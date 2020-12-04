var click = 0;
var randNames = ['User A', 'User B', 'User C', 'User D', 'User E'];
var cancelModal = document.getElementById('cancelModal');

function populateDate() {
    document.getElementById('create_event_date').value = "March 4th, 2021"
}

function addAtendees() {

    var tag = ''

    for (i = 0; i <= click; i++) {
        var name = randNames[i]
        tag += `<button class="tag_attendees text__8-roboto_light" type="button">${name}
                <span class="remove_participant">&#215;</span></button>`
    }

    document.getElementById('atendee_div').innerHTML = tag
    click++
}

function displayCancelModal() {
    cancelModal.style.display = 'block';
}