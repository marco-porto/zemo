const axios = require('axios');

async function handle_forecast_render_req(params){
    let message = {
        status: 400, content: "Bad request - invalid locality"
    }

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
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locality}&appid=${process.env.WEATHER_API_KEY}`)
        .then(res => {
            return {status: res.status ,content: res.data}
        })
        .catch(err => {
            return {status: 400, content: "Bad request - Something went wrong with the request"}
        });
}


function handle_forecast_image_render(params){
    console.log()
}

module.exports = handle_forecast_render_req