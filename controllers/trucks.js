const Truck = require('../models/truck');

module.exports = {
    new: newTruck,
    index,
    create,
    delete: deleteItem,
};

function index(req, res) {
    res.render('trucks/new');
}

function newTruck(req, res) {
    res.render('trucks/new');
};

function create(req, res) {
    console.log(req.body)
    req.body.cheese = !!req.body.cheese
    req.body.guac = !!req.body.guac
    Truck.create(req.body, function(err, truck) {
        res.redirect('/trucks');
    });
}

function deleteItem(req, res) {
    Truck.findByIdAndDelete(req.params.id, function(err, item) {
        res.redirect('/carts/new');
    });
}
