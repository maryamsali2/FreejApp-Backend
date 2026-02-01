const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// User Schema 
const UserSchema = new mongoose ({
    username:{
        type: String,
        required: true,
        minlength: [5, "Username must be at least 5 characters"],
        maxlength: [15, "Username is too long"]

    },

    phone:{
        type: String,
        required: true,
         match: [
    /^[0-9]{8}$/,
    "Phone number must be exactly 8 digits"]
    },
    
    password:{
        type: String,
        require: true,
        minlength:[6,"Password must be at least 6 characters",,

        ]
    }
},
{
    timestamps: true 
}
);




module.exports = mongoose.model("User",UserSchema)