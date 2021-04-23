const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const truckSchema = new Schema({
    meat: {
        type: String,
        enum: ['Carne Asada', 'Carnitas', 'Pollo', 'Pastor', 'None'],
    },
    filling: {
        type: String,
        enum: ['Carne Asada', 'Pollo', 'Cheese'],
    },
    beans: {
        type: String,
        enum: ['Refried', 'Pinto', 'Black'],
    },
    cheese: Boolean,
    guac: Boolean,
    side: Boolean,
    onion: Boolean,
    cilantro: Boolean,
    lettuce: Boolean,
    pico: Boolean,
    salsa: {
        type: String,
        enum: ['Red', 'Green', 'Pico de Gallo'],
    }
    }, { timestamps: true });

    module.exports = mongoose.model('Truck', truckSchema);