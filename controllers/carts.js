const Truck = require('../models/truck');

module.exports = {
    new: newCart
};

function newCart(req, res) {
    Truck.find({}, function(err, truck) {
        console.log(truck);
        res.render('carts/new', {truck});
    }); 
};