const passwordInput = document.querySelector("#password");
const strongPass = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$');

const errorMessage = [
    {
        testProperty: new RegExp('(?=.*[0-9])'),
        errorElement: document.querySelector("#needsNumber")
    },
    {
        testProperty: new RegExp('(?=.*[A-Z])'),
        errorElement: document.querySelector("#needsUppercase")
    },
    {
        testProperty: new RegExp('(?=.*[a-z])'),
        errorElement: document.querySelector("#needsLowercase")
    },
    {
        testProperty: new RegExp('(?=.*[!@#$&*])'),
        errorElement: document.querySelector("#needsSymbol")
    },
    {
        testProperty: new RegExp('.{8,}'),
        errorElement: document.querySelector("#needsEnoughChars")
    }
]

function ErrorCheck() {

    errorMessage.forEach(({ errorElement, testProperty }) => {
        errorElement.classList.toggle("hiddenItem", testProperty.test(passwordInput.value));
    })   


    if(strongPass.test(passwordInput.value) === true) {
        console.log('Allow User to send!')
    }
}