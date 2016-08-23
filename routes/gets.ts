import express = require('express');
import mongo = require('../databases/mongodb');
import security = require('../Scripts/security');
import brand = require('../Scripts/Brands');
import product = require('../Scripts/Products');


export function espania(req: express.Request, res: express.Response) {
    security.setCookie(res);
    res.render('index', { title: 'Home Page', year: new Date().getFullYear() });
};

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Home Page', year: new Date().getFullYear() });
};

export function brands(req: express.Request, res: express.Response) {
    mongo.findBrands(res);
};

export function products(req: express.Request, res: express.Response) {
    mongo.findProducts(res);
};

export function new_brand(req: express.Request, res: express.Response) {
    if (security.proveCookie(req.headers)) {
        res.render('new_brand', {
            title: 'New Brand',
            year: new Date().getFullYear(),
            specialities: product.types,
            countries: brand.countries,
        });
    }else
        res.redirect("/restricted_area");
};

export function new_product(req: express.Request, res: express.Response) {
    if (security.proveCookie(req.headers))
        res.render('new_product', {
            title: 'New Product',
            year: new Date().getFullYear(),
            types: product.types,
            brand_list: product.brands
        });
    else
        res.redirect("/restricted_area");
};

export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Application description page' });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Contact page' });
};

export function not_access(req: express.Request, res: express.Response) {
    res.render('not_access', { year: new Date().getFullYear()});
};

