const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
  sellerType: {
    type: String,
    enum: ['Student', 'Praxis', 'Labor'],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  klinikkofferItems: [
    {
      name: String,
      forSale: Boolean,
      price: Number,
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sellerContact: {
    email: String,
    phone: String,
  }
});

module.exports = mongoose.model('Ad', AdSchema);

