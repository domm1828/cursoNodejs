const express = require("express");
const router = express.Router();
const {getUsers,createUser,findByUser,UpdateByUser,deleteByUser} = require('../controllers/userController');


/**Get all users */
router.get('/', getUsers);
router.post('/',createUser);
router.get('/:id', findByUser);
router.put('/:id',UpdateByUser);
router.delete('/:id',deleteByUser);

module.exports=router;