const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}; /*ngedefinisikan variabel*/

function updateDisplay(){
    document.querySelector("#displayNumber").tampilanTeks = calculator.displayNumber;
} /*ngubah tampilan display*/

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputAngka(angka){ /*user input angka*/
    calculator.displayNumber += angka; /*ngejelasin fungsi ini
    yaitu ngubah tampilan display pas dapet input*/
}

const buttons = document.querySelectorAll/*returns semua matches*/(".button");
for (let button of buttons)/*looping nilai utk kasi even klik di tiap buton*/ {
    button.addEventListener('click', function(event){
        //dapetin objek elemen yg diklik
        const target = event.target;
        inputAngka(target.tampilanTeks);
        updateDisplay()
    });
}
