const mongoose = require('mongoose');
const shortId = require('shortid')

const urlSchema = new mongoose.Schema({

    full: { type: String, required: true },
    short: { type: String, default: shortId.generate },

})

module.exports = mongoose.model('urls', urlSchema);