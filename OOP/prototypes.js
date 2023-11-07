"use strict"

export { Clothes, Electronics, reviews }

/**
 *  AbstractProduct Prototype constructor
 * @param {string} ID           Product ID. (unique value)
 * @param {string} name         Name of Product
 * @param {string} description  Short product description
 * @param {number} price        Product price
 * @param {number} quantity     Product quantity
 * @param {object[]} reviews    Buyer review's
 * @param {string[]} images     Product images
 * @param {string} date         Date of operation
 * @param {string} brand        Name of Brand
 
 */
function AbstractProduct(ID, name, description, price, quantity, reviews, images, date, brand) {
    if (this.constructor === AbstractProduct) {
        throw new Error("You can`t create AbstractProduct class example." +
            " \nThis class is abstract")
    }
    this.ID = ID || "";
    this.name = name || "";
    this.description = description || "";
    this.price = price || 0;
    this.quantity = quantity || 0;
    this.reviews = reviews || [];
    this.images = images || [];
    this.date = date || "";
    this.brand = brand || "";

};

/**
 * Getters and Setters section of class AbstractProduct
 */
const settersAndGettersAbstractProduct = {
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
    getQuantity: function () {
        return this.quantity;
    },
    setQuantity: function (quantity) {
        this.quantity = quantity;
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
    getDate: function () {
        return this.date;
    },
    setDate: function (date) {
        this.date = date;
    },
    getBrand: function () {
        return this.brand;
    },
    setBrand: function (brand) {
        this.brand = brand;
    },
};

/**
 * Methods of AbstractProduct Prototype.
 * 
 * @method getReviewByID        Return's review for entered key
 * @method getImage             Return image by index in images array
 * @method addSize              Add new value to sizes array "sizes"
 * @method deleteSize           Delete value from array "sizes"
 * @method addReview            Add review to array "reviews"
 * @method deleteReview         Delete review from array "reviews"
 * @method getAverageRating     Return average rating of product
 * @method getFullInformation   Print to console full information about item 
 * @method getPriceForQuantity  Calculates amount for several products
 
 */
const methodsAbstractProduct = {
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
        };
        return (averageServiceRating + averagePriceRating + averageValueRating + averageQualityRating) / 4;
    },
    getFullInformation() {
        console.log(` ID = ${this.ID} `);
        console.log(` Name = ${this.name} `);
        console.log(` Description = ${this.description} `);
        console.log(` Price = ${this.price} `);
        console.log(` Quantity = ${this.quantity} `);
        console.log(` Reviews = ${this.reviews} `);
        console.log(` Images = ${this.images} `);
        console.log(` Date = ${this.date} `);
        console.log(` Brand = ${this.brand} `);
    },
    getPriceForQuantity(quantity) {
        if (Number.isInteger(quantity)) {
            return this.price * quantity;
        } else {
            throw new Error("quantity value in method getPriceForQuantity() is not a number! ")
        }
    },
    universalGetterSetter(propertyName, value) {
        if (propertyName in this) {
            if (typeof value === 'undefined') {
                return this[propertyName];
            } else {
                this[propertyName] = value;
            }
        } else {
            console.log(`Property '${propertyName}' does not exist.`);
        }
    }
};

Object.assign(AbstractProduct.prototype, settersAndGettersAbstractProduct);
Object.assign(AbstractProduct.prototype, methodsAbstractProduct);


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

// Getters and setters section of reviews prototype
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
/**
 * 
 * @param {string} ID           Product ID. (unique value)
 * @param {string} name         Name of Product
 * @param {string} description  Short product description
 * @param {number} price        Product price
 * @param {number} quantity     Product quantity
 * @param {object[]} reviews    Buyer review's
 * @param {string[]} images     Product images
 * @param {string} date         Date of operation
 * @param {string} brand        Name of Brand  
 * @param {string} material     Material of item
 * @param {string} color        Color of item
 * @param {Array} sizes        Size of item
 * @param {string} activeSize   ActiveSizes of item
 */
function Clothes(ID, name, description, price, quantity, reviews, images, date, brand,
    material, color, sizes, activeSize) {
    AbstractProduct.call(this, ID, name, description, price, quantity, reviews, images, date, brand)
    this.material = material || "";
    this.color = color || "";
    this.sizes = sizes || [];
    this.activeSize = activeSize || "";
}

const settersAndGettersClothes = {
    getMaterial: function () {
        return this.material;
    },
    setMaterial: function (material) {
        this.material = material;
    },
    getColor: function () {
        return this.color;
    },
    setColor: function (color) {
        this.color = color;
    },
    getSizes: function () {
        return this.sizes;
    },
    setSizes: function (sizes) {
        this.material = sizes;
    },
    getActiveSize: function () {
        return this.activeSize;
    },
    setActiveSize: function (activeSize) {
        this.activeSize = activeSize;
    },
}
Clothes.prototype = Object.create(AbstractProduct.prototype);
Clothes.prototype.constructor = Clothes;
Object.assign(Clothes.prototype, settersAndGettersClothes);


/**
 * 
 * @param {string} ID           Product ID. (unique value)
 * @param {string} name         Name of Product
 * @param {string} description  Short product description
 * @param {number} price        Product price
 * @param {number} quantity     Product quantity
 * @param {object[]} reviews    Buyer review's
 * @param {string[]} images     Product images
 * @param {string} date         Date of operation
 * @param {string} brand        Name of Brand   
 * @param {number} warranty     Warranty of item
 * @param {number} power        Power of item
 */
function Electronics(ID, name, description, price, quantity, reviews, images, date, brand,
    warranty, power) {
    AbstractProduct.call(this, ID, name, description, price, quantity, reviews, images, date, brand)
    this.warranty = warranty || 0;
    this.power = power || 0;
}
const settersAndGettersElectronics = {
    getWarranty: function () {
        return this.warranty;
    },

    setWarranty: function (warranty) {
        this.warranty = warranty;
    },

    getPower: function () {
        return this.power;
    },

    setPower: function (power) {
        this.power = power;
    }
}
Electronics.prototype = Object.create(AbstractProduct.prototype);
Electronics.prototype.constructor = Electronics;
Object.assign(Electronics.prototype, settersAndGettersElectronics);
