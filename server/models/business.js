let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    ContactName: String,
    ContactNumber: String,
    EmailAddress: String,
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);