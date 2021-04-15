module.exports = {
    new: newTruck
};

function newTruck(req, res) {
    res.render('trucks/new');
}