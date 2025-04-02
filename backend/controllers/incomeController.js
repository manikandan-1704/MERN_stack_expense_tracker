const User = require("../models/User");
const Income = require("../models/Income");

exports.addIncome = async(req, res) => {
    const userId = req.user.id;

    try{
        const {icon, source, amount, date} = req.body;

        if(!source || !amount || !date) {
            return res.status(400).json({message: "Please fill all fields"});
        }

        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });
        await newIncome.save();
        res.status(200).json(newIncome);
    }catch(err){
        res.status(500).json({message: "Server Error"});
}
}

exports.getAllIncome = async(req, res) => {
    const userId = req.user.id;

    try{
        const income = await Income.find({userId}).sort({ date: -1 });
        res.json(income);
    }catch(err){
        res.status(500).json({message: "Server Error"});
    }
}

exports.deleteIncome = async(req, res) => {
    try{
        await Income.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Income deleted successfully"});
    }catch(err){
        res.status(500).json({message: "Server Error"});
    }
}

exports.downloadIncomeExcel = async(req, res) => {}