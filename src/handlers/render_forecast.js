const axios = require('axios');
const handler_render_html = require('./render_html.js')

async function handle_forecast_render_req(params){
    let message = null

    let regex = new RegExp(/^[a-zA-Z ]*$/)
    let locality = params.locality

    if(locality != null && locality != undefined){
        if(regex.test(locality)){
            message = await handle_forecast_external_api_req(locality)
        }
    }
    return message
}
 
async function handle_forecast_external_api_req(locality){
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locality}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
        .then(res => {
            return handler_render_html({
                status: res.status,
                content: {
                    main: res.data.main, 
                    weather: res.data.weather, 
                    wind:res.data.wind,
                    name: res.data.name
                }
            })
        })
        .catch(() => {
            return null
        });
}
module.exports = handle_forecast_render_req