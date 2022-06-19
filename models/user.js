const mongoose = require("mongoose");
let validator = require("validator");

validator = validator.default;

// console.log(validator.isEmail("devanozaidan@gmail.com"));

const uri = "mongodb+srv://devanixsz:2gabkGS3VTlWrQrC@nixszdb.51d1v.mongodb.net/mstore?retryWrites=true&w=majority";

mongoose.connect(uri).then(value => {
    console.log("connection to products atlas succes");
});

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        email:{
            type: String,
            required:[true,"Please Enter an email"],
            unique:true,
            lowercase:true,
            validate:[validator.isEmail,"please enter a valid email"],
        },
        password:{
            type:String,
            required:[true,"Please enter a valid password"],
            min: [6,"Min password must be 6 characters"]
        },
        register_date:{
            type:Date,
            default: Date.now()
        }
    }
    ,{timestamps:true}
);

const userModel = mongoose.model("users", userSchema);


module.exports = userModel;
