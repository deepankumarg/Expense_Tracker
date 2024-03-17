import React, { useState } from "react";
import './Expenseitem.css'
import Expensedate from "../expense_date/Expensedate";


const Expenseitem=(props)=>{

    const{title,amount,date}=props;
   

    return(
        <li>
            <div className="expense-item">
                <Expensedate date={date}/>
                <div className="expense-item__description">
                <h3 className="expense-item h3 ">{title}</h3>
                <div className="expense-item__price">${amount}</div>
                </div>
                
            </div>
        </li>
            
    )
}
export default Expenseitem;