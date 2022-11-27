function errorHandler(err, req, res, next) {
    console.log(req)
    switch (true) {
        default:
            return res.status(500).json({ message: err.message });
    }
}
module.exports = errorHandler;