const express = require("express");
const uploadMulter = require("../../config/multer.config");
const product = express.Router();
const controller = require("../../controllers/mongo/productsController");
const { ValidateProducts } = require("../../models/mongo/product.model");


product.get('/', controller.getProducts);
product.post('/',[uploadMulter.single('image'),ValidateProducts],controller.createProducts);
product.get('/:id', controller.findByProducts);
product.put('/:id',controller.UpdateByProducts);
product.delete('/:id',controller.deleteByProducts);


module.exports=product;