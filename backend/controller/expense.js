const expense = require('../model/expense');
const Expense=require('../model/expense')

exports.getAllExpenses=async (req,res)=>{
  try {
    const expense= await Expense.find();
    return res.status(200).json({
        data:expense,
        length:expense.length
    })
  } catch (error) {
    return res.status(500).json({
        msg:'server error'
   })

  }
}

exports.createExpense=async(req,res)=>{
    try {
        const newExpense=req.body
        await Expense.create(newExpense)
        res.status(201).json({
            msg:"created"
        })
    } catch (error) {
        return res.status(500).json({
            msg:"server error"
        })
    }
}

exports.updateExpense=async(req,res)=>{
   try {
    await Expense.findByIdAndUpdate(req.params.id,{...req.body})
    res.send("update success")
    res.status(200).json({
        
    })
   } catch (error) {
    
   }
  
}

exports.getAllExpenseById=async(req,res)=>{
    try {
        const getExpense=await Expense.findById(req.params.id)
        res.status(200).json({
            data:getExpense
        })
    } catch (error) {
        return res.status(500).json({
            msg:"server error"
        })
    }
}

exports.deleteExpenseById=async(req,res)=>{
    try {
        await Expense.findByIdAndDelete(req.params.id)
        res.status(200).json({
        msg:"deleted"
        })
    } catch (error) {
        return res.status(500).json({
            msg:"server error"
        })
    }
}

