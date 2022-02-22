/*File Name: GokulrajVenugopal_COMP229_Assignment2
Student Name: Gokulraj Venugopal
Student ID: 301202722
Date: 21-Feb-2022 
*/

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