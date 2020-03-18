const { exec, escape } = require('../db/mysql')   // escape  防止SQL注入
const xss = require('xss')   // 防止XSS攻击

const getBlogList = (author, keyword) => {
    author = escape(author)
    keyword = escape(keyword)

    let sql = `select * from blogs where 1=1 `
    if(author) {
        sql += `and author=${author} `
    }
    if(keyword) {
        sql += `and keyword=${keyword} `
    }
    sql += `order by createtime desc;`
    

    return exec(sql)
}

const getBlogDetail = (id) => {
    id = escape(id)
    let sql = `select * from blogs where id=${id}`

    return exec(sql).then(rows =>{
        return rows[0]
    })
}

const addBlog = (blogData = {}) => {
    const title = xss(escape(blogData.title))
    const content = xss(escape(blogData.content))
    const author = xss(escape(blogData.author))
    const createTime = Date().now()

    let sql = `insert into blogs (title, content, author, createtime) values (${title}, ${content}, ${author}, ${createTime})`

    return exec(sql).then(res =>{
        return {
            id: res.insertId
        }
    })
}

const updateBlog = (id = 0, blogData = {}) =>{
    id = escape(id)
    const title = xss(escape(blogData.title))
    const content = xss(escape(blogData.content))

    let sql = `update blogs set title=${title}, content=${content} where id=${id}`

    return exec(sql).then(res =>{
        if(res.affectedRows > 0) {
            return true
        }
        
        return false
    })
}

const deleteBlog = (id, author) =>{
    author = escape(author)
    id = escape(id)

    let sql = `delete from blogs where id=${id} and author=${author}`

    return exec(sql).then(res =>{
        if(res.affectedRows > 0) {
            return true
        }
        
        return false
    })
}

module.exports = {
    getBlogList,
    getBlogDetail,
    addBlog,
    updateBlog,
    deleteBlog
}