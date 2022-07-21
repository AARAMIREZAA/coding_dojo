// const ProductController = require('../controllers/product.controller');
// module.exports = function(app){
//     app.get('/api', ProductController.index);
//     app.post('/api/product', ProductController.createProduct);
//     app.get('/api/product', ProductController.getAllProduct);
//     app.get('/api/product/:id', ProductController.getProduct);


// }

// IMPORT CONTROLLER
const productManagerController = require("../controllers/productManager.controllers")

// DEFINE ROUTES
module.exports = (app) => {
    app.post("/api/products", productManagerController.createProduct)
    app.get("/api/products", productManagerController.getAllProducts)
    app.get("/api/products/:product_id", productManagerController.getOneProduct)
    app.put("/api/products/:product_id", productManagerController.updateProduct)
    app.delete("/api/products/:product_id", productManagerController.destroyProduct)
}


