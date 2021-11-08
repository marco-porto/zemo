function handle_forecast_render_req(args){
    let regex = new RegExp(/^[a-zA-Z ]*$/)
    let locality = args.req.params.locality

    console.log(locality,regex.test(locality))

    if(locality != null && locality != undefined){
        if(regex.test(locality)){
            handle_forecast_external_api_req(locality)



            args.res.send("ok")
        }
    }

    args.res.send("error")
}

function handle_forecast_external_api_req(locality){
    
}


module.exports = handle_forecast_render_req