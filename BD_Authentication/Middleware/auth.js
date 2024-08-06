
const jwt =require("jsonwebtoken");
require('dotenv').config();


exports.auth = (req,res,next)=>{
	try {
		
		

		console.log("cookies",req.cookies.token);
		console.log("body",req.body.token);
		console.log("Header",req.header("Authorization"));

		// fetching the token from body or cookies
	 const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");
		
		// || req.header("Authorization").replace("Bearer ","");
		// console.log(token);

		if(!token){
			return res.status(403).json({
				success:false,
				message:"token is missing"
			})
		}

		// verify the token:
		try {
			// token me jo bhi data hai vo decode ho jayega:
			const decode = jwt.verify(token,process.env.JWT_SECRET);
			console.log(decode)

			req.user= decode;
		} catch (error) {
			return res.status(401).json({
				success:false,
				message:'Token is invalid'
			})
		}
		next();

	} catch (error) {
		return res.status(402).json({
			success:false,
			message:"Authentication failed while verifying the token"
		})
	}
}

exports.isStudent = (req,res,next)=>{

	try {

			if(req.user.role !=="Student"){
				return res.status(401).json({
					success:false,
					message:"this is protected route for the student"
				})
			}
			next();

	} catch (error) {
		return res.status(503).json({
			success:false,
			message:'User role is not matching'
		})
	}
}



exports.isAdmin = (req,res,next)=>{

	try {

			if(req.user.role !=="Admin"){
				return res.status(401).json({
					success:false,
					message:"this is protected route for the Admin"
				})
			}
			next();

	} catch (error) {
		return res.status(503).json({
			success:false,
			message:'User role is not matching'
		})
	}
}

