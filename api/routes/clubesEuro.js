const express = require('express')
const router = express.Router()
const axios = require('axios').default
const parser = require('node-html-parser').parse

router.get('/', function(req, res){
    const consulta = req.query.consulta
   
    var timeFiltrado = []
    var times = []
    const URLprincipal = "https://pt.uefa.com"
    const URL = "https://pt.uefa.com/uefaeuropaleague/clubs/"

    var requisicao = axios.get(URL)
    requisicao.then(function(resposta){

    //tratamento dos dados da URL
    var root = parser(resposta.data)
    const divClubes = root.querySelectorAll(".team-wrap")
    const divSigla = root.querySelectorAll(".team-name__country-code")

    //Testes no console
    //console.log(root.querySelectorAll(".team-wrap")[0]['attrs']['title'])
    //console.log(root.querySelectorAll(".team-name__country-code")[0].textContent)

        divClubes.forEach(function(clube, sigla){
            var clubes = {
                "time": clube['attrs']['title'],
                "país": divSigla[sigla].textContent,
                "link": URLprincipal + clube['_rawAttrs']['href'],
                "timestamp": Date.now()
            }

            if(consulta == clubes.time){
                timeFiltrado.push(clubes)
            } else{
                times.push(clubes)
            }
            
        })
        //entrega a resposta com a lista dos times em formato JSON
        //Se não houver time filtrado valido na query string retorna a lista com todos os times
        if(timeFiltrado == ""){
            res.json(times)
        }else{
            res.json(timeFiltrado)
        }
    })
})

module.exports = router