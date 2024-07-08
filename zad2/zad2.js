let button = document.getElementsByTagName('button')
let list = document.getElementById('items')
let i = 4;
function afterClick(){
    console.log('działa');
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'item')
    newLi.textContent = 'Item ' + i;
    list.appendChild(newLi);
    i++;
}
button[0].onclick = afterClick;