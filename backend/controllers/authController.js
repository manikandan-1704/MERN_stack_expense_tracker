const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h"});
}

exports.registerUser = async(req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        //create user
        const user = await User.create({
            fullName,
            email, 
            password,
            profileImageUrl,
        });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
    }catch(err) {
        console.error(err);
        res.status(500).json({ message: "Error registering user", error: err.message });
    }
};

exports.loginUser = async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    try{
        const user = await User.findOne({email});
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({"message": "Invalid email or password"});
        }

        res.status(200).json({
            id: user._id,
            user, 
            token: generateToken(user._id),
        })
    }catch(err){
        res.status(500).json({message: "Error registering user", error: err.message});
    }
};

exports.getUserInfo = async(req, res) => {
    try{
        const user = await User.findById(req.user.id).select("-password");

        if(!user){
            return res.status(404).json({ message: "User not found" });
        }


        res.status(200).json(user);
    } catch(err){
        res.status(500).json({ message: "Error fetching user info", error: err.message });
    }
};