const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User.controller');

router.post('/signup', (req,res)=>{
    const data = req.body;
    UserController.signup(data).then((data)=>{
        res.send({isSuccess:true, data});
    }).catch((error)=>res.send({isSuccess:false, error}))
});
router.get('/getUserData', (req,res)=>{
    const data = req.body;
    UserController.getUserData(data.id).then((data)=>{
        res.send({isSuccess:true, data});
    }).catch((error)=>res.send({isSuccess:false, error}))
});
router.all('/login', (req,res)=>{
    const option = req.body || {};
    UserController.authenticateUser(option).then((data)=>{
        res.send({isSuccess:true, data});
    }).catch((error)=>res.send({isSuccess:false, error}))
});
router.post('/updateProfile', (req,res)=>{
    const data = req.body;
    UserController.updateUserData(data).then((data)=>{
        res.send({isSuccess:true, data});
    }).catch((error)=>res.send({isSuccess:false, error}))
});


module.exports = router;