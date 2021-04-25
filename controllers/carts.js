const Truck = require('../models/truck');


module.exports = {
    new: newCart,
    delete: deleteItem,
};

function newCart(req, res) {
    Truck.find({}, function(err, truck) {
        console.log(truck);
        res.render('carts/new', {truck});
    }); 
};

function deleteItem(req, res) {
    Truck.deleteOne(req.params.id, function(err) {
        res.redirect('carts/new');
    })
}