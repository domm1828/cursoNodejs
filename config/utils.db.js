const { Category } = require("../models/mysql/category.model");
const { Products } = require("../models/mysql/product.model");
const { User } = require("../models/mysql/user.model");
const databaseMysql = require("./mysql.config");
const Role = require("../models/mysql/role.model");

const dbConfig = require('./database.config.js');
const mongose = require('mongoose');

Products.belongsTo(Category, {
  foreignKey: "Category",
  as: "categories",
}); 
User.belongsTo(Role, {
  foreignKey: "role",
  as: "rols",
}); 

Role.sync();
Category.sync();
User.sync();
Products.sync();
 
databaseMysql.sync().then(()=>{
 /* Role.create({ id:1, name: "comun"});
  Role.create({ id:2, name: "premiun"});*/
});
 
/**Cadena conexion con mongo */
mongose.connect(dbConfig.url)
    .then(() => console.log("Conect MongoDB"))
    .catch((err) => {
        console.error(err)
    });
/**Fin de cadena conexion */ 
mongose.set('strictPopulate', false);