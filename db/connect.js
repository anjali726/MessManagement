const mongoose = require("mongoose");

//Database Connection
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