const express = require('express');
const router = express.Router();
const { retailBillingController } = require('../controller/retailBillingContorller.js');
const { retailBillingMiddleware } = require('../middleware/retailBillingMiddleware.js');
const { retailBillingValidate } = require('../validations/retailBillingValidate.js');

router
    .route('/retailBilling')
    .post(retailBillingValidate, retailBillingMiddleware, retailBillingController)


module.exports = router;