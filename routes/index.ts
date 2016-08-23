/*
 * GET home page.
 */
import express = require('express');
import route_gets = require('./gets');
import route_posts = require('./posts');

export function espania(req: express.Request, res: express.Response) { route_gets.espania(req, res); };
export function index(req: express.Request, res: express.Response) {route_gets.index(req, res);};
export function brands(req: express.Request, res: express.Response) {route_gets.brands(req, res);};
export function products(req: express.Request, res: express.Response) {route_gets.products(req, res);};
export function new_brand(req: express.Request, res: express.Response) {route_gets.new_brand(req, res);};
export function new_product(req: express.Request, res: express.Response) {route_gets.new_product(req, res);};
export function about(req: express.Request, res: express.Response) {route_gets.about(req, res);};
export function contact(req: express.Request, res: express.Response) { route_gets.contact(req, res); };
export function not_access(req: express.Request, res: express.Response) { route_gets.not_access(req, res); };

export function create_brand(req: express.Request, res: express.Response) { route_posts.create_brand(req, res); };
export function create_product(req: express.Request, res: express.Response) { route_posts.create_product(req, res); };