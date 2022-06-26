function calculator(){
    console.log("Calculating");
    
    // Get the two cvalues from the prompt
    let num1 = Number(prompt("Enter your first number"));
    let num2 = Number(prompt("Enter your second number"));

    // Do the four operation
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;

    // Display the two 
    display(num1, num2, sum, difference, product, quotient);
}

function display(num1, num2, sum, difference, product, quotient){
    document.getElementById("results").innerHTML = `
        <p class="result">${num1} + ${num2} = ${sum}</p>\
        <p class="result">${num1} - ${num2} = ${difference}</p>\
        <p class="result">${num1} * ${num2} = ${product}</p>\
        <p class="result">${num1} / ${num2} = ${quotient}</p>\
        `;
}