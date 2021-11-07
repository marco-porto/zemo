const handle_forecast_render_req = require('./lib/render_forecast.js')

const express = require('express')
const app = express();


app.get('/forecast/:locality', (req, res) => {
    handle_forecast_render_req({req,res})
    //res.send("a")
})


app.listen(5000, console.log('App Running On Port 5000!'))