require('dotenv').config();
const axios = require("axios")

const listarPrevisaoLocal = async (req, res) => {
    try {
        const { data } = await axios(`https://api.hgbrasil.com/weather?key=${process.env.KEY}&user_ip=remote`)

        return res.status(200).json(data)
    } catch (error) {
        console.error(error)
        return res.status(500).send()
    }
}

const previsaoPorCidade = async(req, res) => {
    try {
        const { city_name } = req.query

        const { data } = await axios(`https://api.hgbrasil.com/weather?key=${process.env.KEY}&city_name=${city_name}`)

        return res.status(200).json(data)
    } catch (error) {
        console.error(error)
        return res.status(500).send()
    }
}

module.exports = {
    listarPrevisaoLocal,
    previsaoPorCidade
}