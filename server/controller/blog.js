const { exec, escape } = require('../db/mysql')   // escape  防止SQL注入
const xss = require('xss')   // 防止XSS攻击

const getBlogList = (author) => {
    author = escape(author)

    let sql = `select * from list where 1=1 `
    if(author) {
        sql += `and author=${author} `
    }

    sql += `order by createtime desc;`
    console.log('getBlogList sql',sql)

    return exec(sql)
}

const getBlogDetail = (id) => {
    id = escape(id)
    let sql = `select * from list where id=${id}`

    return exec(sql).then(rows =>{
        return rows[0]
    })
}

const addBlog = (blogData = {}) => {
    const title = xss(escape(blogData.title))
    const content = xss(escape(blogData.content))
    const author = xss(escape(blogData.author))
    const id = xss(escape(blogData.id))
    const createTime = 123456

    let sql = `insert into list (id, title, content, author, createtime) values (${id}, ${title}, ${content}, ${author}, ${createTime})`
    console.log('addBlog sql',sql)
    return exec(sql)
}

const updateBlog = (id = 0, blogData = {}) =>{
    id = escape(id)
    const title = xss(escape(blogData.title))
    const content = xss(escape(blogData.content))

    let sql = `update list set title=${title}, content=${content} where id=${id}`

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