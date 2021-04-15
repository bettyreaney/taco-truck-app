const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const truckSchema = new Schema({
    meat: {
        type: String,
        enum: ['Asada', 'Carnitas', 'Pollo', 'Pastsor', 'None'],
    },
    beans: {
        type: String,
        enum: ['Refried', 'Pinto', 'Black'],
    }
    }, { timestamps: true });

    module.exports = mongoose.model('Truck', truckSchema);