class MongodbConnector {


    constructor() {
        this.uri = "mongodb+srv://devanixsz:2gabkGS3VTlWrQrC@nixszdb.51d1v.mongodb.net/mstore?retryWrites=true&w=majority";
    }

    connect(){
        const mongoose =require("mongoose");
        mongoose.connect(this.uri).then(value => {
            console.log("connection to mongodb atlas succes");
        });
    }



}

module.exports=new MongodbConnector();


