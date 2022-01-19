const {getAllRecipes,postAddRecipe,getIdRecipe}=require('../controllers/RecipeController');
const {Router} = require('express');

const rutaRecipes=Router();

rutaRecipes.get('/',getAllRecipes)
rutaRecipes.post('/create',postAddRecipe)
rutaRecipes.get('/:id',getIdRecipe)
module.exports=rutaRecipes;