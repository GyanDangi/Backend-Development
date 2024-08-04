const Blogs = require('../Model/BlogSchema');

exports.retriveBlog = async(req,res)=>{

	try {
		 	
			const post = await Blogs.find({});
			res.status(200).json({
				success:true,
				data:post,
				message:"data retrieve Succefully"
			})
	} catch (error) {
			console.log(error);
			console.error(error);
			res.status(500).json({
				success:false,
				data:"internal sever Error",
				message:"error in retriving post"
			})
	}
}