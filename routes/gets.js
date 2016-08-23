"use strict";
const mongo = require('../databases/mongodb');
const security = require('../Scripts/security');
const brand = require('../Scripts/Brands');
const product = require('../Scripts/Products');
function espania(req, res) {
    security.setCookie(res);
    res.render('index', { title: 'Home Page', year: new Date().getFullYear() });
}
exports.espania = espania;
;
function index(req, res) {
    res.render('index', { title: 'Home Page', year: new Date().getFullYear() });
}
exports.index = index;
;
function brands(req, res) {
    mongo.findBrands(res);
}
exports.brands = brands;
;
function products(req, res) {
    mongo.findProducts(res);
}
exports.products = products;
;
function new_brand(req, res) {
    if (security.proveCookie(req.headers)) {
        res.render('new_brand', {
            title: 'New Brand',
            year: new Date().getFullYear(),
            specialities: product.types,
            countries: brand.countries,
        });
    }
    else
        res.redirect("/restricted_area");
}
exports.new_brand = new_brand;
;
function new_product(req, res) {
    if (security.proveCookie(req.headers))
        res.render('new_product', {
            title: 'New Product',
            year: new Date().getFullYear(),
            types: product.types,
            brand_list: product.brands
        });
    else
        res.redirect("/restricted_area");
}
exports.new_product = new_product;
;
function about(req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Application description page' });
}
exports.about = about;
;
function contact(req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Contact page' });
}
exports.contact = contact;
;
function not_access(req, res) {
    res.render('not_access', { year: new Date().getFullYear() });
}
exports.not_access = not_access;
;
