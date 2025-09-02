import express from "express";

const router = express.Router();

router.get("/getallbasics",(req,res)=>{
  try {
        res.status(500).json({ msg : "Hello server"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
});

router.post("/addbasic",(req,res)=>{
  try {
        res.status(300).json({ msg : "Hello users"});
    }catch (error) {
        console.log(error);
        res.status(300).json({ msg: error});
    }
    
})

router.delete("/deletbasic",(req,res)=>{
  try {
        res.status(500).json({ msg : "user is deletedls"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
})

router.put("/updatebasic",(req,res)=>{
  try {
        res.status(600).json({ msg : "user is updated"});
    }catch (error) {
        console.log(error);
        res.status(600).json({ msg: error});
    }
})

export default router