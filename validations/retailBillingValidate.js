const { body } = require('express-validator');

const retailBillingValidate = [
    body('vendorName')
        .isString()
        .isAlpha()
]

module.exports = {
    retailBillingValidate,
}