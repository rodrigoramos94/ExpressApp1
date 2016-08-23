/*
 * POST home page.
 */
import express = require('express');
import mongo = require('../databases/mongodb');
import brands = require('../Scripts/Brands');
import products= require('../Scripts/Products');
import security = require('../Scripts/security');

export function create_brand(req: express.Request, res: express.Response) {
    if (security.proveCookie(req.headers)) {
        mongo.insertBrand(brands.getParameters(req));
        res.redirect("/new_brand");
    } else {
        res.redirect("/restricted_area");
    }
};

export function create_product(req: express.Request, res: express.Response) {
    if (security.proveCookie(req.headers)) {
        mongo.insertProduct(products.getParameters(req));
        res.redirect("/new_product");
    } else {
        res.redirect("/restricted_area");
    }
};
