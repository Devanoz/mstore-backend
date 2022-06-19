//import model
const productModel=require("../models/product");

//CREATE
const create_product=(req,res)=>{

    // res.send("test create product");

    const body=req.body;

    const newProduct=new productModel({

        name:body.name,
        description:body.description,
        price:body.price,
        image:body.image,
        quantity:body.quantity,
        rating:body.rating,
        category:body.category,
        view:body.view
    });

    console.log(newProduct);


    newProduct.save()
        .then(()=>res.send("create product succes"));

}

//READ
const get_all_products=async (req, res, next) => {
    // res.send({message:"ok"});


    const products = await productModel.find({});

    res.send(products);

}


//UPDATE
const update_product_by_id =async (req, res) => {
    const productId = req.params.id;

    productModel.findByIdAndUpdate(productId,{},(err,doc,res)=>{

    });


    // const product = await productModel.findById(productId);
    //
    // product.price = 400000;
    //
    // product.save();
    // res.send({message:"succes"});

}

//DELETE
const delete_product_by_id =(req,res)=>{
    const productId = req.params.id;

    productModel.findByIdAndDelete(productId,(err,docs)=>{
        if(err){
            console.log(err);
        }else{
            console.log("deleted :",docs);
        }
    });
}


//get product by id
const get_product_by_id = async (req, res) => {
    const productId = req.params.id;
    console.log(typeof productId);
    const productRetrieved = await productModel.findById(productId);

    res.send(productRetrieved);
}





module.exports={
    get_all_products: get_all_products,
    create_product: create_product,
    update_product_by_id: update_product_by_id,
    delete_product_by_id:delete_product_by_id,
    get_product_by_id:get_product_by_id,
}