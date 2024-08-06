const express = require('express')
const router = express.Router();

const {signup, login} =require('../Controller/Auth')
const {auth, isStudent, isAdmin}= require('../Middleware/auth');

router.post('/signup',signup);
router.post('/login',login);

router.get('/test',auth,  (req,res)=>{
	res.status(200).json({
		success:true,
		message:"Your at Protected Test route"
	})
})


router.get('/student',auth, isStudent, (req,res)=>{
	res.status(200).json({
		success:true,
		message:"Your at Protected student route"
	})
})

router.get('/admin',auth, isAdmin, (req,res)=>{
	res.status(200).json({
		success:true,
		message:"Your at Protected Admin route"
	})
})

module.exports = router;