const loggin = (req,res, next) => {
    console.log(req.method, " THIS API IS BEEN HIT -> ", req.url, new Date())
    next();
}

module.exports = loggin