"use strict"
import { Clothes, Electronics, reviews } from "./prototypes.js";

// Created by GPT
const REVIEWS = [
    new reviews("1", "John Doe", new Date(), "Great product",
        { service: 5, price: 4, value: 5, quality: 5 }),
    new reviews("2", "Jane Smith", new Date(), "Excellent quality",
        { service: 5, price: 5, value: 4, quality: 5 }),
    new reviews("3", "Alice Johnson", new Date(), "Good value for money",
        { service: 4, price: 5, value: 5, quality: 4 }),
    new reviews("4", "Bob Wilson", new Date(), "Average product",
        { service: 3, price: 3, value: 3, quality: 3 }),
    new reviews("5", "Eve Brown", new Date(), "Terrible experience",
        { service: 2, price: 1, value: 1, quality: 2 }),
];
const CLOTHES = [
    new Clothes("1", "T-Shirt", "Comfortable cotton t-shirt", 15.99, 100,
        [REVIEWS[0], REVIEWS[1]], ["image1.jpg", "image2.jpg"], "2023-11-01", "Brand A",
        "Cotton", "Black", ["S", "M", "L"], "M"),
    new Clothes("2", "Jeans", "Classic denim jeans", 29.99, 50,
        [REVIEWS[2], REVIEWS[3]], ["image3.jpg", "image4.jpg"], "2023-11-01", "Brand B",
        "Denim", "Blue", ["30", "32", "34"], "32"),
    new Clothes("3", "Dress", "Elegant evening dress", 49.99, 30,
        [REVIEWS[0], REVIEWS[4]], ["image5.jpg", "image6.jpg"], "2023-11-01", "Brand C",
        "Silk", "Red", ["S", "M", "L"], "S"),
    new Clothes("4", "Hoodie", "Cozy hoodie for cold days", 34.99, 80,
        [REVIEWS[1], REVIEWS[3]], ["image7.jpg", "image8.jpg"], "2023-11-01", "Brand D",
        "Cotton", "Gray", ["M", "L", "XL"], "L"),
    new Clothes("5", "Shorts", "Casual shorts for summer", 19.99, 60,
        [REVIEWS[2], REVIEWS[4]], ["image9.jpg", "image10.jpg"], "2023-11-01", "Brand E",
        "Cotton", "Blue", ["S", "M", "L"], "M"),
    new Clothes("6", "Sweater", "Warm wool sweater", 39.99, 40,
        [REVIEWS[0], REVIEWS[3]], ["image11.jpg", "image12.jpg"], "2023-11-01", "Brand F",
        "Wool", "Green", ["M", "L", "XL"], "M"),
    new Clothes("7", "Jacket", "Stylish leather jacket", 79.99, 20,
        [REVIEWS[1], REVIEWS[4]], ["image13.jpg", "image14.jpg"], "2023-11-01", "Brand G",
        "Leather", "Black", ["M", "L", "XL"], "L"),
];

const ELECTRONIX = [
    new Electronics("11", "Smartphone", "High-end smartphone", 699.99, 20,
        [REVIEWS[0], REVIEWS[1]], ["image15.jpg", "image16.jpg"], "2023-11-01",
        "Brand X", 12, 2000),
    new Electronics("2", "Laptop", "Powerful laptop", 1299.99, 10,
        [REVIEWS[2], REVIEWS[3]], ["image17.jpg", "image18.jpg"], "2023-11-01",
        "Brand Y", 24, 1500),
    new Electronics("13", "Headphones", "Noise-cancelling headphones", 199.99, 50,
        [REVIEWS[4], REVIEWS[0]], ["image19.jpg", "image20.jpg"], "2023-11-01",
        "Brand Z", 12, 50),
    new Electronics("1", "Tablet", "Portable tablet", 299.99, 30,
        [REVIEWS[1], REVIEWS[2]], ["image21.jpg", "image22.jpg"], "2023-11-01",
        "Brand W", 24, 800),
];

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


console.log("Expected:", "Cotton");
console.log("Actual:", CLOTHES[0].getMaterial());

console.log("Expected:", "Blue");
console.log("Actual:", CLOTHES[1].getColor());

console.log("Expected:", ["S", "M", "L",]);
console.log("Actual:", CLOTHES[2].getSizes());

console.log("Expected:", "L");
console.log("Actual:", CLOTHES[3].getActiveSize());

// Тестирование сеттеров и геттеров объектов Electronics
console.log("Expected:", 12);
console.log("Actual:", ELECTRONIX[0].getWarranty());

console.log("Expected:", 1500);
console.log("Actual:", ELECTRONIX[1].getPower());

console.log("===================");
console.log("Before adding new review:", CLOTHES[4].getReviews().length);
CLOTHES[4].addReview(new reviews("6", "Sam Johnson", new Date(), "Nice shorts",
    { service: 5, price: 4, value: 5, quality: 4 }));
console.log("After adding:", CLOTHES[4].getReviews().length);

console.log("===================");
console.log("Before deleting review:", CLOTHES[5].getReviews().length);
CLOTHES[5].deleteReview(REVIEWS[0]);
console.log("After deleting review:", CLOTHES[5].getReviews().length);
console.log("===================");

console.log("Expected: 3",);
console.log("Actual:", CLOTHES[5].getAverageRating());

console.log("===================");
console.log("Before adding new review:", ELECTRONIX[2].getReviews().length);
ELECTRONIX[2].addReview(new reviews("7", "Lucy White", new Date(), "Good headphones", { service: 4, price: 4, value: 4, quality: 5 }));
console.log("After adding:", ELECTRONIX[2].getReviews().length);

console.log("===================");
console.log("Before deleting review:", ELECTRONIX[3].getReviews().length);
ELECTRONIX[3].deleteReview(REVIEWS[2]);
console.log("After deleting review:", ELECTRONIX[3].getReviews().length);
console.log("===================");

console.log("Expected: 4.75",);
console.log("Actual:", ELECTRONIX[3].getAverageRating());

console.log("----------Searcher!!!---------");
console.log(search(CLOTHES, "sh*"));

console.log("----------Sorter1!!-----------");
console.log(sort(ELECTRONIX, "id"));
console.log("===================");
console.log("----------Sorter2!!-----------");
console.log(sort(CLOTHES, "name"));
console.log("===================");
console.log("----------Sorter3!!-----------");
console.log(sort(ELECTRONIX, "price"));