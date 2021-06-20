import React,{useContext} from 'react'
import {Context} from '../context/GlobalState'
function History(){
  let initial = useContext(Context)
  let transaction = initial.initialState
  console.log(transaction)
  return(
    <div className="history">
        <h3>History</h3>
        <ul>
          {/* <li className="green">{transaction[0].name} <span>{transaction[0].price}<button>X</button></span></li>
           <li className="green">mobiel <span>0.00<button>X</button></span></li> */}
           {transaction.map((item)=>{return <li className={item.price > 0 ? 'green':'red'}>{item.name} <span>{item.price > 0 ? '+' :'-'}${Math.abs(item.price)}<button onClick={()=>{initial.deleteTransaction(item.id)}}>X</button></span> </li>})}
        </ul>
    </div>
  )
}

export default History