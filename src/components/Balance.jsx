import React,{useContext} from 'react'
import {Context} from '../context/GlobalState'

function Balance(){

   let initial = useContext(Context)
  let transaction = initial.initialState

  let amount = transaction.map((item)=>{return item.price})

  let Income = amount.filter((item)=>{return item > 0})
  let expense = amount.filter((item)=>{return item <0})

  let incomeAmount = Income.reduce((accum,current)=>{return parseInt(accum) + parseInt(current)},0)
  let expenseAmount = expense.reduce((accum,current)=>{return parseInt(accum) + parseInt(current)},0)
  // console.log(incomeAmount)
  // console.log(expenseAmount)
 
  return(
   
      <div>
      <h3>YOUR BALANCE</h3>
      <h3>$<span>{parseInt(incomeAmount) + parseInt(expenseAmount)}</span></h3>
        {console.log(parseInt(incomeAmount) + parseInt(expenseAmount))}
      </div>


  )
}

export default Balance