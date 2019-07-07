const express = require('express')
const app = express()

const routes = require("./routes")
const userRoutes = require("./routes/user")

app.use("/books",routes)
app.use("/users",userRoutes)

module.exports = {"app": app, "express": express}

// ruta get retorne los libros de un archivo json que está en el servidor.
// método post, en el servidor me logguea los datos del request y como res dice el libro se está guardando
// método put, igual que el anterior, muestre res se está modificado la inf del libro, status 202
// método delete
// rutas antepuestas /books
// Crear otra ruta antepuesta por /users y esa ruta muestra todos los usuarios desde un json status 204
// git

