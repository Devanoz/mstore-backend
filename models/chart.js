const mongoose = require('mongoose');
const uri = "mongodb+srv://devanixsz:2gabkGS3VTlWrQrC@nixszdb.51d1v.mongodb.net/mstore?retryWrites=true&w=majority";

mongoose.connect(uri).then(value => {
    console.log("connection to products atlas succes");
});


const chartSchema = new mongoose.Schema({

},{timestamps:true});