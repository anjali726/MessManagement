const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    middlename : {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    Regno : {
        type:String,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
    phone : {
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    psw : {
        type:String,
        required:true
    },
    pswrepeat : {
        type:String,
        required:true
    }

})

const Register=new mongoose.model("Register",studentSchema);
module.exports=Register;