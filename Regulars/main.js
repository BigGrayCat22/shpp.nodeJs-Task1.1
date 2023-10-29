"use strict"

import { Validator } from './validators.js'

const mailsToCheck = [
    "fi@secondpart.end",
    "first-part@.se=cond%p.art.end",
    "first.part@se=cond%part.r",
    "f@secondart.end",
    "first-part@.se=cond@part.end",
    "-firstpart@.se=cond%.enddeded",
    "firs_tpart@.se.en",
    "firstpart@.se.enddeded"
];

const phonesToCheck = [
    "+38(099) 567 8901",
    "+ 38 099 5 6 7 8 9  01",
    "(09 - 9) 567 - 890 - 1",
    "--(099) 567 890 - 1",
    "+38(099) 567 8901 0",
    "+ 38 099 a0000000",
    "+ 38(0989) 567 8901",
    "+ 48(0989) 567 8901"
];

const passwordsToCheck = [
    "C00l_Pass",
    "SupperPas1",
    "Cool_pass",
    "C00l"
]

//          Email checking
for (const mail of mailsToCheck) {
    console.log(`Checking ${mail} : ${Validator.mailValidador.test(mail)}`);
}
console.log();

//          Phones checking
for (const phone of phonesToCheck) {
    console.log(`Checking ${phone} : ${Validator.phoneValidator.test(phone)}`);
}
console.log();

//          Passwords checking
for (const password of passwordsToCheck) {
    console.log(`Checking ${password} : ${Validator.passwordValidator.test(password)}`);
}