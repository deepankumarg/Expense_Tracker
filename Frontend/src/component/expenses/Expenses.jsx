import React from "react";
import './Expenses.css'
import Expenselist from "./expense_list/Expenselist";

const Expenses=(props)=>{
    const{expense=[]}=props;

    return(
        <div className="expenses">
            <Expenselist expense={expense}/>
        </div>
    )
}

export default Expenses;