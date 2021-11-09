require('dotenv').config()
const handle_forecast_render_req = require('./handlers/render_forecast.js')

const express = require('express')
const app = express();

const node_html_image = require('node-html-to-image')


app.get('/forecast/:locality', async (req, res) => {
    let response = await handle_forecast_render_req(req.params)

    res.status(response.status)
    res.json(response)
})


//Temp
app.get(`/img`, async function(req, res) {
    const image = await node_html_image({
      html: '<html><body><div>Check out what I just did! #cool</div></body></html>'
    });
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'binary');
  });
//--------------------------------------------


app.listen(process.env.EXPRESS_PORT, console.log(`Api running at http://localhost:${process.env.EXPRESS_PORT}`))   