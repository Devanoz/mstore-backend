const express=require('express')

const router=express.Router();

//import controller
const productController=require("../controllers/productController");


router.get('/',productController.get_all_products);

router.post("/",productController.create_product);

router.get("/:id");

router.delete("/:id");

router.patch("/:id",productController.update_product_by_id);






module.exports=router;