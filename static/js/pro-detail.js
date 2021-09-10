// minus plus button
var value = document.querySelector('.input-quantity').value;
const inputQuantity = document.querySelector('.input-quantity')
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');

minus.addEventListener('click', function(){
    if (value > 1){
        value = parseInt(value) - 1;
    }
    inputQuantity.value = value;
})

plus.addEventListener('click', function(){
    if (value >= 1){
        value = parseInt(value) + 1;
    }
    inputQuantity.value = value;
})