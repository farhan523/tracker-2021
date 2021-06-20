import React,{useReducer,createContext} from 'react';

const initialState = {data:[
  // {id:0,name:'Mobile',price:200},
  // {id:2,name:'books',price:100},
  // {id:2,name:'books',price:-100},
  // {id:2,name:'books',price:-100}
]}
 const Context =  createContext(initialState)

function Reducer(state,action){
    switch(action.type){
       case 'DELETE_TRANSACTION':
            return{
                ...state,
                data: state.data.filter(transaction=>transaction.id !==
                    action.payload)
            }
      case 'ADD_TRANSACTION':
                return{
                    ...state,
                    data: [action.payload, ...state.data]
                }
      default:
      return state
    }
}



function GlobalProvider({children}){


 function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }



 function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  let [state,dispatch] = useReducer(Reducer,initialState)
 
  console.log(state)
  return(
      <Context.Provider value={{initialState:state.data,deleteTransaction,addTransaction}}>
          {children}
      </Context.Provider>
  )
}

export default GlobalProvider
export{Context}