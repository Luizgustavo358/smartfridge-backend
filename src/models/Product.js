const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    rfid: String,
    name: String,
    brand: String,
    description: String,
    type: String,
    avatar_url: String,
    validity: Date
});

module.exports = mongoose.model('Product', ProductSchema);