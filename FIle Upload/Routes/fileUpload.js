const express = require('express');
const router = express.Router();


const {locafileUpload,imageUpload,videoUpload,imageUploadReducer} = require('../Controllers/fileupload');


router.post('/imageUpload',imageUpload);
router.post('/videoUpload',videoUpload);
router.post('/imageUploadReducer',imageUploadReducer);
router.post('/localfileUpload',locafileUpload);


module.exports =router;