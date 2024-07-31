

const express = require('express');
const Todo =require('../Models/Todo')


exports.deleteTodo = async(req,res)=>{

	try {
		 const {id}= req.params;
		 await Todo.findByIdAndDelete({_id:id});
		 
		 res.status(200).json({
			success:true,
			message:"Todo deleted Successfully"
		 })
	} catch (error) {
			console.log(error)
			res.status(504).json({
				success:false,
				message:"internal Server error"
			})
	}
	
}