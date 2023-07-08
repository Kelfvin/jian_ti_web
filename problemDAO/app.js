const express = require('express')
const app = express()
const port = 3000
const {getAll} = require('./DAO/dao.js')    // 一定要{}包含

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 允许所有来源访问
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // 允许的 HTTP 请求方法
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头字段

    // 如果是预检请求（OPTIONS方法），则直接返回成功状态码
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

var restextra = require("./modules/resExtra")
app.use(restextra)
app.get('/', async (req, res) => {
    let sql="select * from cars"
    const data = await getAll(sql)
    res.sendResult(data, 200, "获取成功")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})