const { Category } = require('../../models/mongo/category.model');


const getCategory = async (req, res) => {
    const category = await Category.find();
    res.json(category);
}
const findByCategory = async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.json(category);
}
const UpdateByCategory = async (req, res) => {

    const { id } = req.params;
    await Category.updateOne({ _id: id }, req.body);
    res.json({ 'message': 'Datos Modificados' });
}
const deleteByCategory = async (req, res) => {
    const { id } = req.params;
    await Category.remove({ _id: id });
    res.json({ 'message': 'Datos Eliminados' });
}
const createCategory = async (req, res) => {
    const category = new Category(req.body);
    category.save();
    res.json(category);
}


module.exports = { getCategory, createCategory, findByCategory, UpdateByCategory, deleteByCategory }