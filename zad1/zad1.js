let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let ulElement = document.createElement('ul');
cities.forEach(function (element){
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'city')
    newLi.textContent = element
    ulElement.append(newLi)
});
let attrNode = document.createAttribute('class');

console.log(ulElement)