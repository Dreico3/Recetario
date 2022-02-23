const { Router } = require('express');
const DietRouter =require('./DietRouter')
const RecipeRouter =require('./RecipeRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req,res)=>{
    res.send('error al cargar las dietas')
})
router.use('/types',DietRouter);
router.use('/recipes',RecipeRouter);
module.exports = router;
