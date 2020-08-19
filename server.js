require("dotenv").config(); 

// Dependencies
const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const methodOverride = require('method-override'); 

// Constants
const PORT = process.env.PORT || 3000; 

// middleware
// give me my static pages in public
app.use(express.static('public')); 
// give me req.body
app.use(express.urlencoded({extended: false})); 
// set my view engine to look for/render jsx files
app.set('view engine', 'jsx');
// pull in express-react-views to enable my engine
app.engine('jsx', require('express-react-views').createEngine());
// specify query identifier to trigger method override
app.use(methodOverride('_method')); 
// set URI for mongoDB cxn

// Establish mongoose connection
const mongoURI = process.env.MONGO_URI;

// connect
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}); 
// on open, tell me I'm connected
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo'); 
});

// Controllers! Cuz we're cool like that now
const logsController = require('./controllers/logs.js'); 
app.use('/logs', logsController); 

const crewMembersController = require('./controllers/crewMembers.js'); 
app.use('/crewMembers', crewMembersController); 

// listen
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
}); 


