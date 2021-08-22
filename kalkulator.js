const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}; /*ngedefinisikan variabel*/

function updateDisplay(){
    document.querySelector("#displayNumber").innerHTML = calculator.displayNumber;
} /*ngubah tampilan display*/

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputAngka(angka){ /*user input angka*/
    if(calculator.displayNumber!=0){
        calculator.displayNumber += angka;
    }else{
        calculator.displayNumber = angka;
    }
     /*ngejelasin fungsi ini
    yaitu ngubah tampilan display pas dapet input*/
    
}


window.addEventListener("load", function () {
    
    const buttons = document.querySelectorAll/*returns semua matches*/(".button");
    for (let button of buttons)/*looping nilai utk kasi even klik di tiap buton*/ {
    button.addEventListener('click', function(event){
        //dapetin objek elemen yg diklik
        

        const b = event.target;
        
        var in_user = b.innerHTML
        if(in_user=="CE"){
            calculator.displayNumber = 0;
        }else{
            inputAngka(in_user);
        }
        updateDisplay();
    });
}
});
