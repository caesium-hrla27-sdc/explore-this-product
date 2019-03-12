const Explores = require('../db/model.js');

// Query database using id
let fetchExplore = (id, callback) => {
  Explores.find({ projectId: id })
    .then(data => {
      console.log('success in fetchExplore', data);
      callback(null, data);
    })
    .catch(err => {
      console.log('failure in fetchExplore');
      callback('err', null);
    });
};

// Save data entries to database
let saveExplore = data => {
  data.forEach(entry => {
    entry = new Explores({
      productId: entry.id,
      exploresLists: entry.explores,
      videosLists: entry.videos,
      articlesLists: entry.articles,
      innerCarousel: entry.innerCarousel
    })
      .save()
      .then(() => {
        console.log('success in storing data into Explores table');
      })
      .catch(() => {
        console.log('failed to insert data into Explores table');
      });
  });
};

module.exports = {
  fetchExplore,
  saveExplore
};