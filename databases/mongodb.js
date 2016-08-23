"use strict";
var mongoose = require('mongoose');
// here will be stored the mongodb connection
var db;
var brand_model;
var product_model;
function initializedMondoDB() {
    db = mongoose.createConnection();
    db.open("mongodb://heisenberg:Gemitis26@ds061374.mlab.com:61374/db_dreams");
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("MongoDB connection opened successfully!");
        initializedSchemas();
    });
}
exports.initializedMondoDB = initializedMondoDB;
// inserts a brand with the information passed
function insertBrand(params) {
    db.collection('brands').insert(params);
}
exports.insertBrand = insertBrand;
// inserts a brand with the information passed
function insertProduct(params) {
    db.collection('products').insert(params);
}
exports.insertProduct = insertProduct;
// creates schemas for brands and products
function initializedSchemas() {
    var brandSchema = mongoose.Schema({
        name: String,
        creation_year: Number,
        country: String,
        short_description: String,
        specialities: [String],
        description: String,
        website: String,
        fb_site: String,
        yb_site: String,
        tw_site: String,
        in_site: String,
        las_update: { type: Date, default: Date.now }
    }, {
        collection: 'brands'
    });
    var productSchema = mongoose.Schema({
        las_update: { type: Date, default: Date.now }
    }, {
        collection: 'products'
    });
    brand_model = db.model('Brand', brandSchema);
    product_model = db.model('Product', productSchema);
}
