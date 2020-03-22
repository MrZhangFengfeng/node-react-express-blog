const { exec, escape } = require('../db/mysql')   // escape  防止SQL注入
const xss = require('xss')   // 防止XSS攻击

const search = (username) => {
    username = escape(username)
    console.log('ssssssssss',username)
    let sql = `select * from user where username=${username}`

    console.log('search user sql',sql)

    return exec(sql)
}

const register = (data) => {
    username = escape(data.username)
    password = escape(data.password)
    email = escape(data.email)
    phone = escape(parseInt(data.phone))
    createTime = 123

    let sql = `insert into user (username, password, email, phone, createtime) values (${username}, ${password}, ${email}, ${phone}, ${createTime})`

    console.log('register sql',sql)

    return exec(sql)
}

const login = (username, password) => {
    username = escape(username)
    password = escape(password)

    let sql = `select * from user where username=${username} and password=${password} `

    console.log('login sql',sql)

    return exec(sql)
}

module.exports = {
    search,
    register,
    login
}