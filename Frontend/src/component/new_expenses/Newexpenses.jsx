import React from "react";
import './Newexpenses.css';
import {nanoid} from "nanoid";
import Newexpenseform from "./newexpenseform/Newexpenseform";

const Newexpenses=(props)=>{

  const {submitAction}=props;

  const onAddnewexpense=(expense)=>
  {
  const modified_expense={
      ...expense,
      id:nanoid(),
  }
  submitAction(modified_expense);
  }
    return(
        <div className="new-expense ">
          <Newexpenseform save={onAddnewexpense}/>
        </div>
    )
}
export default Newexpenses;