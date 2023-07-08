const mysql = require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database:'car'
})
con.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  })
/**
 * 获取数据
 * @param {string} 模型名称
 * @return {promise}  回调函数
 */
function getAll(sql){
    return new Promise((resolve, reject) => {
        con.query(sql, (err, data) => {
          if (err) reject(err)
          resolve(data)
        })
      })
}
module.exports={
    getAll,
}
