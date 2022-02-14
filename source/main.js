const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const emailInput = document.querySelector("#email");

const strongPass = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$');
const emailValidate = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const matchPasswordsError = document.querySelector("#mustMatchPassword");
const validEmail = document.querySelector('#validEmail');

const submitBtn = document.querySelector('#submitBtn');


submitBtn.disabled = true;

const submitConditions = [
    emailTrue = false,
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
    validEmail.classList.toggle("hiddenItem", emailValidate.test(emailInput.value))

    if(emailValidate.test(emailInput.value)) {        
        submitConditions[0] = true;       
    }
}

function PasswordCheck() {

    errorMessage.forEach(({ errorElement, testProperty }) => {
        errorElement.classList.toggle("hiddenItem", testProperty.test(passwordInput.value));
    })
    if(strongPass.test(passwordInput.value)) {
        submitConditions[1] = true;          
    }
}

function ConfirmPasswords() {
    matchPasswordsError.classList.toggle("hiddenItem", passwordInput.value === confirmPassword.value);

    if (passwordInput.value === confirmPassword.value){
        submitConditions[2] = true; 
            
    }
}

function ShowErrors() {
    errorMessage.forEach(({errorElement, testProperty}) => {
        errorElement.classList.toggle("hiddenItem", testProperty.test(passwordInput.value));
    })
}

function FormReadyToSend() {
    if(submitConditions.every((condition) => condition === true)) {
        submitBtn.disabled = false;
    }
}
