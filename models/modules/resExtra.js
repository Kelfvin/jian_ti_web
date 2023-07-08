// 统一返回结果的中间件（以json格式）
module.exports = function (req, res, next) {
    res.sendResult = function (data, code, message) {
        var fmt = req.query.fmt ? req.query.fmt : "rest"
        if (fmt == "rest") { //json格式
            res.json({
                "data": data,
                "meta": {
                    "msg": message,
                    "status": code
                }
            })
        };
    }
    next();
}