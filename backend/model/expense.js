const mongoose=require('mongoose')

const Expense_Schema=new mongoose.Schema({
    title:String,
    amount:Number,
    date:Date
    
})

module.exports=mongoose.model('trackers',Expense_Schema)