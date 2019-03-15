const fs = require('fs');
const faker = require('faker');
const { articlesImage, exploresImage, youtubeVideo, youtubeThumbnail, month, productImg, productNames } = require('../../sephoraData.js');

// const generator = fs.createWriteStream('generator.csv');
// const explorer = fs.createWriteStream('explorer.csv');
// const articles = fs.createWriteStream('articles.csv');
// const videos = fs.createWriteStream('videos.csv');
const inner_carousel = fs.createWriteStream('inner_carousel.csv');

let videoId = 1;
let exploreId = 1;
let carouselId = 1;

const explorerDataGen = (productId) => {
  let str = '';
  for (let i = 0; i < 6; i++) {

    // product, product_brand, user, explorer_date, explorer_comments, header_comments, explorer_image
    str += (`${exploreId}, ${productId}, ${productNames[Math.floor(Math.random() * 5)]},${faker.internet.userName()} ,${month[Math.floor(Math.random() * 12)]} ${Math.floor(Math.random() * 31)}, ${faker.lorem.words()}, ${faker.lorem.words()}, ${faker.image.image()} \n `);
    exploreId++;
  }
  return str;
}

const articlesDataGen = (productId) => {
  return `${productId}, ${productId}, ${faker.image.city()}, ${faker.lorem.word()}\n`;
}

const videosDataGen = (productId) => {
  let str = '';
  for (let i = 0; i < 3; i++) {
    // product, video_title, videos_list, videos_thumbnail
    str += (`${videoId}, ${productId}, ${faker.lorem.words()}, ${youtubeVideo[Math.floor(Math.random() * 3)]}, ${faker.image.image()}\n`);
    videoId++;
  }
  return str;
  // return `${productId}, ${faker.lorem.words()}, ${youtubeVideo[Math.floor(Math.random() * 3)]}, ${faker.image.image()}\n`;
}

const carouselDataGen = (productId) => {
  let str = '';
  for (let i = 0; i < 8; i++) {
    // product, product_description, product_price, product_image, product_names
    str += (`${carouselId}, ${productId}, ${faker.lorem.words()}, ${Math.floor(Math.random() * 10)}, ${faker.image.fashion()}, ${productNames[Math.floor(Math.random() * 4)]}\n`);
    carouselId++;
  }
  return str;
}


const writeProducts = (productsStream, type, cb, lim) => {
  let upperLim = lim;
  var i = 0;
  write();
  function write() {
    var ok = true;
    do {
      i += 1;
      if (i === upperLim) {
        // last iteration
        productsStream.write(cb(i), 'utf-8', (err) => {
          if (err) {
            console.log('error writing', err);
          } else {
            console.log('Successful going');
            productsStream.end();
          }
        });
        console.log('DONE');
      } else if (i === 1) {
        productsStream.write(`id,${type}\n`);
        productsStream.write(cb(i), 'utf-8');
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = productsStream.write(cb(i), 'utf-8');
        if (i % 100000 === 0) console.log("Generating ten million similar products list:", `${i / 100000}%`);
      }
    } while (i < upperLim && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      productsStream.once('drain', write);
    }
    return;
  }
}


// writeProducts(generator, 'product_id', (i) => { return `${i}, ${i}\n` }, 10000000);
// writeProducts(explorer, 'product, product_brand, user, explorer_date, explorer_comments, header_comments, explorer_image', explorerDataGen, 10000000);
// writeProducts(articles, 'product, article_img, article_title', articlesDataGen, 10000000);
// writeProducts(videos, 'product, video_title, videos_list, videos_thumbnail', videosDataGen, 10000000);
writeProducts(inner_carousel, 'product, product_description, product_price, product_image, product_names', carouselDataGen, 10000000);