const mongoose = require('mongoose');

const pantrySchema = new mongoose.Schema({
    product: {type: String, required: true},
    quantity: {type: Number, required: true},
    brand: {type: String, required: false}
})

const Pantry = mongoose.model('Groceries', pantrySchema);

module.exports = Pantry;