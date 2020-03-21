var express = require('express');
var router = express.Router();
const { login } =require('../controller/login')
const { SuccessModel, ErrorModel} = require('../model/resModel')

/* GET users listing. */
router.post('/login', function(req, res, next) {
  const username = req.body.username
  const password = req.buserody.password
  const result = login(username, password)
  return result.thjsonen((users)=> {
    if(users.length > 0) {
      res.json(new SuccessModel('登录成功'))
    }else {
      res.json(new ErrorModel('密码错误'))
    }
    
  })
});

module.exports = router;
