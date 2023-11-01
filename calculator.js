document.addEventListener("DOMContentLoaded", () =>{
    let btnValue = document.querySelectorAll('.btnValue');
    let btnOperation = document.querySelectorAll('.btnOperation');
    let display = document.getElementById('display');
    
    btnValue.forEach(button => {        
        button.addEventListener('click', () => {
            display.innerText += button.value;
        })
    });

    btnEqual.addEventListener('click', () => {
        
        display.textContent = eval(display.innerText);
    });

    btnClear.addEventListener('click', () =>{
        display.innerText = '';
    })
});








