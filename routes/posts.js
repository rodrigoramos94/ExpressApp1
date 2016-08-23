"use strict";
const mongo = require('../databases/mongodb');
const brands = require('../Scripts/Brands');
const products = require('../Scripts/Products');
const security = require('../Scripts/security');
function create_brand(req, res) {
    if (security.proveCookie(req.headers)) {
        mongo.insertBrand(brands.getParameters(req.body));
        res.redirect("/new_brand");
    }
    else {
        res.redirect("/restricted_area");
    }
}
exports.create_brand = create_brand;
;
function create_product(req, res) {
    if (security.proveCookie(req.headers)) {
        mongo.insertProduct(products.getParameters(req.body));
        res.redirect("/new_product");
    }
    else {
        res.redirect("/restricted_area");
    }
}
exports.create_product = create_product;
;
