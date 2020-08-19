const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Create Schema
const logSchema = new Schema({
    title: String,
    entry: String,
    shipIsBroken: Boolean
}, {timestamps: true}
); 

// Create Model from the Schema
const Log = mongoose.model('Log', logSchema); 

// Export Log Model
module.exports = Log; 