const { Diet, Recipe } = require('../db.js');
const axios = require('axios');

const getAllDiets = async (req, res) => {
    const dietas=await Diet.findAll()
    res.json(dietas);
}

module.exports={
    getAllDiets
}