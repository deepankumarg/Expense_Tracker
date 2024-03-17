import React from "react";
import './Expensedate.css'

const Expensedate=(props)=>{
    const date=new Date(props.date)
    const month=date.toLocaleString('en-US',{month: 'long'})
    const day=date.toLocaleString('en-US',{day: 'numeric'})
    const year=date.getFullYear()

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{day}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    )
}
export default Expensedate;