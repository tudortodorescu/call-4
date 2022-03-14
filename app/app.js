/**
    Client: Fa-mi te rog butonul de login sa nu fie valabil atunci cand a pus cineva
        parola mai mica de 6 caractere.

    Tech:
    - modificam inputul de password
    - numaram numarul de caracter din input
    - comparam cu numarul minim (var )
    - cream o conditie un if/else
    - daca e mai mare sa fie enabled, altfel disabled
    - cand se apasa o tasta pe password, executam codul

    1) Modificam inputul de password
*/

import { inputValidation } from './modules/validation.js'; 

const passwordElement = document.querySelector('#password')
const repeatPasswordElement = document.querySelector('#repeat-password')
const submitButton = document.querySelector('#submitBtn')

passwordElement.addEventListener( 'input', function(){
    inputValidation(passwordElement, submitButton)
})

repeatPasswordElement.addEventListener( 'input', function(){
    inputValidation(repeatPasswordElement, submitButton)
})
    
submitButton.addEventListener( 'click', function(){
    alert('a dat submit omu')
})
