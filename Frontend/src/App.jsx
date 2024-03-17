import { useEffect, useState } from 'react'
import './App.css'
import Expenses from './component/expenses/Expenses';
import Newexpenses from './component/new_expenses/Newexpenses';
import { addExpense, getAllExpense } from './component/api';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', 
    title: 'New Mobile',
    amount: 799.49,
    date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expense,setExpense]=useState(DUMMY_DATA)

  useEffect(()=>{
     getAllExpense(setExpense)
  },[])

  const onAddnewexpenseItem=(expense)=>{

    console.log(expense);
    addExpense((expense),()=>{

        setExpense((pre_expense)=>{
            return[...pre_expense,expense];
    })
  })
  
    
    console.log('dummy data',DUMMY_DATA)
  }

  return (
    <div className="App">
      <Newexpenses submitAction={onAddnewexpenseItem}/>
      <Expenses expense={expense}/>
    </div>
  )
}

export default App
