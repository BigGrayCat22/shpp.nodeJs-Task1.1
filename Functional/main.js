"use strict";

import { readCSVFromFile, parseCSV } from "./functions.js";

const defaultCities = readCSVFromFile("cities.csv");
const parsedCSV = parseCSV(defaultCities);

console.log(parsedCSV("blabla Одеса"));
console.log(parsedCSV("some text Харків"));
console.log(parsedCSV("Черкаси не входить в топ 10"))
