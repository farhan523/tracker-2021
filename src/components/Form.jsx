import React,{useState,useContext} from 'react'
import {Context} from '../context/GlobalState'

function Form(){

     let transaction = useContext(Context)
    let addTransaction = transaction.addTransaction

  let [text,setText] = useState("")
  let [amount,setAmount] = useState(0.00)

  function onSubmit(e){
      e.preventDefault()
       const newTransaction = {
            id:Math.floor(Math.random()*10000000),
            name:text,
            price:amount
        }
        addTransaction(newTransaction)
  }
  return(
    <div className="form">
        <h3>Add New Transection</h3>
        <hr/>
        <form onSubmit={onSubmit}>
          <label htmlFor="text">Enter text</label>
          <input type="text" value={text} onInput={(e)=>{setText(e.target.value)}} placeholder="Enter text...." id="text"></input>
          <label htmlFor="text">Amount <br/> (negative-expense,positive incm</label>
          <input type="number" value={amount} onInput={(e)=>{setAmount(e.target.value)}}  placeholder="Enter Amount" id="text"></input>
          <input type="submit"></input>
        </form>
    </div>
  )
}

export default Form