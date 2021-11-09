const node_html_image = require('node-html-to-image')


async function handler_render_html(params){
  console.log(params)

  return await node_html_image({
    html: '<html><body><div>Hello</div></body></html>'
  });
}

module.exports = handler_render_html