const router = require ('express').Router();
let addList = require('../models/addList.model')

router.route('/').get((req,res) => {
  addList.find()
  .then(addList => res.json(addList))
  .catch(err => res.status (400).json('error :' + err))
});

//commad to add addList list
router.route('/add').post((req,res)=>{
  
  const userid = req.body.userid;
  const title = req.body.title;
  const recipeItem = req.body.recipeItem
  
  
  const newAddList = new addList({
    userid,title, recipeItem
  })

  newAddList.save()
  .then(()=> res.json('Recipe added, userid: '+ userid))
  .catch(err => res.status(400).json('Error:'+err))
})

//command to delete by id
router.route('/id=:id').delete((req,res)=>{
  addList.findByIdAndDelete(req.params.id)
  .then(() => res.json('addlist '+req.params.id+' successfully deleted'))
  .catch(err => res.status(400).json('error: '+err))
})

module.exports = router