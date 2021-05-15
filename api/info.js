const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    const autor = {
        nome: "Felipe Costa",
        curso: "PPW II",
        instituicao: "UNESC"
    }
    res.json(autor)
})

module.exports = router