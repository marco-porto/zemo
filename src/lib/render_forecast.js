const Regex = require("regex");

function handle_forecast_render_req(args){
    let regex = new Regex(/^[a-zA-Z ]*$/)
    let locality = args.req.params.locality

    if(locality != null && locality != undefined){
        if(regex.test(locality)){
            
            args.res.send("hello")
        }
    }

}
module.exports = handle_forecast_render_req