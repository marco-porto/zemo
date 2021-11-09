const node_html_image = require('node-html-to-image')

node_html_image({
    output: './image.png',
    html: '<html><body style="background:white">Hello world!</body></html>',
    transparent:true
  })
.then(() => console.log('The image was created successfully!'))
