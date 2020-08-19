const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const crewMemberSchema = new Schema({
    name: {type: String, required: true},
    rank: {type: String, required: true},
    homePlanet: {type: String, required: true},
    engineeringAccess: Boolean
}, {timestamps: true}
);

// Create Model from the Schema
const CrewMember = mongoose.model('CrewMember', crewMemberSchema); 

module.exports = CrewMember; 