var express = require('express');
var router = express.Router();
const { getBlogList,  getBlogDetail,  addBlog,  updateBlog,  deleteBlog } =require('../controller/blog')

router.get('/list', function(req, res, next) {
  const author = req.query.author || ''
  const keyword = req.query.keyword || ''
  const result = getBlogList(author, keyword)
  res.send(result)
});

router.post('/add', function(req, res, next) {
  
})

module.exports = router;
