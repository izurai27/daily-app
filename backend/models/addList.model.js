const mongoose = require('mongoose');
const schema = mongoose.Schema;

const addListSchema = new schema ({
  title : { type: String, require : true},
  recipeId : {type: String, require : true},
  // portion : {type : Number, require : true},
  // cookingStyle : { type: String, require : true},
  // instruction : [String],
  // source : {type:String, require : true},
  // ytLink : {type:String, require: true},
  // ingredients : [detailIngredients],
  // occasion : [String], //hari raya, sarapan, malam, sedang hujan, bulan puasa, dll
  // mealtype : [String], //lauk, sayur, dessert, buah
  // origin: String,
  // ingredientsInstruction: [ingredientsInstructionSchema]
})

const addList = mongoose.model('addList', addListSchema);
module.exports = addList;