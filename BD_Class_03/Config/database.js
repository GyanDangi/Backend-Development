
const mongoose =require('mongoose');
require('dotenv').config();


 const connectDb = ()=>{

	mongoose.connect(process.env.DB_URL,{})
	.then(()=>{
		console.log("DATABASE CONNECTION SUCCESSFUL")
	}).catch(()=>{
		console.log("ERROR IN CONNECTING WITH DATABASE")
		console.log(error.message);
		process.exit(1);
	})

}

module.exports = connectDb;