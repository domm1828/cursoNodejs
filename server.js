const express = require("express");
const userRouter = require('./routes/users.route');
const app = express(); 
const bodyParser = require("body-parser");
const port = 5050;
const dbConfig = require('./config/database.config.js');
const mongose = require('mongoose');
const productRouter = require("./routes/product.route");

/**Cadena conexion con mongo */
mongose.connect(dbConfig.url)
    .then(() => console.log("Conect MongoDB"))
    .catch((err) => {
        console.error(err)
    });
/**Fin de cadena conexion */ 


app.use(express.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
app.use('/users',userRouter);
app.use('/product',productRouter)

app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})