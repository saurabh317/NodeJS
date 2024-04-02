import path from 'path';
import ProductsModel from '../models/products.models.js';

export class ProductsController {
  // this will return all the products available
  getAllProducts(req, res){
    const products = ProductsModel.get()
    console.log(ProductsModel.get())
    res.render("products", { products: products })

    // down here as we are no longer rendering html so getting rid of it
    // console.log(path.resolve('src', 'views', 'products.html'))
    // res.sendFile(path.join(path.resolve('src', 'views', 'products.html')))
  }

  getAddForm(req, res){
    return res.render("newProduct", { errorMessage: null })
  }

  addNewProduct(req, res){
    ProductsModel.addNewProductInTheList(req.body)
    const products = ProductsModel.get()
    return res.render("products", { products })
  }
}