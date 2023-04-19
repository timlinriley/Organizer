const mongoose = require('mongoose');

const groceriesSchema = new mongoose.Schema({
    product: {type: String, required: true},
    quantity: {type: Number, required: true},
    brand: {type: String, required: false}
})

const Groceries = mongoose.model('Groceries', groceriesSchema);

module.exports = Groceries;