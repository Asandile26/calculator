let numbers = document.querySelectorAll('.number');
let screen = document.querySelector('#screen');
let decimal = document.querySelector('#decimal');
let allowed = true;

numbers.forEach (function(number) {
    number.addEventListener('click', function(){
     screen.value += number.textContent;
    })

})

let operators = document.querySelectorAll('.operator');
operators.forEach (function(operator) {
    operator.addEventListener('click', function(){
        screen.value += operator.textContent;
        allowed = true;
    })

})

let equal = document.querySelector('.equal');
equal.addEventListener('click', function(){
    screen.value =eval(screen.value)
    if (screen.value.includes('.')) {
        allowed = false;
    } else allowed = true;
})

let deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', function(){
    if (screen.value[screen.value.length -1] == '.') {
        screen.value = screen.value.slice('0', '-1');
        allowed = true;
    } else {
        screen.value = screen.value.slice('0', '-1');

    }
})
let clearAll = document.getElementById('cal');
clearAll.addEventListener('click', ()=>{
    screen.value = "";
    allowed = true;
} )

decimal.addEventListener('click', function(){

    if (allowed) {
        screen.value += decimal.textContent;
        allowed = false;
    }
})
        




