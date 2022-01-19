const { Diet, Recipe } = require('../db.js');
const axios =require('axios');
require('dotenv').config();
const {
    API_KEY
  } = process.env;
const getAllRecipes=async(req,res)=>{
    try {
        const {name} = req.query;
        var api =await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=2&addRecipeInformation=true&apiKey=${API_KEY}`)
        const myApi=await Recipe.findAll({
            include:[{
                model:Diet,
                attributes:['nombre','descripcion'],
                through:{
                    attributes:[]
                }
            }]
        })
        api=api.data.results;
        if(name){
            let buscados=[];
            for(let i=0;i<api.length;i++){
                if(api[i].title.toLowerCase().includes(name.toLowerCase())){
                    buscados.push(api[i]);
                }
            }
            for(let i=0;i<myApi.length;i++){
                if(myApi[i].title.toLowerCase().includes(name.toLowerCase())){
                    buscados.push(myApi[i]);
                }
            }
            res.json(buscados);
        }else{
            let todo=api.concat(myApi)
            res.json(todo)
        }
    } catch (error) {
        console.log(error);
        res.status(404).send('error al traer las Recetas')
    }
}
const getIdRecipe=async(req,res)=>{
    const {id} = req.params;
    try {
        if(id.length<10){
            
            var api =await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=2&addRecipeInformation=true&apiKey=${API_KEY}`);
            api=api.data.results;
            for (let i=0;i<api.length;i++){
                if(api[i].id===parseInt(id)){
                    res.json(api[i]);
                    break;
                }
            }
            res.send('really como qno esta')
        }else{
            const myApi=await Recipe.findByPk(id,{
                include:[{
                    model:Diet,
                    attributes:['nombre','descripcion'],
                    through:{
                        attributes:[]
                    }
                }]
            })
            res.json(myApi);
        }
    } catch (error) {
        
    }
}
const postAddRecipe =async(req,res)=>{
    const re=req.body;
    try {
        const receta =await Recipe.create({
            sourceName:re.sourceName,
            title:re.title,
            image:re.image,
            summary:re.summary,
            healthScore:re.healthScore,
            analyzedInstructions:re.analyzedInstructions
        })
        try {
            receta.addDiet(re.diet)
        } catch (error) {
            console.log(error)
            res.send('error al cargar las dietas')
        }
        //console.log(receta)
        res.send(receta);
    } catch (error) {
        res.send('error al crear la receta')
    }
}
module.exports={
    getAllRecipes,
    postAddRecipe,
    getIdRecipe
}