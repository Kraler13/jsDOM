let form = document.querySelector('form');

function callback(event) {

    event.preventDefault();
    let fname = document.querySelector('input[name="fname"]').value;
    let lname = document.querySelector('input[name="lname"]').value;
    console.log('Imię:', fname);
    console.log('Nazwisko:', lname);
}

form.addEventListener("submit", callback);