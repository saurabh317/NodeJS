import express from 'express';
import { ProductsController } from './src/controllers/products.controller.js';
import path from "path";
import ejsLayout from "express-ejs-layouts"; // this is a middleware
import addProductValidate from './src/middlewares/addProductValidationMiddleware.js';
import { uploadFile } from './src/middlewares/fileUploadMiddleware.js';

const controller = new ProductsController;

const server = express();

// make the server aware about the view template engine
server.set("view engine", 'ejs');
server.set("views", path.join(path.resolve('src', 'views')));

server.use(ejsLayout);
// form data parser
server.use(express.urlencoded({extended: true}));

server.use(express.static('src/views'));
server.use(express.static('Public'));
server.get('/', controller.getAllProducts);
server.get('/new', controller.getAddForm);
server.get('/update/:id', controller.getUpdateProductView);
server.post('/delete/:id', controller.deleteProductFromList);

server.post('/', [uploadFile.single('imageUrl'), addProductValidate, controller.addNewProduct]);
server.post('/update', controller.updateProductDetails);

server.listen(3400, () => console.log("server has started"));