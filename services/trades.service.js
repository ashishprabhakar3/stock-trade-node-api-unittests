const tradesModel = require('./../models/trades');

module.exports.create = async (tradeData) => {
    try {
        tradesModel.create(tradeData)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Trade."
          });
        });
  
    }