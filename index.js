const request = require('request'); // HTTP request
const cheerio = require('cheerio');

// Check for errors (200 = succesful HTTP response)
request('https://www.americanas.com.br/produto/133718358/smart-tv-led-50-lg-50uk6510-ultra-hd-4k-com-conversor-digital-4-hdmi-2-usb-wi-fi-thinq-ai-webos-4-0-60hz-inteligencia-artificial-prata', (error, response, html) => {
  if(!error && response.statusCode == 200) {
    // console.log(html); 
    const $ = cheerio.load(html); // load page html

    // separating numbers from the string
    const productCode = $('.brNcBx').text();
    const productId = productCode.match(/\d/g).join(''); // leave only the numbers, then join

    // push each breadcrumb text into an empty array
    const breadCrumbs = [];
    $('.fbPVXQ').each(function () {
      breadCrumbs.push($(this).text());  
    })

    // scrape by id
    const productTitle = $('#product-name-default').text();

    // scrape the image url
    const productImg = $('.bFPzMY').attr("src");

    // scraped by html to avoid duplicates
    const productSeller = $('.seller-00776574000660').html();
    
    // separating numbers from the string
    const scrapedPrice = $('.haZIvY').text();
    const productPrice = scrapedPrice.match(/\d/g).join(''); // leave only the numbers, then join

    // print to the Terminal
    console.log(productId);
    console.log(breadCrumbs);
    console.log(productTitle);
    console.log(productImg);
    console.log(productSeller);
    console.log(productPrice);
  }
});

