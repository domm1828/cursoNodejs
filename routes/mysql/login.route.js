const express = require("express"); 
const loginRoutes = express.Router();
const authLogin=require("../../controllers/mysql/authController")

loginRoutes.post('/',authLogin);

module.exports=loginRoutes;