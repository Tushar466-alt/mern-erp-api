const retailBillingMiddleware = (req, res, next) => {
    return res.status(200).json({message: "Middleware Working."});
    // next();
}

module.exports = {
    retailBillingMiddleware,
}