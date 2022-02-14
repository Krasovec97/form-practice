const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const emailInput = document.querySelector("#email");

const strongPass = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$');
const emailValidate = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$');
const matchPasswordsError = document.querySelector("#mustMatchPassword");

const submitBtn = document.querySelector('#submitBtn')

submitBtn.disabled = true;

const submitConditions = [
    okPassword = false,
    passwordMatch = false,

]

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

function EmailCheck() {
    console.log(emailInput.value)
    console.log(emailValidate.test(emailInput.value));
}

function PasswordCheck() {

    errorMessage.forEach(({ errorElement, testProperty }) => {
        errorElement.classList.toggle("hiddenItem", testProperty.test(passwordInput.value));
    })
    if(strongPass.test(passwordInput.value)) {
        console.log('Password is ok!')
    }
}

function confirmPasswords() {
    matchPasswordsError.classList.toggle("hiddenItem", passwordInput.value === confirmPassword.value);

    if (passwordInput.value === confirmPassword.value){
        console.log("Passwords match!")        
    }
}

function ShowErrors() {
    errorMessage.forEach(({errorElement, testProperty}) => {
        errorElement.classList.toggle("hiddenItem", testProperty.test(passwordInput.value));
    })
}