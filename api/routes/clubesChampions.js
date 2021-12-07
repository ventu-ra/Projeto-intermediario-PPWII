const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const parser = require("node-html-parser").parse;

router.get("/", function (req, res) {
  // query string
  const consulta = req.query.consulta;

  var times = [];
  const URLprincipal = "https://pt.uefa.com";
  const URL = "https://pt.uefa.com/uefachampionsleague/clubs/";
  var requisicao = axios.get(URL);
  requisicao.then(function (resposta) {
    //tratamento dos dados da URL
    var root = parser(resposta.data);
    const divClubes = root.querySelectorAll(".team-wrap");
    const divSigla = root.querySelectorAll(".team-name__country-code");
    // const clubLog = root.querySelectorAll('.club-logo')

    // let arrClubLog = clubLog["attrs"]["data-srcset"]
    // arrClubLog.split(',')
    // console.log(arrClubLog);

    divClubes.forEach(function (clube, sigla, log) {
      var clubes = {
        time: clube["attrs"]["title"],
        país: divSigla[sigla].textContent,
        link: URLprincipal + clube["_rawAttrs"]["href"],
    
        timestamp: Date.now(),
      };
      times.push(clubes);
    });

    if (consulta) {
      const list = times.filter((tim) =>
        tim.time.toLowerCase().includes(consulta.toLowerCase())
      );
      if (list) {
        return res.json(list);
      }
    }

    console.log(times)
    res.json(times);
  });
});

module.exports = router;
