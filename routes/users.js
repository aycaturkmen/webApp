const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

//ROUTES
//get request
router.get('/def', (req,res) => {
    //respond to the user with a string
    res.send('Users Route! using routes as middleware .??  ');
})

//Gets back all the users
router.get('/', async (req,res) => {
    try{
        const users = await Users.find(); 
        res.json(users);
    }catch(err){
        res.json({message: err});
    }

})


//get a specific user
router.get('/:userId', async (req,res) => {
    try{
    //console.log(req.params.userId); 
    const users = await Users.findById(req.params.userId);
    res.json(users);
    }catch(err){
        res.json({message : err}); 
    }
})


//get request
router.get('/dnm', (req,res) => {
    //respond to the user with a string
    res.send('Users DNM Route! using routes as middleware  ');
})

//post request
router.post('/newUser', async (req,res) => {
    //console.log(req.body);
    const users = new Users({
        name: req.body.name,
        birthDate: req.body.birthDate,
        position: req.body.position,
        projects: req.body.projects
    });
    
    try{
    const savedUser = await users.save();
    res.json(savedUser);
    }catch(err){
        res.json({message: err});
    }

})


//delete request
router.delete('/:userId', async (req, res) => {
    try{
    const removedUser = await Users.deleteOne({_id: req.params.userId});
    res.json(removedUser);
    }catch(err){
        res.json({message: err});
    }

})


//update request
router.patch('/:userId', async (req, res) => {
    try{
    const updatedUser = await Users.updateOne({_id: req.params.userId}, 
        { $set: { name: req.body.name,
            birthDate: req.body.birthDate,
            position: req.body.position,
            projects: req.body.projects }});
    res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
})


/*
//update request
router.patch('/:userId', async (req, res) => {
    try{
    const updatedUser = await Users.updateOne({_id: req.params.userId}, { $set: {name: req.body.name}});
    res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }

})
*/

module.exports = router;