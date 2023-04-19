const mongoose = require('mongoose');

const pantrySchema = new mongoose.Schema({
    product: {type: String, required: true},
    quantity: {type: Number, required: true},
    brand: {type: String, required: false},
    expiration: {type: Date, required: false}
})

const Pantry = mongoose.model('Pantry', pantrySchema);

module.exports = Pantry;