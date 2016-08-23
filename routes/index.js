"use strict";
const route_gets = require('./gets');
const route_posts = require('./posts');
function espania(req, res) { route_gets.espania(req, res); }
exports.espania = espania;
;
function index(req, res) { route_gets.index(req, res); }
exports.index = index;
;
function brands(req, res) { route_gets.brands(req, res); }
exports.brands = brands;
;
function products(req, res) { route_gets.products(req, res); }
exports.products = products;
;
function new_brand(req, res) { route_gets.new_brand(req, res); }
exports.new_brand = new_brand;
;
function new_product(req, res) { route_gets.new_product(req, res); }
exports.new_product = new_product;
;
function about(req, res) { route_gets.about(req, res); }
exports.about = about;
;
function contact(req, res) { route_gets.contact(req, res); }
exports.contact = contact;
;
function not_access(req, res) { route_gets.not_access(req, res); }
exports.not_access = not_access;
;
function create_brand(req, res) { route_posts.create_brand(req, res); }
exports.create_brand = create_brand;
;
function create_product(req, res) { route_posts.create_product(req, res); }
exports.create_product = create_product;
;
