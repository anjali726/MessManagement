

const express = require("express");
const hbs = require('hbs')
const app = express();
const path=require('path')
const mongoose = require("mongoose");
const port = process.env.PORT || 3000; 
// Database
const database = (module.exports = () => {
  const connectionParams = {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://garg:PlKeuOEjl5KZUhUs@cluster0.gjyxagg.mongodb.net/using?retryWrites=true&w=majority",

      connectionParams
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});

database();
const Register=require("./models/registers");
const { request } = require("http");
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
const t_path=path.join(__dirname,'/templates/views')
const p_path=path.join(__dirname,'/templates/partials')
app.set('view engine', 'hbs')
app.set('views', t_path)
hbs.registerPartials(p_path)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res)=>{ 
  res.render("index"); 
}); 
app.get('/register', (req, res)=>{ 
  res.render("register"); 
}); 
app.post('/register', async (req, res)=>{ 
  try{
    // console.log(request.body.firstname);
    // res.send(req.body.firstname);
    const password=req.body.psw;
    const cpassword=req.body.pswrepeat;
    if(password==cpassword){
      const Registerstudent=new Register({
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        Regno: req.body.Regno,
        gender: req.body.gender,
        phone: req.body.phone,
        email: req.body.email,
        psw:password,
        pswrepeat: cpassword

      })
      const registered =await Registerstudent.save();
      res.status(201).render(index);
    }
  }
  catch(error){
    res.status(400).send(error);
  }
}); 
app.listen(port, (error) =>{ 
if(!error) 
  console.log("Server is Successfully Running, and App is listening on port "+ port) 
else
  console.log("Error occurred, server can't start", error); 
} 
); 
