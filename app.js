const express = require('express')
const app = express()
const ExpressError = require('./expressError')
const itemsRoutes = require('./items')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/items",itemsRoutes);

app.use((req,res,next)=>{
    return new ExpressError("Not Found", 404)
})

app.use((err,req,res,next) => {
    res.status(err.status || 500);
    return res.json({
        error:err.message,
    })
})
  
// app.listen(3000,function(){
//     console.log('started')
// })
module.exports = app