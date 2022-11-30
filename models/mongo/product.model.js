const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi')
const validateRequest = require('../../middlewares/validateRequest');

const ProductsSchema = new Schema({
    name: {
        type: String
    },
    stock: {
        type: Number
    },
    image: {
        type: String
    },
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    status: {
        type: Boolean,
        default: true
    }
});
const Products = mongoose.model('products', ProductsSchema);


const ValidateProducts = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(100).required()
            .messages({
                'string.empty': "Ingresa el Nombre  del producto",
                'string.min': "El nombre del producto debe ser mayor a 5 caracteres",
                'any.required': "Ingresa el Nombre  del producto"
            }),
        stock: Joi.number().integer().required()
            .messages({
                'number.empty': "Ingresa la cantidad de stock",
                'number.integer': "Ingresa la cantidad de stock",
                'any.required': "Ingresa la cantidad de stock"
            }),
        Category: Joi.string().required()
            .messages({
                'number.empty': "Ingresa la categoria del producto",
                'number.integer': "Ingresa la categoria del producto",
                'any.required': "Ingresa la categoria del producto"
            })
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    Products,
    ValidateProducts,
}