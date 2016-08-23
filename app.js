"use strict";
const express = require('express');
const get_routes = require('./routes/index');
const post_routes = require('./routes/posts');
const mongodb = require('./databases/mongodb');
const http = require('http');
const path = require('path');
var app = express();
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
const stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
// GETS
app.get('/', get_routes.index);
app.get('/viva_hispania722', get_routes.espania);
app.get('/brands', get_routes.brands);
app.get('/products', get_routes.products);
app.get('/new_brand', get_routes.new_brand);
app.get('/new_product', get_routes.new_product);
app.get('/about', get_routes.about);
app.get('/contact', get_routes.contact);
app.get('/restricted_area', get_routes.not_access);
// POSTS
app.post('/create_brand', post_routes.create_brand);
app.post('/create_product', post_routes.create_product);
// create server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
mongodb.initializedMondoDB();
