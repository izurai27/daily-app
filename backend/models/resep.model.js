const mongoose = require('mongoose');
const schema = mongoose.schema;
const recipeSchema = new schema ({
  title : { type: String, require : true},
  thumb : {type: String, require : true},
  portion : {type : Number, require : true},
  cookingStyle : { type: String, require : true},
  instruction : { type: String, require: true},
  source : {type:String, require : true},
  ytLink : {type:String, require: true},
  ingredients : [detailIngredients]
 })

const detailIngredients = new schema ({
  "ingredientsName": {type: String, require: true} ,
	"quantity" : {type:Number, require:true} ,
	"measurement" : {type:string, require: true}
})

const recipe = mongoose.model('recipe', recipeSchema);
module.exports = recipe;