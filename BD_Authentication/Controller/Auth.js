const bcrypt = require('bcrypt');
const User = require('../Models/user');
const jwt = require('jsonwebtoken')

require('dotenv').config();

exports.signup = async (req,res)=>{

		try {

			const {name, email, password, role} = req.body;
			const existingUser = await User.findOne({email});

			if(existingUser){
				return res.status(400).json({
					success:false,
					message:"User Already Exist"
				})
			}

			let hashPassword;
			try {
				hashPassword = await bcrypt.hash(password,10);
			} catch (error) {
				return res.status(402).json({
					success:false,
					message:"ERROR IN HASHING PASSWORD"
				})
			}

			const user = await User.create({
				name, email, password:hashPassword,role
			})
			return res.status(200).json({
				success:true,
				data:user,
				message:"User Created Successfully"
			})

		} catch (error) {
				console.log(error)
				console.error(error);
				console.log("ERROR IN USER CREATION")
				res.status(500).json({
					success:false,
					message:"USER NOT CREATED"
				})
		}
}


exports.login = async (req,res)=>{

	try {
		
			// fetch the data from db body:
			const {email,password}= req.body;

			// validation email and password:
			if(!email || !password){

				return res.status(400).json({
					success:false,
					message:"Please Enter detail Correctly"
				})
			}


			// check for user exits:
			const user = await User.findOne({email});
			if(!user){
				return res.status(400).json({
					success:false,
					message:"User not Exist"
				})
			}

			// user exit then verify password and send jwt token
			const payload ={
				email:user.email,
				id:user._id,
				role:user.role
			}
			if(bcrypt.compare(password,user.password)){

				// password match:
				let token = jwt.sign(payload,process.env.JWT_SECRET,{
					expiresIn:'2hr'
				})

				// cookies ke sath khelne ke liye token bhej denge
				// user ko token de diya
				user.token= token;
				user.password= undefined;

				const options={
					expire : new Date(Date.now+3*24*60*60*1000 ),
					httpOnly:true, // client side no access
					secure:true

				}
				res.cookie('Gyancookie',token,options).status(200).json({
					success:true,
					user,
					token,
					message:"User logged in successfully"

				})

			}
			else{
				// password Not matched:
				return res.status(402).json({
					success:false,
					message:"Please enter correct passowrd"
				})
			}

	} catch (error) {

		console.log(error)
		console.error(error)
		res.status(403).json({
			success:false,
			message:"Login Faild"
		})
	}
}