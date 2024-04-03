import path from 'path';
import ProductsModel from '../models/products.models.js';

export class ProductsController {
  // this will return all the products available
  getAllProducts(req, res){
    const products = ProductsModel.get()
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

  getUpdateProductView(req, res){
    const { id } = req.params
    const { product, found } = ProductsModel.getProductById(id)
    console.log(found, product)
    // if product is there show the update product view
    if (found) {
      res.render("update-product", {errorMessage : null})
    } else { // else return the error
      res.status(401).send("product not found")
    }
  }

  deleteProductFromList(req, res) {
    const { id } = req.params
    ProductsModel.deleteProduct(id)
    const products = ProductsModel.get()
    return res.render("products", { products })
  }
}