let botao = document.querySelectorAll('.btn');
let input = document.querySelector('#input-calculo');
let del = document.querySelector('#func-apagar');
let res = document.querySelector('#valor-final');

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
    if(verificar()){
        input.value += id.textContent;
    }
}

function resultado(){
    if(verificar()){
        let resultado = eval(input.value)
        res.innerHTML = resultado.toFixed(1)
    }
}

function verificar(){
    if(input.value != "" && input.value != "0" && input.value[(input.value.length) - 1] != "-" && input.value[(input.value.length) - 1] != "+" &&input.value[(input.value.length) - 1] != "*" && input.value[(input.value.length) - 1] != "/"){
        return true
    } else{
        return false
    }
}
