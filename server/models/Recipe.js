const mongoose = require('mongoose');

//model

const RecipeSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imgSrc:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    method:{
        type:String,
        required:true
    },
    preparationTime:{
        type:String,
        required:true
    },
    nutritions:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Recipe',RecipeSchema);