const Truck = require('../models/truck');

module.exports = {
    new: newTruck,
    index,
};

function index(req, res) {
    res.render('trucks/new');
}

function newTruck(req, res) {
    console.log(req.body);
    Truck.create(req.body, function(err, truck) {
        res.redirect('carts/new');
    }); 
};

