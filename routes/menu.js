const express=require('express')
const router=express.Router();
const{
    getAllMenu,
    getAllMenutesting,
} = require("../controllers/menu");

router.route("/").get(getAllMenu);
router.route("/testing").get(getAllMenutesting);

module.exports=router;