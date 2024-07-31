const express = require('express');
const Todo = require('../Models/Todo');


exports.updateTodoById =async(req,res)=>{

	try {

		// we are updating by id;
		const id= req.params.id;
		const {title,description}= req.body;

		const todo = await Todo.findByIdAndUpdate(
			{_id:id},
			{title,description,updateAt:Date.now()})
		
		res.status(200).json({
			success:true,
			data:todo,
			message:"Data updated Successfully"
		})

	} catch (error) {

		console.log(error);
		console.error(error);
		res.status(504).json({
			success:false,
			data:'Not updated by Id',
			message:'Internal Sever Error'
		})
	}
}