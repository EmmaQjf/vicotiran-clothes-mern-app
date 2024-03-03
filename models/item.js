const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category');

const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);

// const {Schema, model} = require('mongoose');

// const itemSchema = new Schema(
//     {
//       name: { type: String, required: true, unique: true },
//       desc: { type: String, required: true },
//       img: { type: String, required: true },
//       categories: [{type: Schema.Types.ObjectId, ref:'Category'}],

//       size: { type: Array },
//       color: { type: Array },
//       price: { type: Number, required: true },
//       inStock: { type: Boolean, default: true },
//     },
//     { timestamps: true }
//   );

// module.exports ={
//     itemModel: model('Item', itemSchema),
//     itemSchema
// } 