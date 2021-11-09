const axios = require('axios');
const handler_render_html = require('./render_html.js')

async function handle_forecast_render_req(params){
    let message = null

    let regex = new RegExp(/^[a-zA-Z ]*$/)
    let locality = params.locality

    if(locality != null && locality != undefined){
        if(regex.test(locality)){
            message =  await handle_forecast_external_api_req(locality)
        }
    }
    return message
}
 
async function handle_forecast_external_api_req(locality){
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locality}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
        .then(res => {
            let date_obj = new Date();
            return handler_render_html({
                status: res.status,
                content: {
                    main: res.data.main, 
                    weather: res.data.weather, 
                    name: res.data.name,
                    timestamps: `${("0" + date_obj.getDate()).slice(-2)}-${("0" + (date_obj.getMonth() + 1)).slice(-2)}-${date_obj.getFullYear()} ${date_obj.getHours()}:${date_obj.getMinutes()}`
                }
            })
        })
        .catch(() => {
            return null
        });
}


function handle_forecast_image_render(params){
    console.log()
}

module.exports = handle_forecast_render_req