const express = require('express')
const previsaoDoTempo = require('../controllers/previsaoDoTempo')

const routes = express()

routes.get('/', previsaoDoTempo.listarPrevisaoLocal)
routes.get('/temperatura', previsaoDoTempo.previsaoPorCidade)

module.exports = routes