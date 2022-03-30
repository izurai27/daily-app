const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shoppingListSchema = new schema ({
  userid : { type: String, require : true},
  ingredientsName: {type: String, require: true} ,
  quantity : {type:Number, require:true} ,
  measurement : {type:String, require: true}
  
})

const shoppingList = mongoose.model('addList', shoppingListSchema);
module.exports = shoppingList;