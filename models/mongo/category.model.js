const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi')
const validateRequest = require('../../middlewares/validateRequest');

const CategorySchema = new Schema({
    name: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
});
const Category = mongoose.model('category', CategorySchema);
const ValidateCategory = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(100).required()
            .messages({
                'string.empty': "Ingresa el Nombre  de la categoria",
                'string.min': "El nombre de la categoria debe ser mayor a 5 caracteres",
                'any.required': "Ingresa el Nombre  de la categoria"
            })
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    Category,
    ValidateCategory,
}