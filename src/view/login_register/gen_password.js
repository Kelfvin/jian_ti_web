const CryptoJS = require('crypto-js');



// 加密函数
module.exports = function genPassword(password) {
    return CryptoJS.MD5(password).toString();

}


