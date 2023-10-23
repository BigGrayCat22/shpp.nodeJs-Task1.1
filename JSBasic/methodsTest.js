"use strict"

import { Product, reviews } from './prototypes.js';

const product = new Product(
    "123",
    "Product 1",
    "Description 1",
    50.0,
    "Brand 1",
    ['S', 'M', 'L'],
    'M',
    100,
    new Date(),
    [],
    ["image1.jpg", "image2.jpg"]
);

const review = new reviews(
    "1",
    "John Doe",
    new Date(),
    "Great product!",
    {
        service: 5,
        price: 4,
        value: 5,
        quality: 4,
    }
);


console.log(`Product Name: ${product.getName()}`);
console.log(`Product Active Size: ${product.getActiveSize()}`);
console.log(`Product Quantity: ${product.getQuantity()}`);
console.log(`Product Images: ${product.getImages()}`);

console.log(`Review by ID: ${product.getReviewByID('1')}`);
console.log(`Product Average Rating: ${product.getAverageRating()}`);

product.addSize('XL');

const newReview = new reviews(
    "2",
    "Jane Smith",
    new Date(),
    "Not bad, but could be cheaper",
    {
        service: 4,
        price: 3,
        value: 4,
        quality: 3,
    }
);
product.addReview(review);
product.addReview(newReview);

console.log(`Product Sizes after adding XL: ${product.getSizes()}`);
console.log(`Product Reviews after adding a new review count: ${product.getReviews().length}`);


product.deleteSize('S');
//product.deleteReview(newReview);

console.log(`Product Sizes after deleting S: ${product.getSizes()}`);
console.log(`Product Reviews after deleting the new review count: ${product.getReviews().length}`);

console.log(`Review Author: ${review.getAuthor()}`);
console.log(`Review Date: ${review.getDate()}`);
console.log(`Review Comment: ${review.getComment()}`);
console.log(`Review Rating: ${Object.entries(review.rating)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ')}`);
console.log(`Review average rating: ${product.getAverageRating()}`);