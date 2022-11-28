const mongoose = require('mongoose')

// list schema
const listSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    }
})

const Item = new mongoose.model('Item', listSchema)

module.exports = { Item };