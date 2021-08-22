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
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = angka;
     } else {
         calculator.displayNumber += angka;
     } /*ngejelasin fungsi ini
    yaitu ngubah tampilan display pas dapet input*/
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
 }

 function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
 
        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    } else {
        alert('Anda sudah menetapkan operator.')
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }
  
    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }
  
    calculator.displayNumber = result;
 }
 
window.addEventListener("load", function(){
const buttons = document.querySelectorAll/*returns semua matches*/(".button");
for (let button of buttons)/*looping nilai utk kasi even klik di tiap buton*/ {
    button.addEventListener('click', function(event){
        //dapetin objek elemen yg diklik
        
        const bb = event.target;

        if (bb.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        } 
        if(bb.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }
        if(bb.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }
        if(bb.classList.contains('operator')) {
            handleOperator(bb.innerHTML);
            return;
        }
        inputAngka(bb.innerHTML);
        updateDisplay()
    });
}
})
