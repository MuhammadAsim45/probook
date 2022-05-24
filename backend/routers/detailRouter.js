const detailCTRL=require("../controllers/detailCtrl")


const router=require("express").Router()


router.post("/details",detailCTRL.addDetails)





module.exports=router;



