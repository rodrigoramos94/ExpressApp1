var mongoose = require('mongoose');
import brand = require('../Scripts/Brands');
import product = require('../Scripts/Products');

// here will be stored the mongodb connection
var db;
var brand_model;
var product_model;

export function initializedMondoDB() {

    db = mongoose.createConnection();
    db.open("mongodb://heisenberg:Gemitis26@ds061374.mlab.com:61374/db_dreams");

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("MongoDB connection opened successfully!");
        initializedSchemas();
    });
}

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
        name: String,
        type: String,
        brand: String,
        short_description: String,
        description: String,
        colors: [String],
        formats: [String],
        website: String,
        las_update: { type: Date, default: Date.now }
    }, {
            collection: 'products'
        });

    brand_model = db.model('Brand', brandSchema);
    product_model = db.model('Product', productSchema);
}


// inserts a brand with the information passed
export function insertBrand(params) {
    var brand = new brand_model({
        name: params.name,
        creation_year: params.creation_year,
        country: params.country,
        short_description: params.short_description,
        specialities: params.specialities,
        description: params.description,
        website: params.website,
        fb_site: params.fb_site,
        yb_site: params.youtube,
        tw_site: params.twitter,
        in_site: params.instagram
    });

    brand.save(function (err) {
        if (err) console.log(err);
    });
}
// inserts a brand with the information passed
export function insertProduct(params) {
    var product = new product_model({
        name: params.name,
        type: params.type,
        brand: params.brand,
        short_description: params.short_description,
        description: params.description,
        colors: params.colors,
        formats: params.formats,
        website: params.website
    });

    product.save(function (err) {
        if (err) console.log(err);
    });
}


export function findBrands(res) {
    brand_model.find({}, function (err, results) {
        var brand_list = [];

        results.forEach(function (result) {
            brand_list.push(brand.getParameters(result._doc));
        });
        res.render('brands', { title: 'Brands Page', year: new Date().getFullYear(), brand_list: brand_list });
    });
}
export function findProducts(res) {
    product_model.find({}, (function (err, results) {
        var product_list = [];

        results.forEach(function (result) {
            product_list.push(product.getParameters(result._doc));
        });
        res.render('products', { title: 'Products Page', year: new Date().getFullYear(), product_list: product_list });
    }));
}