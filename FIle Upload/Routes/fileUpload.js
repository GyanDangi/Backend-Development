const express = require('express');
const router = express.Router();

//imageUpload, videoUpload, imageReducer,
const {locafileUpload} = require('../Controllers/fileupload');


// router.post('/imageUpload',imageUpload);
// router.post('/videoupload',videoUpload);
// router.post('/imageReducer',imageReducer);
router.post('/localfileUpload',locafileUpload);


module.exports =router;