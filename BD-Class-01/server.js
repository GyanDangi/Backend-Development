
const express = require("express");
const app= express();


const bodyParser= require('body-parser');
const { default: mongoose } = require('mongoose');


app.use(bodyParser.json());


app.listen(3000,  ()=>{
		console.log("Server Started At port no. 3000");
})

app.get('/', (request, response)=>{
	response.send("hello ji kaise ho");
})

app.post('/api/cars', (request,response)=>{
	const {name, brand} = request.body;
	console.log(name);
	console.log(brand);
	response.send("Car data submitted Succefully")
})



mongoose.connect('mongodb://localhost:27017/MyDatabase',{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
.then(()=>{
	console.log("Connection Successful")
})
.catch((error)=>{
	console.log("Error in Connecting with Db")
})



