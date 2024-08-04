
const express = require('express');
const Blogs = require('../Model/BlogSchema');

exports.updateBlog= async(req,res)=>{
	try {
			const {id} = req.params;
			const {post, comments, like}= req.body;
			const updatepost =await Blogs.findByIdAndUpdate(
				{_id:id},
		{post,comments, like,
			updateAt:Date.now()});


		res.status(200).json({
			success:true,
			data:updatepost,
			messsge:"Post updated"
		})
	} catch (error) {
		console.log(error);
		console.error(error);
		res.status(503).json({
			success:false,
			data:"internal server error",
			message:"ERROR IN UPDATING POST"
		})
	}
}