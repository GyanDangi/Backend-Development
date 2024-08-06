
const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = ()=>{

	mongoose.connect(process.env.DATABASE_URL)
	.then(()=>{
		console.log("DB CONNECTED")
	}).catch((error)=>{
		console.log("DB CONNECTION ISSUE")
		console.error(error);
		process.exit(1);
		
	})
}