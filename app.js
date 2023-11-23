let decreament = document.getElementById('decreament')
let reset = document.getElementById('reset')
let increament = document.getElementById('increament')
let count = document.getElementById('title')
let cuValue = 0

decreament.addEventListener('click',()=>{
    cuValue--
count.textContent = cuValue
})
increament.addEventListener('click',()=>{
    cuValue++
count.textContent = cuValue
})
reset.addEventListener('click',()=>{
    cuValue = 0
count.textContent = cuValue
})