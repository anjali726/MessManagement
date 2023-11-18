
const Menu=require("../models/menuSchema");

const getAllMenu=async(req,res) => {
    const mydata=await Menu.find({})
    res.status(200).json({mydata});
};
const getAllMenutesting=async(req,res) => {
    res.status(200).json({msg:"i m getall menu testing"});
};

module.exports = {getAllMenu,getAllMenutesting};