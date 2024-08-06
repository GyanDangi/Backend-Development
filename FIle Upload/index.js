//create app
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

// get port detail
const PORT = process.env.PORT || 3000;

// connect with db
const db= require('./Config/database');
db.connect();

// cloud se connnect krna hai:
const cloudinary = require('./Config/cloudinary');
cloudinary.cloudinaryConnect();




// middleware
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));	

// routes
const upload = require('./Routes/fileUpload');
// mounting the route
app.use('/api/v1/upload',upload);

// listen
app.listen(process.env.PORT,()=>{
	console.log(`App is running at ${PORT}`)
})

// default routes
app.get('/',(req,res)=>{

	res.send("<h1>File upload</h1>")
})