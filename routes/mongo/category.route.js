const express = require("express"); 
const category = express.Router();
const controller = require("../../controllers/mongo/categoryController");
const { ValidateCategory } = require("../../models/mongo/category.model");
  

category.get('/', controller.getCategory);
category.post('/',ValidateCategory,controller.createCategory);
category.get('/:id', controller.findByCategory);
category.put('/:id',controller.UpdateByCategory);
category.delete('/:id',controller.deleteByCategory);


module.exports=category;