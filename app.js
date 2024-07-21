let secretNumber = 0;
let numberOfTries = 0;
let listNumbers = [];
let maxNumber = 10;

function clearBox(){
    document.querySelector('#userValue').value = "";    //Setea nuevo valor porque es un input field
    return;
}

function restartGame() {
    //limpiar caja
    clearBox();
    //mensaje inicio
    //Generar aleatorio
    //Inicializar numIntentos
    initialConditions();
    //Deshabilitar botón restart   
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

function checkAttempt(){
    let userNumber = parseInt(document.getElementById('userValue').value);    
    if(secretNumber === userNumber){
        asignTextElements('p',`You got it right in ${numberOfTries} ${numberOfTries==1?"attempt":"attempts"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(userNumber > secretNumber){
            asignTextElements('p', "The number is lower");
        }else{
            asignTextElements('p', "The number is greater");
        }
        clearBox();
        numberOfTries++;
    
    }

    return;
}


function asignTextElements(element, text){
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
    return;
}

function generateSecretNumber() {
    let generatedNumber =  Math.floor(Math.random()*maxNumber)+1;   
    console.log(generatedNumber);
    console.log(listNumbers);
    if(listNumbers.length == maxNumber){
        asignTextElements('p',"All possible numbers have been guessed!")        
    }else{
        if(listNumbers.includes(generatedNumber)){
            return generateSecretNumber();
        }else{
            listNumbers.push(generatedNumber);
            return generatedNumber;

        }
    }    
}

function initialConditions(){
    asignTextElements('h1', "SECRET NUMBER GAME!");
    asignTextElements("p",`Type a number between 1 & ${maxNumber}`)
    secretNumber = generateSecretNumber();    
    numberOfTries = 1;
}

initialConditions();

