
const Blogs =require('../Model/BlogSchema');

exports.createBlog =async(req,res)=>{

	try {
		  const {post,comments, like} =req.body;

		  const blog = await Blogs.create({
			post, comments, like
		  })

		  res.status(200).json({
			success:true,
			data:blog,
			message:"Blog created Successfully"
		  })

	} catch (error) {
			console.log(error)
			console.error(error);
			res.status(503).json({
				success:false,
				data:"Error in creating Blog",
				message:"Internal Sever Error"
			})
	}
}