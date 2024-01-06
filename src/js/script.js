const displayInput = document.querySelector('#input-calculo');
const displayResult = document.querySelector('#valor-final');

document.addEventListener('click', (e) => {

    if (e.target.textContent === '=') {
        try {
            let result = eval(displayInput.value)
            displayResult.textContent = result;

            if(result == 'NAN'){
                displayResult.textContent = 'Conta Invalida!'
            }

        } catch (err) {
            displayResult.textContent = 'Conta Invalida!'
        }
        return
    }

    if (e.target.classList.contains('btn')) {
        displayInput.value += e.target.textContent
    }

    if (e.target.textContent === 'C') {
        displayInput.value = ''
        displayResult.textContent = 'Resultado'
    }

})
