const mongoose=require('mongoose')


const connectDB=async()=>{
    try{
       const connection=await mongoose.connect('mongodb://127.0.0.1:27017/expense_tracker')
       console.log('db connected');
    }
    catch(err){
      console.log("error"+err);
    }
}

module.exports=connectDB;