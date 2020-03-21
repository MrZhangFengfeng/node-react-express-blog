const { exec, escape } = require('../db/mysql')   // escape  防止SQL注入
const xss = require('xss')   // 防止XSS攻击

const login = (username, password) => {
    username = escape(username)
    password = escape(password)

    let sql = `select * from user where username=${username} and password=${password} `

    console.log('login sql',sql)

    return exec(sql)
}

module.exports = {
    login
}