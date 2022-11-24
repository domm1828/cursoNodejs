const express = require("express");
const app = express(); 
const port = 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})