const express= require('express')
const router= express.Router();

// import controller:
const {createBlog} = require('../Controller/createBlog');
const {retriveBlog} = require('../Controller/retriveBlog');
const {updateBlog} = require('../Controller/updateBlog');

router.post('/createBlog',createBlog);
router.get('/retriveBlog',retriveBlog);
router.put('/updateBlog/:id',updateBlog);


module.exports = router;