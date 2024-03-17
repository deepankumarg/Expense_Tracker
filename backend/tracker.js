const express =require('express');
const bodyParser = require('body-parser');
const connectDB = require("./config/db.js");
const cors=require('cors')
const { getAllExpenses,getAllExpenseById,deleteExpenseById,updateExpense, createExpense} = require('./controller/expense.js');

connectDB();
const app = new express();
app.use(bodyParser.json());

app.use(cors({origin:"*"}));

app.get('/api/expense/health',(req,res)=>
{
    res.status(200).send("Health Check");
})

app.get('/api/expense',getAllExpenses);

app.get('/api/expense/:id',getAllExpenseById);

app.post('/api/expense/create',createExpense);

app.put('/api/expenses/:id',updateExpense);

app.delete('/api/expense/:id',deleteExpenseById);

app.listen(3000, async () => {
    
    console.log("Server is running...");
})