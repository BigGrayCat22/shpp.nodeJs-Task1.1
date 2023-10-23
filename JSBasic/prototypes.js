'use strict'

export { Product, reviews };

/**
 * Product Prototype Constructor
 * 
 * @param {string} ID           Product ID. (unique value)
 * @param {string} name         Name of Product
 * @param {string} description  Short product description
 * @param {number} price        Product price
 * @param {string} brand        Name of Brand
 * @param {string[]} sizes      Array of probably sizes
 * @param {string} activeSize   Active size
 * @param {number} quantity     Product quantity
 * @param {Date {date(YYYY-MM-dd hh:mm:ss)}} Date of operation
 * @param {object[]} reviews    Buyer review's
 * @param {string[]} images     Product images
 */

function Product(ID, name, description, price, brand, sizes, activeSize,
    quantity, date, reviews, images) {
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;
}

// Getters and setters section of Product Prototype
const settersAndGetterProduct = {
    getID: function () {
        return this.ID;
    },
    setID: function (ID) {
        this.ID = ID;
    },
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    },
    getDescription: function () {
        return this.description;
    },
    setDescription: function (description) {
        this.description = description;
    },
    getPrice: function () {
        return this.price;
    },
    setPrice: function (price) {
        this.price = price;
    },
    getBrand: function () {
        return this.brand;
    },
    setBrand: function (brand) {
        this.brand = brand;
    },
    getSizes: function () {
        return this.sizes;
    },
    setSizes: function (sizes) {
        this.sizes = sizes;
    },
    getActiveSize: function () {
        return this.activeSize;
    },
    setActiveSize: function (activeSize) {
        this.activeSize = activeSize;
    },
    getQuantity: function () {
        return this.quantity;
    },
    setQuantity: function (quantity) {
        this.quantity = quantity;
    },
    getDate: function () {
        return this.date;
    },
    setDate: function (date) {
        this.date = date;
    },
    getReviews: function () {
        return this.reviews;
    },
    setReviews: function (reviews) {
        this.reviews = reviews;
    },
    getImages: function () {
        return this.images;
    },
    setImages: function (images) {
        this.images = images;
    },
};

/**  Methods of Product Prototype.
 * 
 * @method getReviewByID        Return's review for entered key
 * @method getImage             Return image by index in images array
 * @method addSize              Add new value to sizes array "sizes"
 * @method deleteSize           Delete value from array "sizes"
 * @method addReview            Add review to array "reviews"
 * @method deleteReview         Delete review from array "reviews"
 * @method getAverageRating     Return average rating of product
*/
const methodsProduct = {
    getReviewByID(id) {
        for (const review of this.reviews) {
            if (review.getID === id) {
                return review;
            }
        }
    },

    getImage(imageIndex) {
        if (imageIndex == undefined) {
            return this.images[0];
        }
        return this.images[imageIndex];
    },

    addSize(size) {
        this.sizes.push(size);
    },

    deleteSize(size) {
        let index = this.sizes.indexOf(size);
        if (index != -1) {
            this.sizes.splice(index, 1);
        }
    },

    addReview(review) {
        this.reviews.push(review);
    },

    deleteReview(review) {
        let index = this.reviews.indexOf(review);
        this.reviews.splice(index, 1);
    },

    getAverageRating() {
        let averageServiceRating = 0;
        let averagePriceRating = 0;
        let averageValueRating = 0;
        let averageQualityRating = 0;
        const reviewCount = this.reviews.length;
        for (const review of this.reviews) {
            if (review.rating.service != undefined) {
                averageServiceRating += review.rating.service / reviewCount;

            }
            if (review.rating.price != undefined) {
                averagePriceRating += review.rating.price / reviewCount;
            }
            if (review.rating.value != undefined) {
                averageValueRating += review.rating.value / reviewCount;
            }
            if (review.rating.quality != undefined) {
                averageQualityRating += review.rating.quality / reviewCount;
            }

            return (averageServiceRating + averagePriceRating + averageValueRating + averageQualityRating) / 4;
        };
    },

}
Object.assign(Product.prototype, settersAndGetterProduct);
Object.assign(Product.prototype, methodsProduct);

/**
 * review Prototype Constructor
 * 
 * @param {String}              ID
 * @param {String}              author
 * @param {Date {date(YYYY-MM-dd hh:mm:ss)}} date
 * @param {String}              comment
 * @param {Associate Array - rating['key']=value key one of 'service', 'price', 'value', 'quality'} rating
 */

function reviews(ID, author, date, comment, rating) {
    this.ID = ID;
    this.author = author;
    this.date = new Date;
    this.comment = comment;
    this.rating = rating;
};

// Getters and setters section
reviews.prototype = {
    getID: function () {
        return this.ID;
    },

    getAuthor: function () {
        return this.author;
    },

    getDate: function () {
        return this.date;
    },

    getComment: function () {
        return this.comment;
    },

    getRating: function () {
        return this.rating;
    }
};
