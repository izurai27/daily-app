const router = require ('express').Router();
let recipe = require('../models/resep.model')

router.route('/').get((req,res) => {
  recipe.find()
  .then(recipe => res.json(recipe))
  .catch(err => res.status (400).json('error :' + err))
});

router.route('/add').post((req,res)=>{
  
  const title = req.body.title;
  const thumb = req.body.thumb;
  const portion = req.body.portion
  const cookingStyle = req.body.cookingStyle
  const instruction = req.body.instruction
  const source = req.body.source
  const ytLink = req.body.ytLink
  const ingredients = req.body.ingredients

  const newRecipe = new recipe({
    title, thumb, portion, cookingStyle, instruction, source, ytLink, ingredients
  })

  newRecipe.save()
  .then(()=> res.json('Recipe added'))
  .catch(err => res.status(400).json('Error:'+err))
})


module.exports = router
