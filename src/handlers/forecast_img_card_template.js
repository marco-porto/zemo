let template = `<html>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link href=https://fonts.googleapis.com rel=preconnect>
    <link href=https://fonts.gstatic.com rel=preconnect crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel=stylesheet>
    <body
        style=width:440px;height:534px;font-family:Poppins;font-style:normal;display:flex;flex-direction:column;justify-content:center;text-align:center;color:#FFF>
        <div
            style="width:100%;height:100%;border-radius:20px;background:radial-gradient(136.48% 153.46% at 98.7% 2.16%,rgba(4,81,157,.15) 0,rgba(9,85,121,.15) 100%),linear-gradient(180deg,#0B0D41 0,#060622 100%)">
            <p style=font-weight:600;font-size:26px;text-transform:capitalize>{{weather.desc}}</p>
            <p style=font-weight:500;font-size:19px;color:#8B8A9A>{{locality}}</p>
            <div style=display:flex;justify-content:center><img
                    src={{weather.img}}
                    style=width:170px;height:170px;margin-bottom:50px;margin-top:10px></div>
            <div style=display:flex;justify-content:center>
                <div style=padding:25px>
                    <p style=font-size:14px;line-height:10px>Temp</p>
                    <p style=font-weight:600;font-size:17px;line-height:15px>{{weather.temp.max}}º</p>
                    <p style=font-weight:600;font-size:17px;line-height:15px>{{weather.temp.min}}º  </p>
                </div>
                <div style=padding:25px>
                    <p style=font-size:14px;line-height:10px>Vento</p>
                    <p style=font-weight:600;font-size:17px;line-height:15px>{{weather.wind.speed}} km/h</p>
                </div>
                <div style=padding:25px>
                    <p style=font-size:14px;line-height:10px>Humididade</p>
                    <p style=font-weight:600;font-size:17px;line-height:15px>{{weather.humidity}} %</p>
                </div>
            </div>
        </div>
    </body>
</html>`
module.exports = template