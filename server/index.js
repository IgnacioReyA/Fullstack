const express = require('express');
const app = express();

app.get("/operacion", (req, res) => {
    res.json({message: "Hello, World"});
});

app.listen(3000, () => {
    console.log("El servidor esta corriendo en el puerto 3000");
})