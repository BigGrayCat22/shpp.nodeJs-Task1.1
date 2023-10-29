"use strict"

export { Validator }

const Validator = {
    mailValidador: /^[a-zA-Z0-9][a-zA-Z0-9\-.+]{1,19}@[\w!.$%&’*+\/=?^-]{1,15}\.[a-zA-Z]{1,5}$/,
    phoneValidator: /^[\s\-]*(\+?[\s\-]*\d?[\s\-]*\d?[\s\-]*)(\(?[\s\-]*\d[\s\-]*\d[\s\-]*\d[\s\-]*\)?)([\s\-]*\d){7}[\s\-]*$/,
    passwordValidator: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\d]{8,}$/,

    validateEmail: function (mail) {
        return this.mailValidador.test(mail);
    },

    validatePhone: function (phone) {
        if (phone.length > 25) {
            return false;
        }
        return this.phoneValidator.test(phone);
    },

    validatePassword: function (psw) {
        return this.passwordValidator.test(psw);
    }
}
