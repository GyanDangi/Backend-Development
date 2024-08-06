const express = require('express')
const app = express();

const cookieParser= require('cookie-parser');

require('dotenv').config();
const PORT = process.env.PORT || 8000

// adding cookie parser:
// app.use(cookieParser());

// json parser:
app.use(express.json());

require('./Config/database').Connect();


const user = require('./Routes/user')
app.use("/api/v1",user);

app.listen(process.env.PORT,()=>{
	console.log(`LISTENING ON PORT ${PORT}`)
})