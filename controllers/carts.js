const Truck = require('../models/truck');


module.exports = {
    new: newCart,
    delete: deleteItem,
    edit,
    update,
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

function edit(req, res) {
    Truck.findById(req.params.id, function(err, item) {
        console.log(item, 'is the truck');
        res.render('carts/edit', {
            title: 'Edit Item',
            item,
        });
    });
}

function update(req, res) {
    Truck.findByIdAndUpdate(req.params.id, req.body, function(err, item) {
        res.redirect('/carts/new');
    })
}