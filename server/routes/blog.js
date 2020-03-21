var express = require('express');
var router = express.Router();
const { getBlogList,  getBlogDetail,  addBlog,  updateBlog,  deleteBlog } =require('../controller/blog')
const { SuccessModel, ErrorModel} = require('../model/resModel')

router.get('/list', function(req, res, next) {
  let author = req.query.author || ''
  if(!req.query.isAdmin) {
    author = req.session.username   // 如果非管理员则强制仅能查询查询自己的博客
  }
  const result = getBlogList(author)
  return result.then((listData)=> {
    res.json(new SuccessModel(listData,'获取列表成功'))
  })
});

router.post('/add', function(req, res, next) {
  const result = addBlog(req.body)
  return result.then((id)=> {
    console.log('add blog', id)
    res.json(new SuccessModel(id,'获取列表成功'))
  })
})

module.exports = router;
