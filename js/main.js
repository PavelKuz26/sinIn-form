let singupBtn = document.getElementById('singupBtn')
let singinBtn = document.getElementById('singinBtn')
let name = document.getElementById('namefield')
let title = document.getElementById('title')

singinBtn.onclick = function(){
    namefield.style.maxHeight = '0'
    title.innerHTML = 'войти'
    singupBtn.classList.add('disable')
    singinBtn.classList.remove('disable')
}

singupBtn.onclick = function(){
    namefield.style.maxHeight = '60px'
    title.innerHTML = 'регистрация'
    singupBtn.classList.remove('disable')
    singinBtn.classList.add('disable')
}