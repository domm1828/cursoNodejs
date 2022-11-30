const mysqlProductRouter= require("./mysql/product.route");
const mysqlCategoryRouter= require("./mysql/category.route");
const mysqlUsersRouter= require("./mysql/users.route");


const mongoUserRouter = require('./mongo/users.route');
const mongoProductRouter= require("./mongo/products.route");
const mongoCategoryRouter= require("./mongo/category.route");
const express = require("express");
const indexRoutes = express.Router();

indexRoutes.use('/mongo/users',mongoUserRouter);
indexRoutes.use('/mongo/product',mongoProductRouter);
indexRoutes.use('/mongo/category',mongoCategoryRouter);

indexRoutes.use('/mysql/product',mysqlProductRouter);
indexRoutes.use('/mysql/category',mysqlCategoryRouter);
indexRoutes.use('/mysql/users',mysqlUsersRouter);

module.exports=indexRoutes;