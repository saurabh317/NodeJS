import express from 'express';
import { ProductsController } from './src/controllers/products.controller.js';
import path from "path";
import ejsLayout from "express-ejs-layouts";// this is a middleware

const controller = new ProductsController;

const server = express();

// make the server aware about the view template engine
server.set("view engine", 'ejs')
server.set("views", path.join(path.resolve('src', 'views')))

server.use(ejsLayout)

server.use(express.static('src/views'));
server.get('/', controller.getAllProducts);

server.listen(3400, ()=> console.log("server has started"));