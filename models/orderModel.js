import mongoose from 'mongoose';

// Define the schema for the order
const orderSchema = new mongoose.Schema(
  {
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Reference to the Product schema
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    Userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User schema
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updated_at: {
      type: Date,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps automatically
);

// Create the model from the schema
const Order = mongoose.model('Order', orderSchema);

// Export the model
export default Order;
