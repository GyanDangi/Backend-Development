const express = require('express')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000


app.use(express.json());

require('./Config/database').Connect();


const user = require('./Routes/user')
app.use("/api/v1",user);

app.listen(process.env.PORT,()=>{
	console.log(`LISTENING ON PORT ${PORT}`)
})