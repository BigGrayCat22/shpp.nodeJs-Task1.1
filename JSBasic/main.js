"use strict"

import { Product, reviews } from "./prototypes.js";

let allProducts = [];
// creation of 10 new products scope
function createProducts() {

    allProducts.push(new Product(
        100,
        "Фут 'Classic White'",
        "Простая белая футболка",
        19.99,
        "Fashion Brand",
        ['S', 'M', 'L'],
        'M',
        50,
        new Date(),
        [],
        ["image1.jpg", "image2.jpg"]
    ));

    allProducts.push(new Product(
        2,
        "Джинсы 'Slim Fit'",
        "Джинсы с узким кроем",
        39.99,
        "Denim Co.",
        ['S', 'M', 'L', 'XL'],
        'L',
        30,
        new Date(),
        [],
        ["image3.jpg", "image4.jpg"]
    ));

    allProducts.push(new Product(
        3,
        "Платье 'Elegant Black'",
        "Черное элегантное платье",
        49.99,
        "Chic Fashion",
        ['XS', 'S', 'M', 'L'],
        'S',
        20,
        new Date(),
        [],
        ["image5.jpg", "image6.jpg"]
    ));

    allProducts.push(new Product(
        4,
        "Рубашка 'Casual Stripes'",
        "Полосатая рубашка для повседневной носки",
        29.99,
        "Stylish Wear",
        ['M', 'L', 'XL'],
        'M',
        40,
        new Date(),
        [],
        ["image7.jpg", "image8.jpg"]
    ));

    allProducts.push(new Product(
        5,
        "Куртка 'Outdoor Adventure'",
        "Спортивная куртка для активного отдыха",
        79.99,
        "Sporty Outfit",
        ['S', 'M', 'L', 'XL', 'XXL'],
        'L',
        15,
        new Date(),
        [],
        ["image9.jpg", "image10.jpg"]
    ));

    allProducts.push(new Product(
        7,
        "Пуловер 'Cozy Knit'",
        "Уютный пуловер для холодных дней",
        34.99,
        "Warm Wardrobe",
        ['S', 'M', 'L', 'XL'],
        'M',
        25,
        new Date(),
        [],
        ["image11.jpg", "image12.jpg"]
    ));

    allProducts.push(new Product(
        6,
        "Шорты 'Active Shorts'",
        "Короткие спортивные шорты",
        24.99,
        "Active Gear",
        ['S', 'M', 'L'],
        'S',
        60,
        new Date(),
        [],
        ["image13.jpg", "image14.jpg"]
    ));

    allProducts.push(new Product(
        88,
        "Блуза 'Floral Print'",
        "Блуза с цветочным принтом",
        39.99,
        "Feminine Style",
        ['S', 'M', 'L', 'XL'],
        'M',
        10,
        new Date(),
        [],
        ["image15.jpg", "image16.jpg"]
    ));

    allProducts.push(new Product(
        9,
        "Шарф 'Winter Warmth'",
        "Теплый шершавый шарф",
        19.99,
        "Cold Weather Co.",
        ['One Size'],
        'One Size',
        40,
        new Date(),
        [],
        ["image17.jpg", "image18.jpg"]
    ));

    allProducts.push(new Product(
        10,
        "Пиджак 'Formal Elegance'",
        "Элегантный пиджак для официальных мероприятий",
        89.99,
        "Elegant Attire",
        ['M', 'L', 'XL'],
        'L',
        5,
        new Date(),
        [],
        ["image19.jpg", "image20.jpg"]
    ));

    allProducts.push(new Product(
        80,
        "Футболка 'Ш++ School'",
        "Зеленая футболка с логотипом школы Ш++",
        999.99,
        "Fashion Brand",
        ['S', 'M', 'L'],
        'M',
        20,
        new Date(),
        [],
        ["image1.jpg", "image2.jpg"]
    ));
    return allProducts;
}

function searchExt(products, search) {
    const result = [];
    for (const product of products) {
        const prodName = product.getName();
        const prodDes = product.getDescription();
        if (prodName.indexOf(search) !== -1 || prodDes.indexOf(search) !== -1) {
            result.push(product);
        }
    }
    return result;
}

function search(products, search) {
    const result = [];
    const isStarAtLastIndex = search.indexOf('*') === search.length - 1;
    let searchWord;
    isStarAtLastIndex ? searchWord = search.slice(0, -1) : searchWord = search;

    for (const product of products) {
        const productNameWords = product.getName().split(' ');
        const productDescriptionWords = product.getDescription().split(' ');

        if (!isStarAtLastIndex) {
            for (const word of productNameWords) {
                if (word.includes(searchWord) && word.length === searchWord.length) {
                    result.push(product);
                    break;
                }
            }

            for (const word of productDescriptionWords) {
                if (word.includes(searchWord) && word.length === searchWord.length) {
                    result.push(product);
                    break;
                }
            }
        } else {
            if (productNameWords.some(word => word.includes(searchWord))
                || productDescriptionWords.some(word => word.includes(searchWord))) {
                result.push(product);
            }
        }
    }
    return result
}
function sort(products, sortRule) {
    const correctRules = ["id", "name", "price"];
    if (!correctRules.includes(sortRule)) {
        console.log(`Incorrect sort rule ${sortRule}`);
        return;
    };
    let result = [].concat(products);
    switch (sortRule.toLowerCase()) {
        case "id": result.sort((a, b) => {
            return String(a.getID()).localeCompare(b.getID());
        });
            break
        case "name": result.sort((a, b) => {
            return a.getName().localeCompare(b.getName());
        });
            break;

        case "price": result.sort((a, b) => {
            return a.getPrice() - b.getPrice();
        });
    }
    return result;
}

// Main scope
createProducts();


console.log("----------Searcher!!!---------");
//console.log(searchExt(allProducts, "Фут"));
console.log(search(allProducts, "Фут*"));
console.log("----------Sorter1!!-----------");
console.log(sort(allProducts, "id"));
console.log("----------Sorter2!!-----------");
console.log(sort(allProducts, "name"));
console.log("----------Sorter3!!-----------");
console.log(sort(allProducts, "price"));