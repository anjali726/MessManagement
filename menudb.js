const Menu = require('./models/menuSchema');
const menuData = require('./menuitems.json');
const connectDB=require("./db/connect");
const start=async () => {
  try{
    await connectDB();
    await Menu.create(menuData);
    console.log('success');
  }
  catch(error){
    console.log('error');
  }
};
start();