const addNumber = document.querySelector(".addNumber");
const plus = document.querySelector(".plus");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const calc = document.querySelector(".result");

let count = 0;
let result = 0;


plus.addEventListener("click" , ()=>{

    result = count + (+addNumber.value);
    calc.innerHTML = "Result :   " + result;
    count = result;
    addNumber.value = "";
})

increment.addEventListener("click", ()=>{

    result++;
    calc.innerHTML ="Result :   " + result;
    count = result;
})

decrement.addEventListener("click", ()=>{
    
    result--;
    calc.innerHTML = "Result :   " + result;
    count = result;
})

reset.addEventListener("click", ()=>{
    result = result - result; 
    calc.innerHTML = "Result :   " + result;
    count = result;
})

