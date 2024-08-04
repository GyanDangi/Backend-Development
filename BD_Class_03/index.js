// server created:
const express = require('express')
const app = express();

require('dotenv').config();

// dabtabase server imported:
const dbConnect =require('./Config/database');
dbConnect();



const PORT =process.env.PORT || 3000;

// Parsing:Middleware parsing
app.use(express.json());

const blogRoutes= require('./Routes/BlogRoutes');

// middleware: Route Mounting
app.use('/api/v1',blogRoutes);

// listen on port
app.listen(PORT,()=>{
	console.log(`Server Successfully started at Port ${PORT}`)
})

// default: Route
app.get('/', (req,res)=>{
	res.send("<h2>This is my first BLog</h2>")
})


