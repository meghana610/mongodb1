import express from "express";

const router = express.Router();

router.get("/getalladmin",(req,res)=>{
  try {
        res.status(500).json({ msg : "Hello server"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
});

router.post("/addadmin",(req,res)=>{
  try {
        res.status(300).json({ msg : "Hello users"});
    }catch (error) {
        console.log(error);
        res.status(300).json({ msg: error});
    }
    
})

router.delete("/deletadmin",(req,res)=>{
  try {
        res.status(500).json({ msg : "user is deletedls"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
})

router.put("/updateadmin",(req,res)=>{
  try {
        res.status(600).json({ msg : "user is updated"});
    }catch (error) {
        console.log(error);
        res.status(600).json({ msg: error});
    }
})

export default router