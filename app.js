let header = document.querySelector('h1')
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')
let body = document.querySelector('body')
let heading = document.querySelector('h2')

function decrease (){
    header.textContent--
}
function changecolor1(){
    body.style.backgroundColor = 'yellow'
}
function changecolor1a(){
    heading.style.color = 'red'
}

dec.addEventListener('click', decrease)
dec.addEventListener('click', changecolor1)
dec.addEventListener('click', changecolor1a)

function reset (){
    header.textContent = 0
}
function changecolor2(){
    body.style.backgroundColor = 'red'
}
function changecolor1b(){
    heading.style.color = 'blue'
}
res.addEventListener('click', reset)
res.addEventListener('click', changecolor2)
res.addEventListener('click', changecolor1b)

function increase (){
    header.textContent++
}
function changecolor3(){
    body.style.backgroundColor = 'green'
}
function changecolor1c(){
    heading.style.color = 'yellow'
}
inc.addEventListener('click', increase)
inc.addEventListener('click', changecolor3)
inc.addEventListener('click', changecolor1c)

 
// function changebackgroundColors(){
//     let hasClass = body.classList.contains("yellow")
//     if (hasClass){
//         body.classList.remove("yellow")
//     }else{
//         body.classList.add("yellow")
//     }
// }
// dec.addEventListener('click', changebackgroundColors)