export const getAllExpense=async(setExpense)=>{
         await fetch('http://localhost:3000/api/expense/')
        .then((res)=>res.json())
        .then((data)=>setExpense(data.data))
       
}

export  const addExpense=(postData={}, callback)=>{
   fetch('http://localhost:3000/api/expense/create',
   {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify(postData),
   }).then((res)=>res.json())
   .then((data)=>{callback && callback();})
}