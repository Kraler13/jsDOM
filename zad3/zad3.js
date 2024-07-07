let p = document.getElementsByTagName('p')


function afterClick(){
    p[0].style.backgroundColor = "red"
p[1].style.backgroundColor = "yellow"
}

document.getElementById('button').addEventListener("click", afterClick)