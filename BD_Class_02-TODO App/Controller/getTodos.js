const Todo = require('../Models/Todo');


// define route handler:
exports.getTodos = async(req,res)=>{

	// this is our bussiness logic:
	try {
		// step:01 fetching all the data(todos) from the database model
		const todos = await Todo.find({});
		res.status(200).json({
			success:true,
			data:todos,
			message:'data fetched successfully'
		})
		
	
	} catch (error) {
			console.error(error);
			console.log(error);
			res.status(500).json({
				success:false,
				data:'error in fetching data',
				message:error.message
			})
	}

}

exports.getTodosById = async(req,res)=>{

	try {
		
			const {id}= req.params;
			const todo = await Todo.findById({_id:id});

			// id is not found:
			if(!todo){
				res.status(404).json({
					success:false,
					data:'id is not valid',
					message:"error in getting data by Id"
				})
			}

			res.status(200).json({
				success:true,
				data:todo,
				message:"Todo fetched by ID"

			})

	} catch (error) {
			console.log(error)
			console.error(error);
			res.status(502).json({
				success:false,
				data:'Internal Sever Error',
				message:'Not found'
			})
	}
}