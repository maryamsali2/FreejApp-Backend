const mongoose = require("mongoose");
const Project = require("./Project");

const ItemSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required:true
    },

    description:{
        type:String,
    },

    image:{
        type:String
    },

    Project:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },




},
{
    timestamps:true,
}

)

module.export = mongoose.model("Item",ItemSchema)