require('dotenv').config()
const handle_forecast_render_req = require('./lib/render_forecast.js')

const express = require('express')
const app = express();


app.get('/:locality', (req, res) => {
    handle_forecast_render_req({req,res})
})


app.listen(process.env.EXPRESS_PORT, console.log(`Api running at http://localhost:${process.env.EXPRESS_PORT}`))   