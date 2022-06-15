const mongoose = require('mongoose');

const mongoUri="mongodb+srv://devanixsz:2gabkGS3VTlWrQrC@nixszdb.51d1v.mongodb.net/mstore?retryWrites=true&w=majority";
mongoose.connect(mongoUri)

.then(()=>{
    console.log("connection succes");
})
.catch(err=>{
    console.log(err);
});


const productSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:String,
    price:Number,
    image:String,
    quantity:Number,
    rating:Number,
    category:String,
    view:Number

},{
    timestamps:true
});

const productModel= mongoose.model('products',productSchema);


module.exports=productModel;