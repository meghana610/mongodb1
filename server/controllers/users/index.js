import express from "express";

const router = express.Router();

router.get("/getalluser",(req,res)=>{
  try {
        res.status(500).json({ msg : "Hello server"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
});

router.post("/adduser",(req,res)=>{
  try {
        res.status(300).json({ msg : "Hello users"});
    }catch (error) {
        console.log(error);
        res.status(300).json({ msg: error});
    }
    
})

router.delete("/deleteuser",(req,res)=>{
  try {
        res.status(500).json({ msg : "user is deletedls"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
})

router.put("/updateuser",(req,res)=>{
  try {
        res.status(600).json({ msg : "user is updated"});
    }catch (error) {
        console.log(error);
        res.status(600).json({ msg: error});
    }
})

export default router