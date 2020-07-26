const mongoose = require('mongoose');

const LedSchema = new mongoose.Schema({
    button: String,
    status: String,
})

module.exports = mongoose.model('Led', LedSchema);