const mongoose = require('mongoose');

const retailBillingSchema = new mongoose.Schema({
    vendorName: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    billingDate: {
      type: Date,
      required: true,
    },
    timeZone: {
      type: String,
      required: true,
    },
    customerContact: {
      type: String,
      required: true,
    },
    totalValue: {
      type: Number,
      required: true,
    },
    products: productShema,
    taxGST: {
      type: String,
      required: true,
    },
    discountAmount: {
      type: String,
      required: true,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
  });

  const productShema = {
      productId: {
        type: String,
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unitPrice: {
        type: Number,
        required: true,
      },
    }



const retailBillingModel = mongoose.model('retailBillingModel', retailBillingSchema, 'retailBillingCollection');

module.exports = {
    retailBillingModel,
}