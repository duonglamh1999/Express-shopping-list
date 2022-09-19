const { Router } = require('express');
const express = require('express');
const items = require("./fakeDb")
const router = express.Router();
const {deleteItem,addItem,findItem,updateItem} = require('./helper')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.get("",(req,res,next)=>{
try {
    return res.json({items})
}
catch(err) {
    return next(err)
}
})

router.post("/",(req,res,next)=>{
    try {
        const newItem = addItem(req.body.name,req.body.price)
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
        const foundItem = updateItem(req.params.name,req.body)
        return res.json({updated:foundItem})
    }
    catch(err) {
        return next(err)
    }
})
router.delete("/:name",(req,res,next)=>{
    try {
        const remove = deleteItem(req.params.name)
        return res.json({delete:remove})
    }
    catch(err) {
        return next(err)
    }
})

module.exports = router;