const express = require('express'); 
const router = express.Router(); 
const Log = require('../models/logs.js'); 

// RESTful Routes

// Index - GET
router.get('/', (req, res)=>{
    Log.find({}, (error, allLogs)=>{
        res.render('logs/Index', {
            logs: allLogs
        })
    });
});

// New - GET
router.get('/new', (req, res)=>{
    res.render('logs/New'); 
})

// Delete - DEL (ov get)
router.delete('/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, log)=>{
        res.redirect('/logs'); 
    });
});

// Update - POST (ov PUT)
router.put('/:id', (req, res)=>{
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false; 

    Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel)=>{
        res.redirect('/logs'); 
    });
});

// Create - POST
router.post('/', (req, res)=>{
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true; 
    } else {
        req.body.shipIsBroken = false; 
    }

    Log.create(req.body, (error, createdLog)=>{
        res.redirect('/logs'); 
    });
});

// Edit - GET
router.get('/:id/edit', (req, res)=>{
    Log.findById(req.params.id, (error, foundLog)=>{
        res.render('logs/Edit', {
            log: foundLog
        });
    });
});


// Show - GET
router.get('/:id', (req, res)=>{
    Log.findById(req.params.id, (error, foundLog)=>{
        res.render('logs/Show', {
            log: foundLog
        });
    });
});


module.exports = router; 