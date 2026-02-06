const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    costomer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required: true
    },

    quantity:{
        type:Number,
        default:1,
        min:1,
    },
    totalPrice: {
        type: Number,
        required: true,
    },

    // order status 
    status:{
        type: String, 
        enum:["pending","accepted","completed","cancelled"],
        default:"pending"
        
    },



},
    {
        timestamps:true
    }
);



module.exports = mongoose.model("Order",OrderSchema);

