
const mongoose = require('mongoose')

BlogSchema= new mongoose.Schema({

	post:{
		type:String,
		required:true,
		maxLength:50,
	},
	comments:{
		type:String,
		required:true,
		maxLength:90,
	},
	like:{
		type:Boolean,
		required:true,
	},
	createAt:{
		type:Date,
		required:true,
		default:Date.now(),
	},
	updateAt:{
		type:Date,
		required:true,
		default:Date.now(),
	}

})

module.exports= mongoose.model("BlogSchema",BlogSchema)