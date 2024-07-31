// server Cerate:
const express = require('express');
const app= express();

// connecting with dotenv show that define port:
require('dotenv').config();

// Connecting with database
const dbConnect =require('./Config/database')
dbConnect();



// connecting with port:
const PORT =process.env.PORT || 4000;

// middleware to parse json from requrest body:
app.use(express.json());

// connecting with the routes created:
const todoRoutes= require('./Routes/todos');

// unmounting routes:
app.use('/api/v1',todoRoutes);

// listing on prot:
app.listen(PORT,()=>{	
	console.log(`"server succefully started at Port ${PORT}`);
})



// default route is mendatory:
app.get('/', (req,res)=>{
	res.send(`<h2>THis is home page</h2>`)
})