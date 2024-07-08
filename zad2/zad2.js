let button = document.getElementsByTagName('button')
let list = document.getElementById('items')
let i = 3;
function afterClick(){
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'item')
    newLi.textContent = 'Item ' + i;
    list.appendChild(newLi);
}
document.getElementsByTagName('button').onclick = afterClick;