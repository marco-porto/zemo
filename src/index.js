require('dotenv').config()

const { request } = require('express');
const express = require('express')
const app = express();
const handle_forecast_render_req = require('./handlers/pull_forecast.js');

app.get('/:locality', async (req, res) => {
    let image = await handle_forecast_render_req(req.params)

    res.set('Content-Type', 'image/png');
    res.status(image.status);
    res.send(image.content);
});

app.listen(process.env.PORT, console.log(`Api running at port ${process.env.PORT}`));