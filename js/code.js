let numbers = document.querySelectorAll('.number')
let screen = document.querySelector('#screen')
numbers.forEach (function(number) {
    number.addEventListener('click', function(){
     screen.value += number.textContent
    })

})

let operators = document.querySelectorAll('.operator')
operators.forEach (function(operator) {
    operator.addEventListener('click', function(){
        screen.value += operator.textContent
    })

})

let equal = document.querySelector('.equal');
equal.addEventListener('click', function(){
    screen.value =eval(screen.value)
})

let deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', function(){
    screen.value = screen.value.slice('0', '-1')
})
let clearAll = document.getElementById('cal');
clearAll.addEventListener('click', ()=>{
    screen.value = "";
} )