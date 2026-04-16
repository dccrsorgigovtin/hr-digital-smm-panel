const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    serviceDetails: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    status: {
        type: String,
        enum: ['Processing', 'Completed'],
        default: 'Processing'
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);