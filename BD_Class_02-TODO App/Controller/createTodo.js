const Todo = require('../Models/Todo');


// define route handler:
exports.createTodo = async(req,res)=>{

	// this is our bussiness logic:
	try {
		// step:01 fetch/extract the data from the model body
			const {title,description,createAt}=req.body;

		// step:02  create a new todo obj and insert in Database(DB)
			const response = await Todo.create({title,description,createAt})
			res.status(200).json({
				success:true,
				data:response,
				message:'Entry creted successfully'
			})
	
	} catch (error) {
			console.error(error);
			console.log(error);
			res.status(500).json({
				success:false,
				data:'internal server error',
				message:error.message
			})
	}

}