const express = require('express')
const users = require('../config/users')
const router = express.Router()

router.get("/", function(req,res){
    res.send(users)
})

router.delete("/destroy", function(req,res){
    console.log(req.body)
    res.send("Se están borrando los datos")
})

module.exports = router