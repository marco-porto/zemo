require('dotenv').config()

const express = require('express')
const app = express();
const handle_forecast_render_req = require('./handlers/pull_forecast.js');

console.log(process.env)
app.get('/:locality', async (req, res) => {
    let response = await handle_forecast_render_req(req.params)
    if(response != null){
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(response, 'binary');
    }else{
        res.status(400);
        res.json({message:"Bad request - can´t render an image"});
    }
});

app.listen(process.env.PORT, console.log(`Api running at port ${process.env.PORT}`));