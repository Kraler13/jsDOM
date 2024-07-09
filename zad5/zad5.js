let inputName = document.getElementById('name');
let inputEmail = document.getElementById('e-mail');
let firstAgreement = document.getElementById('pierwszaZgoda');
let secondAgreement = document.getElementById('drugaZgoda');
let thirdAgreement = document.getElementById('trzeciaZgoda');
let submitButton = document.getElementById('submitButton');
let list = document.getElementById('list');
let form = document.getElementById('form');

function validate(event) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    if (inputName.value.trim() === "") {
        let newLi = document.createElement('li');
        newLi.style.color = 'red';
        newLi.textContent = 'Wymagane podanie imienia';
        list.appendChild(newLi);
        event.preventDefault();
    }
    if (inputEmail.value.trim() === "" || !inputEmail.value.includes('@')) {
        let newLi = document.createElement('li');
        newLi.style.color = 'red';
        newLi.textContent = 'Wymagane podanie e-maila';
        list.appendChild(newLi);
        event.preventDefault();
    }
    if (!firstAgreement.checked) {
        let newLi = document.createElement('li');
        newLi.style.color = 'red';
        newLi.textContent = 'MUSISZ ZAZNACZYĆ POLE 1';
        list.appendChild(newLi);
        event.preventDefault();
    }
    function updateAgreements() {
        if (thirdAgreement.checked) {
            firstAgreement.checked = true;
            secondAgreement.checked = true;
            firstAgreement.disabled = true;
            secondAgreement.disabled = true;
        } else {
            firstAgreement.checked = false;
            secondAgreement.checked = false;
            firstAgreement.disabled = false;
            secondAgreement.disabled = false;
        }
    }
    
    thirdAgreement.addEventListener('change', updateAgreements);
}

form.addEventListener("submit", validate);
