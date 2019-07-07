const express = require('express')
const books = require('../config/books')
const router = express.Router()

router.get("/", function(req,res){
    console.log("Este es el request" + req)
    res.status(500).send(books)
})

router.post("/", function(req,res){
    console.log(req.body)
    res.send("El libro se está guardando")
})

router.put("/", function(req,res){
    console.log("Los datos del request se logguearon")
    res.status(202).send("Se está modificando la información del libro")
})

module.exports = router