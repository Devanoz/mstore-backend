const express=require('express')

const router=express.Router();

//import controller
const productController=require("../controllers/productController");




//CRUD
router.post("/",productController.create_product);//done
router.get('/',productController.get_all_products);//done
router.patch("/:id",productController.update_product_by_id);//not yet done
router.delete("/:id",productController.delete_product_by_id);// done



router.get("/:id",productController.get_product_by_id);





module.exports=router;