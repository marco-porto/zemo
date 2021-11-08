require('dotenv').config()
const handle_forecast_render_req = require('./handlers/render_forecast.js')

const express = require('express')
const app = express();


app.get('/:locality', async (req, res) => {
    let response = await handle_forecast_render_req(req.params)

    res.status(response.status)
    res.json(response)
})


app.listen(process.env.EXPRESS_PORT, console.log(`Api running at http://localhost:${process.env.EXPRESS_PORT}`))   