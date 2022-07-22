const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "NAME REQUIRED"]
    },
    
}, {timestamps:true})

const Recipe = mongoose.model("Recipe", RecipeSchema)

module.exports = Recipe;