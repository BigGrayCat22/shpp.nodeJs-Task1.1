"use strict";
import fs from 'fs';
export { readCSVFromFile, parseCSV }

/**
 * Method read data from file to string
 * 
 * @param {string} filePath Path to CSV file with cities statistic
 * @returns {string} readed file if file exist and empty string in other case
 */
function readCSVFromFile(filePath) {
    try {
        return fs.readFileSync(filePath, { encoding: "utf-8" });
    } catch (error) {
        console.log(`File ${filePath} do not exist`)
        return "";
    }
}

/**
 * Method parse string to object CSV and return method to replace data
 * 
 * @param {string} csv unparsed CSV string 
 * 
 */
function parseCSV(csv) {
    let counter = 0;
    const resObject = csv.split(process.platform === "win32" ? "\r\n" : "\n")
        .filter(element => element.charAt(0) !== '#' && element.trim().length !== 0)
        .map(oneRow => {
            return oneRow.replace('#', '');
        })
        .map(oneRow => {
            const [x, y, name, population] = oneRow.split(',');
            return { x, y, name, population };
        })
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
        .reduce((resObj, element) => {
            resObj[element.name] = { population: element.population, rating: ++counter }
            return resObj;
        }, {});

    /**
     * function replace keys in @param text to sentence constructed in it
     */
    return function replacer(text) {
        Object.keys(resObject).reduce((result, key) => {
            text = text.replaceAll(key, key + " (" + resObject[key].rating +
                " місце в ТОП-10 найбільших міст України, населення " + resObject[key].population + " чоловік)");

        }, text);
        return text;
    }

}