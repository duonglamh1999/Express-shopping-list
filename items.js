const { Router } = require('express');
const express = require('express');
const items = require("./fakeDb")
const router = express.Router();
const {addItem,findItem} = require('./helper')

router.get("",(req,res,next)=>{
try {
    return res.json({items})
}
catch(err) {
    return next(err)
}
})

router.post("",(req,res,next)=>{
    try {
        const newItem = addItem(req.body.name,req.body.price)
        console.log(req.body)
        return res.json({added:newItem})
    }
    catch(err) {
        return next(err)
    }
    });

router.get("/:name",(req,res,next)=>{
    try {
        const foundItem = findItem(req.params.name)
        return res.json({items:foundItem})
    }
    catch(err) {
        return next(err)
    }
})

router.patch("/:name",(req,res,next)=>{
    try {
        const foundItem = findItem(req.params.name,req.body)
        return res.json({updated:foundItem})
    }
    catch(err) {
        return next(err)
    }
})
router.delete("/:name",(req,res,next)=>{
    try {
        items.remove(req.params.name)
        return res.json({message:"Deleted"})
    }
    catch(err) {
        return next(err)
    }
})

module.exports = router;