const {Router} =require('express');
const {getAllDiets} = require('../controllers/DietController')
const rutaDiets=Router();

rutaDiets.get('/',getAllDiets)

module.exports = rutaDiets;