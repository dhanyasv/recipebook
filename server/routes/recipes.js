const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

//GET ALL RECIPES
router.get('/',async (req,res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.json({message:err})
    }
});
//GET A SPECIFIC RECIPE BY ID
router.get('/:recipeId',async (req,res) => {
    try {
        let recipeId = req.params.recipeId;
        const getRecipe = await Recipe.findById(recipeId);
        res.json(getRecipe);
    } catch (err) {
        res.json({message:err})
    }
});
//DELETE A SPECIFIC RECIPE BY ID
router.delete('/:recipeId',async (req,res) => {
    try {
        let recipeId = req.params.recipeId;
        const removeRecipe = await Recipe.remove({_id:recipeId});
        res.json(removeRecipe);
    } catch (err) {
        res.json({message:err})
    }
});
//update A SPECIFIC RECIPE BY ID
router.patch('/:recipeId',async (req,res) => {
    try {
        let recipeId = req.params.recipeId;
        const updateRecipe = await Recipe.updateOne({_id:recipeId},
            {$set:{title:req.body.title}});
        res.json(updateRecipe);
    } catch (err) {
        res.json({message:err})
    }
});
//SUBMIT A RECIPE
router.post('/',async (req,res) => {
    const recipe = new Recipe({
        title:req.body.title,
        imgSrc:req.body.imgSrc,
        description:req.body.description,
        method:req.body.method,
        preparationTime:req.body.preparationTime,
        nutritions:req.body.nutritions,
        ingredients:req.body.ingredients,
    })
        try{
            const savedPost = await recipe.save();
            res.json(savedPost);
        } catch(err){
            res.json({message:err})
        }
});
module.exports = router;