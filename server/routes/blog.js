var express = require('express');
var router = express.Router();
const { getBlogList,  getBlogDetail,  addBlog,  updateBlog,  deleteBlog } =require('../controller/blog')
const { SuccessModel, ErrorModel} = require('../model/resModel')

router.get('/list', function(req, res, next) {
  const author = req.query.author || ''
  const result = getBlogList(author)
  return result.then((listData)=> {
    console.log('listData',listData)
    res.send(new SuccessModel(listData,'获取列表成功'))
  })
});

router.post('/add', function(req, res, next) {
  const result = addBlog(req.body)
  return result.then((id)=> {
    console.log('idddddddddd',id)
    res.send(new SuccessModel(id,'获取列表成功'))
  })
})

module.exports = router;
