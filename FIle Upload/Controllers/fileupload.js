const File = require('../Models/file');


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