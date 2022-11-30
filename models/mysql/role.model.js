var Sequelize = require('sequelize');
var sequelize = require('../../config/mysql.config');

const Joi = require('joi')
var Role = sequelize.define('rol', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING
});
module.exports = Role;