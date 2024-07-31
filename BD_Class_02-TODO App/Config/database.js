const mongoose =require("mongoose");

require("dotenv").config();


const dbConnect = () =>{

	mongoose.connect(process.env.DATABASE_URL)
	.then(()=>{
		console.log("DB connnection is Successful")
	})
	.catch((error)=>{
		console.log("issue in Db conection");
		console.log(error.message)
		process.exit(1);
	});

}

module.exports= dbConnect;