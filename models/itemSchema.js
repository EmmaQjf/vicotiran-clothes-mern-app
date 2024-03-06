const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema(
        {
          title: { type: String, required: true },
          desc: { type: String, required: true },
          img: { type: String, required: true },
          categories: [{type: Schema.Types.ObjectId, ref:'Category'}],
    
          size: { type: Array },
          color: { type: Array },
          price: { type: Number, required: true },
          inStock: { type: Boolean, default: true },
        },
        { timestamps: true }
      );
    
module.exports = itemSchema;