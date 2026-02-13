const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register

exports.register = async(req, res) => {
    try{
        const{ username, phone, password, role } = req.body;
    

    // check if username exists 

    const existingUser = await User.findOne({phone});

    if (existingUser)
    return res.status(400).json({message:"Phone already registered"});

    // hashing pass
    const hashedPassword = await bcrypt.hash(password,10);

    const  newUser = new User ({
        username,
        phone,
        password: hashedPassword,
        role: role || "costumer" ,
    });
    // saving user info

    await newUser.save();


    res.status(201).json({message:"User regisgtered successfully"});

} catch(error){
    res.status(500).json({message:"server error", error});
}
}