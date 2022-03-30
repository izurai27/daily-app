const router = require ('express').Router();
let shopping = require('../models/shoppingList.model')

//command when user get data
router.route('/').get((req,res) => {
  shopping.find()
  .then(recipe => res.json(recipe))
  .catch(err => res.status (400).json('error :' + err))
});

//command to add recipe
router.route('/add').post((req,res)=>{
  
  const userid = req.body.userid
  const ingredientsName= req.body.ingredientsName
  const quantity = req.body.quantity
  const measurement = req.body.measurement

  const newShopping = new shopping({
    userid, ingredientsName, quantity, measurement
  })

  newShopping.save()
  .then(()=> res.json('shopping item added, recipe: '+ title))
  .catch(err => res.status(400).json('Error:'+err))
})



module.exports = router
