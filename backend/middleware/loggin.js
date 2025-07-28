const loggin = (req,res, next) => {
    console.log(req.method, " THIS API HAS BEEN HIT -> ", req.url, new Date())
    next();
}

module.exports = loggin