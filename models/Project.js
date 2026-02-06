const mongoose = require('mongoose')



const ProjectSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    title:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    description:{
        type: String,
        required: true,
        maxlength:500
    },
    price:{
        type: Number,
        required:true,
        minlength:500,
    },
    category:{
        type:String,
        enum:["Food", "Delivery", "Service", "Other"],
        default:"Other"
    },

    image:{
        type: String 
    },

    isAvailable:{
        type: Boolean,
        default: true
    }
},{
    timestamps:true
}
)

module.exports = mongoose.model("Project",ProjectSchema );
