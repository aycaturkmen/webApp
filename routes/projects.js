const express = require('express');
const router = express.Router();
const Projects = require('../models/Projects');

//ROUTES
//get request
router.get('/def', (req,res) => {
    //respond to the user with a string
    res.send('Projects Route! using routes as middleware .??  ');
})

//Gets back all the users
router.get('/', async (req,res) => {
    try{
        const projects = await Projects.find(); 
        res.json(projects);
    }catch(err){
        res.json({message: err});
    }

})


//get a specific project
router.get('/:projectId', async (req,res) => {
    try{
    //console.log(req.params.projectId); 
    const projects = await Projects.findById(req.params.projectId);
    res.json(projects);
    }catch(err){
        res.json({message : err}); 
    }
})


//get request
router.get('/dnm', (req,res) => {
    //respond to the user with a string
    res.send('Projcts DNM Route! using routes as middleware  ');
})



//post request
router.post('/newProject', async (req,res) => {
    //console.log(req.body);
    const projects = new Projects({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        people: req.body.people
    });
    
    try{
    const savedProject = await projects.save();
    res.json(savedProject);
    }catch(err){
        res.json({message: err});
    }

})


/*

router.post('/newProject', async (req,res) => {
    //console.log(req.body);
    const projects = new Projects({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        people: req.body.people
    });
    
    try{
    const savedProject = await projects.save();
    res.json(savedProject);
    }catch(err){
        res.json({message: err});
    }

})

*/

//delete request
router.delete('/:projectId', async (req, res) => {
    try{
    const removedProject = await Projects.deleteOne({_id: req.params.projectId});
    res.json(removedProject);
    }catch(err){
        res.json({message: err});
    }

})


//update request
router.patch('/:projectId', async (req, res) => {
    try{
    const updatedProject = await Projects.updateOne({_id: req.params.projectId}, 
        { $set: { title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            people: req.body.people }});
    res.json(updatedProject);
    }catch(err){
        res.json({message: err});
    }
})


/*
//update request
router.patch('/:projectId', async (req, res) => {
    try{
    const updatedProject = await Projects.updateOne({_id: req.params.projectId}, { $set: {title: req.body.title}});
    res.json(updatedProject);
    }catch(err){
        res.json({message: err});
    }

})
*/

module.exports = router;