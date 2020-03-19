const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)
// 开始连接
con.connect()

// 统一执行sql的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if(err) {
                reject(err)
                return
            }
            // 去除nodejs链接数据库产生的RowDataPacket
            result = JSON.stringify(result)
            const data = JSON.parse(result)
            resolve(data)
        })
    })
    return promise
}

module.exports = {
    exec,
    escape: mysql.escape
}