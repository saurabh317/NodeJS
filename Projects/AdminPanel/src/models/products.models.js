export default class ProductsModel {
  constructor(_id, _name, _desc, _price, _imgUrl){
    this.id = _id,
    this.name = _name,
    this.desc = _desc,
    this.imgUrl = _imgUrl
  }
  static get(){
    return products
  }
  static addNewProductInTheList({ name, desc, price, imageUrl }){
    const newProductId = products.length + 1
    const product = new ProductsModel(newProductId, name, desc, price, imageUrl)
    products.push(product)
    return products
  }
  static getProductById(id){
    const index = products.findIndex((product) => product.id === +id)
    if(index < 0) {
      return { product: products[index], found: false }
    } else {
      return { product: products[index], found: true }
    }
  }

  static deleteProduct(id){
   const newProducts = products.filter((product) => product.id !== +id)
   products = newProducts
  //  console.log(newProducts)
  }
}
var products = [
  new ProductsModel(
    1,
    'Product 1',
    'Description for Product 1',
    19.99,
    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
  ),
  new ProductsModel(
    2,
    'Product 2',
    'Description for Product 2',
    29.99,
    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
  ),
  new ProductsModel(
    3,
    'Product 3',
    'Description for Product 3',
    39.99,
    'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
  ),
]