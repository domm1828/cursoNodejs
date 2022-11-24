# Curso Nodejs
## Api Rest Store

[![N|Solid](https://avatars.githubusercontent.com/u/67112778?s=48&v=4)](https://duglasm.wordpress.com/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/domm1828/cursoNodejs)

# Instalación
Ingresar a la raiz de la carpeta y ejecutar `npm install`

Instalar mongoose
```shell
$ npm install mongoose
```
#### Creación de Modelos (Esquema con mongoose)
```
const UsersSchema = new Schema({
    first_name:String,
    last_name:String,
    status:{
        type:Boolean,
        default:true
    },
    phone : String
});
```
##### Creación de Rutas
```
/**Get all users */
router.get('/users', getUsers);
router.post('/users',createUser);
router.get('/users/:id', findByUser);
router.put('/users/:id',UpdateByUser);
router.delete('/users/:id',deleteByUser);
```
#### Creación de Controller
```
const User = require('../models/user.model');

const getUsers = async (req, res) => {
    const user = await User.find();
    res.json(user);
}
```
