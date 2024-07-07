let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
const doc = document.body;
let ulElement = document.createElement('ul');
cities.forEach(function (element){
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'city')
    newLi.textContent = element
    ulElement.appendChild(newLi)
});
doc.append(ulElement);
console.log(doc)