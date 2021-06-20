import React,{useContext} from 'react'
import {Context} from '../context/GlobalState'

function IE(){

    let initial = useContext(Context)
  let transaction = initial.initialState
    
  let amount = transaction.map((item)=>{return item.price})

  let Income = amount.filter((item)=>{return item > 0})
  let expense = amount.filter((item)=>{return item <0})

  let incomeAmount = Income.reduce((accum,current)=>{return parseInt(accum) + parseInt(current)},0)
  let expenseAmount = expense.reduce((accum,current)=>{return parseInt(accum) + parseInt(current)},0)
  console.log(incomeAmount)
  console.log(expenseAmount)


  console.log(amount)
  return(
    <div className = "IE">

    <div className="left">
      <p >INCOME</p>
      <p id="income">{incomeAmount}</p>
    </div>

    <div className="right">
      <p>EXPENSES</p>
      <p  id="expense">{Math.abs(expenseAmount)}</p>
    </div>
    
    </div>
  )
}

export default IE