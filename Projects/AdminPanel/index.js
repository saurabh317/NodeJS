// modules
import express from 'express';
import path from "path";

// controllers
import { ProductsController } from './src/controllers/products.controller.js';
import { UserController } from './src/controllers/user.controller.js';

// middlewares
import ejsLayout from "express-ejs-layouts";
import addProductValidate from './src/middlewares/addProductValidationMiddleware.js';
import { uploadFile } from './src/middlewares/fileUploadMiddleware.js';

const productController = new ProductsController();
const UsersController = new UserController();

const server = express();

// make the server aware about the view template engine
server.set("view engine", 'ejs');
server.set("views", path.join(path.resolve('src', 'views')));

server.use(ejsLayout);
// form data parser
server.use(express.urlencoded({extended: true}));

server.use(express.static('src/views'));
server.use(express.static('Public'));
server.get('/', productController.getAllProducts);
server.get('/new', productController.getAddForm);
server.get('/update/:id', productController.getUpdateProductView);
server.post('/delete/:id', productController.deleteProductFromList);
server.get('/register', UsersController.getRegisterForm);
server.get('/login', UsersController.getLoginForm);

server.post('/', [uploadFile.single('imageUrl'), addProductValidate, productController.addNewProduct]);
server.post('/update', [uploadFile.single('imageUrl'), productController.updateProductDetails]);
server.post('/register', UsersController.postRegister)
server.post('/login', UsersController.postLogin)

server.listen(3400, () => console.log("server has started"));