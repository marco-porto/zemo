require('dotenv').config()

const express = require('express')
const app = express();
const handle_forecast_render_req = require('./handlers/pull_forecast.js');

app.get('/:locality', async (req, res) => {
    let response = await handle_forecast_render_req(req.params)
    if(response != null){
        res.set('Content-Type', 'image/png');
        res.status(200);
        res.send(response);
    }else{
        res.status(400);
        res.json({message:"Bad request - can´t render an image"});
    }
});

app.listen(process.env.PORT, console.log(`Api running at port ${process.env.PORT}`));