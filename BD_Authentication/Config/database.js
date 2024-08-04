const mongoose = require("mongoose")

require('dotenv').config();


exports.Connect = ()=>{
	mongoose.connect(process.env.DATABASE_URL)
	.then(()=>{
		console.log("DB CONNECTED")
	}).catch((error)=>{
		console.log("ERROR IN DB CONNECTION");
		console.log(error);
		process.exit(1);
	})
}