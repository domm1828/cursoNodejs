const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi')

const UsersSchema = new Schema({
    first_name:{
        type: String
      },
    last_name:{
        type: String
      },
    status:{
        type:Boolean,
        default:true
    },
    phone : String
});
const User = mongoose.model('users',UsersSchema);

const ValidateUser = (user) => {
    const schema = Joi.object({
        first_name: Joi.string().min(5).max(100).required(),
        last_name: Joi.string().min(5).max(100).required(),
    }).options({ abortEarly: false });
   
    return schema.validate(user)
  };

  module.exports = {
    User,
    ValidateUser,
  }