require('dotenv').config()
const handle_forecast_render_req = require('./handlers/render_forecast.js')

const express = require('express')
const app = express();

const node_html_image = require('node-html-to-image')


app.get('/forecast/:locality', async (req, res) => {
    let response = await handle_forecast_render_req(req.params)

    if(response != null){
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(response, 'binary');
    }else{
        res.status(400)
        res.json({message:"Bad request - can´t render an image"})
    }
})

app.listen(process.env.EXPRESS_PORT, console.log(`Api running at http://localhost:${process.env.PORT}`))   