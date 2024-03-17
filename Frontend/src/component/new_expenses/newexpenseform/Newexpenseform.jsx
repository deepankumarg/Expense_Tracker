import React, { useState } from "react";
import './Newexpenseform.css'

const Newexpenseform=(props)=>{
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')
    const {save}=props;

    const ongettitle=(event)=>{
        setTitle(event.target.value);
    }
    
    const ongetamount=(event)=>{
        setAmount(event.target.value);
    }
    
    const ongetdate=(event)=>{
        setDate(event.target.value);
    }
    
    const onSubmithandler=(e)=>{
        e.preventDefault()
        const new_expense={
            title,
            amount,
            date: new Date(date),
        }
        save(new_expense);
        console.log(title,amount,date);

       
    }
    return(
        <div>
         <form onSubmit={onSubmithandler} >

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title1" id="title" value={title} onChange={ongettitle}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount1" id="amount" min="0" max="1000" value={amount} onChange={ongetamount}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date"  name="date1" id="date" value={date} onChange={ongetdate}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="reset">cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
       
         </form>
        </div>
    )
}
export default Newexpenseform;