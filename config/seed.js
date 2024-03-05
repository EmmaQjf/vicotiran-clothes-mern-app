require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Dresses', items: [], sortOrder: 10 },
        { name: 'Tops', items: [], sortOrder: 20 },
        { name: 'Skirts', items: [], sortOrder: 30 },
        { name: 'Hats', items: [], sortOrder: 40 },
        { name: 'Women', items: [], sortOrder: 50 },
        { name: 'Men', items: [], sortOrder: 60 }
    ]);
  
    await Item.deleteMany({});
    

    const items = await Item.create([
        {title: 'Gothic Victorian Ball Gown', desc: 'handmade',img:"👗", categories:[categories[0],categories[4]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 100},
  
        {title: 'Royal Queen Dress', desc: 'handmade',img:"👗", categories:[categories[0],categories[4]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 100},
  
        {title: 'Embroidered Cotton Blouse', desc: 'handmade',img:"👚", categories:[categories[1],categories[4]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 30},
  
        {title: 'White Satin Blouse', desc: 'handmade',img:"👕", categories:[categories[1],categories[4]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 30},
  
        {title: 'black ruffle Blouse', desc: 'handmade',img:"👕", categories:[categories[1],categories[4]], size:['XS','S','M','L','XL'],color:['red','blue','white','black'],price: 30},

        {title: 'White linen Blend Blouse', desc: 'handmade',img:"👕", categories:[categories[1],categories[4]], size:['XS','S','M','L','XL'],color:['red','blue','white','black'],price: 30},
  
        {title: 'White Stripe Linen Blend Skirt', desc: 'handmade',img:"👗", categories:[categories[2],categories[4]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 50},
  
        {title: 'Satin Jacquard Skirt', desc: 'handmade',img:"👗", categories:[categories[2],categories[4]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 50},
  
        
  
        {title: 'women hat 1', desc: 'handmade',img:"帽子", categories:[categories[3],categories[4]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 30},
        {title: 'women hat 2', desc: 'handmade',img:"帽子", categories:[categories[3],categories[4]], size:['XS','S','M','L','XL'],color:['red','blue','white','black'],price: 30},
        {title: 'men hat 1', desc: 'handmade',img:"🎩", categories:[categories[3],categories[5]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 30},
        {title: 'men hat 2', desc: 'handmade',img:"🎩", categories:[categories[3],categories[5]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 30},
        {title: 'men shirt 1', desc: 'handmade',img:"👚", categories:[categories[1],categories[5]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 30},
        {title: 'men shirt 2', desc: 'handmade',img:"👚", categories:[categories[1],categories[5]],size:['XS','S','M','L','XL'],color:['red','blue','white','black'], price: 30},
      ]);
  
    console.log(items)
  
    for (const item of items) {
        for (const category of item.categories) {
          await Category.findOneAndUpdate(
            { _id: category._id },
            { $push: { items: item._id } },
            { new: true }
          );
        }
      }
  
     
      process.exit();
    
    })();