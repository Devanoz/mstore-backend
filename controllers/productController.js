//import model
const res = require("express/lib/response");
const { default: mongoose } = require("mongoose");
const productModel=require("../models/product");



const get_all_products=(req,res,next)=>{

    
    // productModel.find()
    // .then(product =>{
    //     res.send(product);
    // })

    // .catch(err =>{
    //     console.log(err.message);
    // });

    productModel.find({},(err,products)=>{
        res.send(products);
    })
    .catch(err =>{
        console.log(err.message);
    })
  


}

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

const update_product_by_id =(req,res)=>{
    const productId=req.params.id;
    // productModel.findByIdAndUpdate(productId,req.body);

    productModel.findById(productId)

    

    // res.send(req.params.id);




    
}

const delete_product =(req,res)=>{

}





module.exports={
    get_all_products: get_all_products,
    create_product: create_product,
    update_product_by_id: update_product_by_id
}