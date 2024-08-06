const File = require('../Models/file');
const cloudinary = require('cloudinary').v2


// local file upload :handler
exports.locafileUpload = async (req,res)=>{
	try {
		
		// to get file from body:
		const file =req.files.file
		console.log("FIle aa gaya hai",file);
		// create file path where files needs to be stored
		let path = __dirname + "/files" +Date.now()+`.${file.name.split('.')[1]}`;
		

		// add path to the move(mv)  function:
		file.mv(path, (err)=>{
			console.log(err)
		})

		res.json({
			success:true,
			message:"FIle uploaded Successfully",
		})
	} catch (error) {
			console.error(error);
			console.log("Not able to upload file");
			
	}
}

function issupportedType(file,supportedType){
	return  supportedType.includes(file);
}

async function uploadFileToCloudinary(file,folder,quality) {
	const options={folder};
	console.log("temp file path",file.tempFilePath);
	if(quality){
		options.quality= quality;
	}
	options.resource_type = "auto";
	return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload = async (req,res)=>{
	try {
		const {name,tags,email}= req.body;
		console.log(name,tags,email);

		// fetch image data:
		const file= req.files.imageFile;
		console.log(file);
		
		// validation: supported format or not 
		const supportedType =["jpeg","jpg","png"];
		const filetype= file.name.split('.')[1].toLowerCase();
		

		if(!issupportedType(filetype,supportedType)){
			res.status(400).json({
				success:false,
				message:"file type not supported"
			})
		}

		const response= await uploadFileToCloudinary(file,"Gyan");
		console.log(response);

		// db me entry:
		const fileData= await File.create({
			name,
			tags,
			imageUrl:response.secure_url,
			email
		})

		res.json({
			success:true,
			imageUrl:response.secure_url,
			message:'image uploaded successfully'
		})
	} catch (error) {
		console.error(error);
		res.status(400).json({
			success:false,
			message:"something went wrong"
		})
		
	}
}


exports.videoUpload = async (req,res)=>{
	try {
		const {name,tags,email}= req.body;
		console.log(name,tags,email);

		// fetch image data:
		const file= req.files.videoFile;
		console.log(file);
		
		// validation: supported format or not 
		const supportedType =["mov","mp4"];
		const filetype= file.name.split('.')[1].toLowerCase();
		

		if(!issupportedType(filetype,supportedType)){
			res.status(400).json({
				success:false,
				message:"file type not supported"
			})
		}

		const response= await uploadFileToCloudinary(file,"Gyan");
		console.log(response);

		// db me entry:
		const fileData= await File.create({
			name,
			tags,
			imageUrl:response.secure_url,
			email
		})

		res.json({
			success:true,
			imageUrl:response.secure_url,
			message:'Video uploaded successfully'
		})
	} catch (error) {
		console.error(error);
		res.status(400).json({
			success:false,
			message:"something went wrong"
		})
		
	}
}

exports.imageUploadReducer = async (req,res)=>{
	try {
		const {name,tags,email}= req.body;
		console.log(name,tags,email);

		// fetch image data:
		const file= req.files.imageFile;
		console.log(file);
		
		// validation: supported format or not 
		const supportedType =["jpeg","jpg","png"];
		const filetype= file.name.split('.')[1].toLowerCase();
		

		if(!issupportedType(filetype,supportedType)){
			res.status(400).json({
				success:false,
				message:"file type not supported"
			})
		}
		// by passing third parameter to the uploadcloud directory we can reduce quality
		const response= await uploadFileToCloudinary(file,"Gyan",30);
		console.log(response);

		// db me entry:
		const fileData= await File.create({
			name,
			tags,
			imageUrl:response.secure_url,
			email
		})

		res.json({
			success:true,
			imageUrl:response.secure_url,
			message:'image uploaded successfully'
		})
	} catch (error) {
		console.error(error);
		res.status(400).json({
			success:false,
			message:"something went wrong"
		})
		
	}
}