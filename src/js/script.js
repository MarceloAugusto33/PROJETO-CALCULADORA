let botao = document.querySelectorAll('.btn');
let input = document.querySelector('.input-conta');
let del = document.querySelector('#delete');
let res = document.querySelector('.res');

del.addEventListener('click', function() {
    input.value = "0"
    res.innerHTML = "0"
})

function numero(id){
    if(input.value == "0"){
        input.value = id.textContent;
    } else{
        input.value += id.textContent;
    }
}
function operacoes(id){
    if(input.value != "" && input.value != "0" && input.value[(input.value.length) - 1] != "-" && input.value[(input.value.length) - 1] != "+" &&input.value[(input.value.length) - 1] != "*" && input.value[(input.value.length) - 1] != "/"){
        input.value += id.textContent;
    }
}

function resultado(){
    if(input.value != "" && input.value != "0" && input.value[(input.value.length) - 1] != "-" && input.value[(input.value.length) - 1] != "+" &&input.value[(input.value.length) - 1] != "*" && input.value[(input.value.length) - 1] != "/"){
        let resultado = eval(input.value)
        res.innerHTML = resultado.toFixed(2)
    }
}
