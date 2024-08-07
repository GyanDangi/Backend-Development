const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

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


// post middleware:
fileSchema.post("save",async function(doc){
	try {
		console.log("docs",doc);

		// transporter:
		let trasnporter =nodemailer.createTransport({
			host:process.env.MAIL_HOST,
			auth:{
				user:process.env.MAIL_USER,
				pass:process.env.MAIL_PASS
			}
		});


		//send mail:
		let info = await trasnporter.sendMail({
			from:`Gyan Mail sender`,
			to:doc.email,
			subject:"NEw file uploaded on Cloudinary",
			html:`<h2>HEllo ji kaise ho</h2>
					Your file is uploaded to Cloudinary
					<a href='${doc.imageUrl}'>${doc.imageUrl}</a>`
		})


	} catch (error) {
		console.log(error);
	}
})


module.exports = mongoose.model("File",fileSchema);