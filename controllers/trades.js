const db = require("../models/trades");
const Trade = db.Trade;


// Create and Save a new Trade
exports.create = (req, res) => {    
      // Create a Trade
      const trade = {
        type: req.body.type,
        user_id: req.body.user_id,
        symbol: req.body.symbol,
        shares: req.body.shares,
        price: req.body.price,
        timestamp: req.body.timestamp
      };
    
      // Save Trade in the database
       db.create(trade)
        .then(data => {
          res.status(201).send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating new Trade."
          });
        });  
};

// Retrieve all trades from the database.
exports.findAll = (req, res) => {
    let condition = "";
    if(req.query.type && req.query.user_id){
        condition = {type : req.query.type, user_id: req.query.user_id };
    }else if (req.query.type){
        condition = {type : req.query.type };
    }else if(req.query.user_id){
        condition = {user_id: req.query.user_id };
    }
    
    db.findAll({ where: condition })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving trades."
        });
      });  
};

// Find a single trade with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    db.findByPk(id)
    .then(data => {
        if (data != null) {
          res.status(200).send(data);
        } else {
          res.status(404).send(`ID not found`);
        }
      })    
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Trade with id=" + id
        });
      });
};

// Update a trade by the id in the request
exports.update = (req, res) => {
    res.status(405).send({
        message: "method not allowed."           
      });      
};

// Delete a trade with the specified id in the request
exports.delete = (req, res) => {
  res.status(405).send({
    message:
        "method not allowed."
  });
};

// Delete all trades from the database.
exports.deleteAll = (req, res) => {
  
};
