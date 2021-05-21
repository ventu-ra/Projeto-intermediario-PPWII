const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const router = require('./api/routes')

app.get('/', function(req, res){
    res.send("Bem vindo a api de gerador de clubes participantes da UEFA Champions League e da UEFA Euro League da temporada atual. Utilize o EndPoint => /api/champions <= para listar os clubes da Champions League ou o EndPoint => /api/euro <= para os times da Euro League.")
})

app.use('/api', router)

/*app.get('*', function(req, res){
    res.redirect('https://pt.uefa.com/uefachampionsleague/clubs/')
})*/

app.listen(PORT, function(){
    console.log("Servidor iniciado")
})