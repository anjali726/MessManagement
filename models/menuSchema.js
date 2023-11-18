// menuSchema.js
// const mongoose=require("mongoose")
// const menuSchema=new mongoose.Schema({
//   menu: {
//     Monday: {
//       breakfast: String,
//       snack: String,
//       lunch: String,
//       dinner: String,
//     },
//     Tuesday: {
//       breakfast: String,
//       snack: String,
//       lunch: String,
//       dinner: String,
//     },
//     Wednesday: {
//       breakfast: String,
//       snack: String,
//       lunch: String,
//       dinner: String,
//     },
//     Thursday: {
//       breakfast: String,
//       snack: String,
//       lunch: String,
//       dinner: String,
//     },
//     Friday: {
//       breakfast: String,
//       snack: String,
//       lunch: String,
//       dinner: String,
//     },
//     Saturday: {
//       breakfast: String,
//       snack: String,
//       lunch: String,
//       dinner: String,
//     },
//     Sunday: {
//       breakfast: String,
//       snack: String,
//       lunch: String,
//       dinner: String,
//     },
//   },
// });


// const Menu=new mongoose.model("Menu",menuSchema);
// module.exports=Menu;
// const menuSchema = {
//     menu: {
//       Monday: {
//         breakfast: String,
//         snack: String,
//         lunch: String,
//         dinner: String,
//       },
//       Tuesday: {
//         breakfast: String,
//         snack: String,
//         lunch: String,
//         dinner: String,
//       },
//       Wednesday: {
//         breakfast: String,
//         snack: String,
//         lunch: String,
//         dinner: String,
//       },
//       Thursday: {
//         breakfast: String,
//         snack: String,
//         lunch: String,
//         dinner: String,
//       },
//       Friday: {
//         breakfast: String,
//         snack: String,
//         lunch: String,
//         dinner: String,
//       },
//       Saturday: {
//         breakfast: String,
//         snack: String,
//         lunch: String,
//         dinner: String,
//       },
//       Sunday: {
//         breakfast: String,
//         snack: String,
//         lunch: String,
//         dinner: String,
//       },
//     },
//   };
  
//   module.exports = menuSchema;
  


const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  menu: {
    Monday: {
      breakfast: String,
      snack: String,
      lunch: String,
      dinner: String,
    },
    Tuesday: {
      breakfast: String,
      snack: String,
      lunch: String,
      dinner: String,
    },
    Wednesday: {
      breakfast: String,
      snack: String,
      lunch: String,
      dinner: String,
    },
    Thursday: {
      breakfast: String,
      snack: String,
      lunch: String,
      dinner: String,
    },
    Friday: {
      breakfast: String,
      snack: String,
      lunch: String,
      dinner: String,
    },
    Saturday: {
      breakfast: String,
      snack: String,
      lunch: String,
      dinner: String,
    },
    Sunday: {
      breakfast: String,
      snack: String,
      lunch: String,
      dinner: String,
    },
  },
});

module.exports = mongoose.model('Menu', menuSchema);
