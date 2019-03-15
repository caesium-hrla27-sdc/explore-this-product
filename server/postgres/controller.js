const pool = require('../../db/postgresql/index.js');

module.exports = {
  explores: {
    get: (req, res) => {
      let { id } = req.params;


    },
    post: (req, res) => {
      let { id } = req.params;




    },
    update: (req, res) => {
      let { id } = req.params;
      let newId = req.body;

    },
    delete: (req, res) => {
      let { id } = req.params;

    }
  }
};