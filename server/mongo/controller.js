// const { fetchExplore } = require('../db/dbHelpers.js');
// const Explores = require('../../db/mongo/index.js');
const Explores = require('../../db/mongo/model.js');

module.exports = {
    explores: {
        get: (req, res) => {
            let { id } = req.params;

            Explores.find({ productId: id })
                .then((data) => {
                    console.log('success in fetchExplore');
                    res.status(200).send(data);
                })
                .catch((err) => {
                    console.log('failure in fetchExplore');
                    res.status(404).send();
                });
        },
        post: (req, res) => {
            let { id } = req.params;

            let explores = new Explores(
                {
                    productId: id,
                    exploresLists: req.body.explores,
                    videosLists: req.body.videos,
                    articlesLists: req.body.articles,
                    innerCarousel: req.body.carousel
                }
            );
            explores.save()
                .then(() => {
                    res.status(201).send('Product Created.');
                })
                .catch((err) => {
                    console.log(err);
                    res.status(404).end();
                })


        },
        update: (req, res) => {
            let { id } = req.params;
            let newId = req.body;
            Explores.findByIdAndUpdate(id, newId)
                .then((product) => {
                    res.status(201).send('Product udpated.');
                })
                .catch((err) => {
                    console.log(err);
                    res.status(404).end();
                })
        },
        delete: (req, res) => {
            let { id } = req.params;
            Explores.findByIdAndRemove(id)
                .then(() => {
                    res.status(202).send('Delete successful.');
                })
                .catch((err) => {
                    console.log(err);
                    res.status(404).end();
                })
        }
    }
};