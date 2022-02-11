class FormValidator {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
    }

    initialize() {
        console.log('form', this.form)
        console.log('fields', this.fields)
    }
}

const form = document.querySelector('.form')
const fields = ["username", "email", "password", "confirmPassword"];

const validator = new FormValidator(form, fields)

validator.initialize();