const { Products } = require('../../models/mongo/product.model');


const getProducts = async (req, res) => {
    const products = await Products.find({}).populate('Category');
    res.json(products);
}
const findByProducts = async (req, res) => {
    const { id } = req.params;
    const products = await Products.findById(id).populate('Category');
    res.json(products);
}
const UpdateByProducts = async (req, res) => {

    const { id } = req.params;
    await Products.updateOne({ _id: id }, req.body);
    res.json({ 'message': 'Datos Modificados' });
}
const deleteByProducts = async (req, res) => {
    const { id } = req.params;
    await Products.remove({ _id: id });
    res.json({ 'message': 'Datos Eliminados' });
}
const createProducts = async (req, res) => {
    if (req.file === null) {
        return res.status(400).send({ message: 'No file was uploaded' });
    }
    const url = req.protocol + '://' + req.get('host')
    const urlImage = url + '/upload/' + req.file.filename;
    const modelData = {
        name: req.body.name,
        stock: req.body.stock,
        image: urlImage,
        Category: req.body.Category
    }

    const products = new Products(modelData);
    products.save();
    res.json(products);
}


module.exports = { getProducts, createProducts, findByProducts, UpdateByProducts, deleteByProducts }