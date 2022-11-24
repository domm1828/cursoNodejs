const express = require("express");
const userRouter = require('./routes/users.route');
const app = express(); 
const port = 5050;
const dbConfig = require('./config/database.config.js');
const mongose = require('mongoose');

/**Cadena conexion con mongo */
mongose.connect(dbConfig.url)
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