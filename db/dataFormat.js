const mockarooData = require('../data.js');
const { articlesImage, exploresImage, youtubeVideo, youtubeThumbnail, month, productImg, productNames } = require('../sephoraData.js');
const faker = require('faker');


let generator = function (index) {
  let obj = {
    productId: index,
    exploresLists: listExplores(),
    videosLists: listVideos(),
    articlesLists: listArticles(),
    innerCarousel: listCarousel()
  }
  return obj;
};

function listExplores() {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push({
      comments: faker.lorem.words(),
      date: `${month[Math.floor(Math.random() * 12)]} ${Math.floor(Math.random() * 31)}`,
      headerComments: faker.lorem.words(),
      image: faker.image.image(),
      productBrand: productNames[Math.floor(Math.random() * 5)],
      user: faker.internet.userName()
    })
  }
  return arr;
}

function listVideos() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push({
      videoTitle: faker.lorem.words(),
      videosList: youtubeVideo[Math.floor(Math.random() * 3)],
      videosThumbnail: faker.image.image()
    });
  }
  return arr;
}

function listArticles() {
  let arr = [];
  arr.push(
    {
      image: faker.image.city(),
      title: faker.lorem.word()
    }
  );
  return arr;
}

function listCarousel() {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push({
      prodDesc: faker.lorem.words(),
      prodPrice: Math.floor(Math.random() * 10),
      productImg: faker.image.fashion(),
      productNames: productNames[Math.floor(Math.random() * 4)]
    });
  }
  return arr;
}

module.exports = {
  generator
}

