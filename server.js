const express = require("express");
const userRouter = require('./routes/users.route');
const app = express(); 
const port = 5050;
/**Cadena conexion con mongo */
const mongose = require('mongoose');
mongose.connect('mongodb://127.0.0.1:27017/store')
    .then(() => console.log("Conect MongoDB"))
    .catch((err) => {
        console.error(err)
    });
/**Fin de cadena conexion */ 

app.use('/users',userRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})