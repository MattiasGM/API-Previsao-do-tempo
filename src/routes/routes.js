const express = require('express')

const routes = express()

routes.get('/', previsaoDoTempo)

module.exports = routes