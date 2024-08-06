const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true,

	},
	imageUrl:{
		type:String,
	},
	tags:{
		type:String,
	},
	email:{
		type:String,
		required:true,
	}
})

module.exports = mongoose.model("File",fileSchema);