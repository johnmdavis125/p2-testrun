const express = require('express'); 
const router = express.Router(); 
const CrewMember = require('../models/crewMembers.js'); 

// RESTful Routes

// Index - GET
router.get('/', (req, res)=>{
    CrewMember.find({}, (error, allCrewMembers)=>{
        res.render('crewMembers/Index', {
            crewMembers: allCrewMembers
        }); 
    });
});
// New - GET
router.get('/new', (req, res)=>{
    // res.send('this is where the new page will be')
    res.render('crewMembers/New'); 
});

// Delete - DEL (ov get)
router.delete('/:id', (req, res)=>{
    CrewMember.findByIdAndRemove(req.params.id, (error, crewMember)=>{
        res.redirect('/crewMembers'); 
    });
});

// Update - POST (ov PUT)
router.put('/:id', (req, res)=>{
    req.body.engineeringAccess = req.body.engineeringAccess === 'on' ? true : false; 

    CrewMember.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updateModel)=>{
        res.redirect('/crewMembers'); 
    });
});

// Create - POST
router.post('/', (req, res)=>{
    if (req.body.engineeringAccess === 'on'){
        req.body.engineeringAccess = true; 
    } else {
        req.body.engineeringAccess = false; 
    }

    CrewMember.create(req.body, (error, createdCrewMember)=>{
        res.redirect('/crewMembers');
    });
});

// Edit - GET
router.get('/:id/edit', (req, res)=>{
    CrewMember.findById(req.params.id, (error, foundCrewMember)=>{
        res.render('crewMembers/Edit', {
            crewMember: foundCrewMember
        });
    });
});

// Show - GET
router.get('/:id', (req, res)=>{
    CrewMember.findById(req.params.id, (error, foundCrewMember)=>{
        res.render('crewMembers/Show', {
            crewMember: foundCrewMember
        });
    });
});

module.exports = router; 