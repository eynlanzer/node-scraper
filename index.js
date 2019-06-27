const request = require('request');
const cheerio = require('cheerio');

// Check for errors (200 = succesful HTTP response)
request('https://www.americanas.com.br/produto/133718358/smart-tv-led-50-lg-50uk6510-ultra-hd-4k-com-conversor-digital-4-hdmi-2-usb-wi-fi-thinq-ai-webos-4-0-60hz-inteligencia-artificial-prata', (error, response, html) => {
  if(!error && response.statusCode == 200) {
    // console.log(html); // load page html
    const $ = cheerio.load(html);

    const productId = $('.brNcBx')
    const breadCrumb = $('.product-breadcrumb')
    const productTitle = $('#product-name-default')
    // const productImg = $('.ImageUI-ltqbj-1 ijVuml')
    const productSeller = $('.seller-00776574000660')
    const productPrice = $('.sales-price')

    console.log(productId.text())
    console.log(breadCrumb.text())
    console.log(productTitle.text())
    // console.log(productImg.text())
    console.log(productSeller.html())
    console.log(productPrice.html())
  }
})

133718358