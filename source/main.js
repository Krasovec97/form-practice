var errorNumber = document.getElementById("needsNumber");
var errorUppercase = document.getElementById("needsUppercase");
var errorSymbol = document.getElementById("needsSymbol");

function ErrorCheck() {
    var passwordInput = document.getElementById("password");
    
    console.log(passwordInput.value);
}

errorNumber.classList.add("hiddenItem");
errorUppercase.classList.add("hiddenItem");
errorSymbol.classList.add("hiddenItem");