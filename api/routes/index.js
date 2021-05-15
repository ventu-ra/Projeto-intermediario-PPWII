const express = require('express')
const router = express.Router()
const clubesChampions = require('./clubesChampions')
const clubesEuro = require('./clubesEuro')
const info = require('../info')

router.use('/champions', clubesChampions)
router.use('/euro', clubesEuro)
router.use('/info', info)

module.exports = router

