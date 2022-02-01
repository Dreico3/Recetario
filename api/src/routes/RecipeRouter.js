const {getAllRecipes,postAddRecipe,getIdRecipe,getMyRecipes}=require('../controllers/RecipeController');
const {Router} = require('express');

const rutaRecipes=Router();

rutaRecipes.get('/',getAllRecipes)
rutaRecipes.post('/create',postAddRecipe)
rutaRecipes.get('/recetas',getMyRecipes)
rutaRecipes.get('/:id',getIdRecipe)
module.exports=rutaRecipes;