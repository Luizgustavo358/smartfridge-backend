const mongoose = require('mongoose');

const RfidProductSchema = new mongoose.Schema({
    rfid: String,
    name: String,
    brand: String,
    description: String,
    type: String,
    avatar_url: String,
    validity: Date
});

module.exports = mongoose.model('RfidProduct', RfidProductSchema);