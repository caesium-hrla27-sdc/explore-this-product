const fs = require('fs');
const file = fs.createWriteStream('./exploresData.json');

// All mock data
const { generator } = require('./db/mongo/dataFormat.js');


function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 0;
  write();
  function write() {
    let ok = true;
    do {
      i++;
      console.log(i);
      let index = i;
      // adjustedData[i % 600]["myid"] = index;

      let newData = generator(index);

      // let dataString = JSON.stringify(adjustedData[i % 600]) + '\n';
      let dataString = JSON.stringify(newData) + '\n';


      if (i === 10000000) {
        // last time!
        file.write(dataString, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        // data = JSON.stringify(data);
        ok = file.write(dataString, encoding);
      }
    } while (i < 10000000 && ok);
    if (i < 10000000) {
      // had to stop early!
      // write some more once it drains
      file.once('drain', write);
    }
  }
}

writeOneMillionTimes(file, '', "utf8", (err) => {
  if (err) {
    console.log('error writing', err);
  } else {
    console.log('Successful going');
    file.end();
  }
})




// **************************************** Terminal Commands ****************************************
//mongoimport --db exploreProducts --collection explores --file exploresData.txt
//mongoimport --db exploreProducts --collection explores --file exploresData.json

// db.explores.find({productId: 9999229}).explain("executionStats")

// Hash index created on productId
//  db.explores.createIndex( { productId: "hashed" } )

// Data Dump
// mongodump --gzip --db exploreProducts