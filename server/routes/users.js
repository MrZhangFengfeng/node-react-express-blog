var express = require('express');
var router = express.Router();
const { login, register, search } =require('../controller/login')
const { SuccessModel, ErrorModel} = require('../model/resModel')

/* POST user register */
router.post('/register', function(req, res, next) {
  const username = req.body.username
  const password = req.body.password
  const searchResult = search(username)
  searchResult.then(data =>{
    if(data.length > 0) {
      res.json(new ErrorModel('用户名已存在'))
    } else {
      const registerResult = register(req.body)
      return registerResult.then((user)=> {
        console.log('注册结果：', user)
        if(user.insertId >= 0) {
          res.json(new SuccessModel('注册成功'))
        }else {
          res.json(new ErrorModel('注册失败'))
        }
      })
    }
  })
});

/* POST user login */
router.post('/login', function(req, res, next) {
  const username = req.body.username
  const password = req.body.password
  const searchResult = search(username)
  searchResult.then(data =>{
    if(data.length <= 0) {
      res.json(new ErrorModel('查无此用户'))
    } else {
      const loginResult = login(username, password)
      return loginResult.then((user)=> {
        if(user.length > 0) {
          res.json(new SuccessModel('登录成功'))
        }else {
          res.json(new ErrorModel('密码错误'))
        }
      })
    }
  })
  const result = login(username, password)
});

module.exports = router;
