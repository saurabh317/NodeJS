import path from 'path';
import ProductsModel from '../models/products.models.js';

export class ProductsController {

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
    return res.redirect('/')
  }

  getUpdateProductView(req, res){
    const { id } = req.params
    const { product, found } = ProductsModel.getProductById(id)
    const params = {
      id,
      errorMessage : null,
      product
    }

    // if product is there show the update product view
    if (found) {
      res.render("update-product", params)
    } else {
      res.status(401).send("product not found")
    }
  }

  updateProductDetails(req, res) {
    const id = req.body.productId;
    ProductsModel.updateProduct(id , req.body)
    return res.redirect('/')
  }

  deleteProductFromList(req, res) {
    const { id } = req.params
    console.log(id)
    ProductsModel.deleteProduct(id)
    console.log(id)
    return res.redirect('/')
  }
}