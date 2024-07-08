import React,{useState} from 'react'
import AddExpenseForm from './AddExpenseForm'
import ExpenseList from './ExpenseList'
import Navbar from "./navbar.jsx"
const Track = () => {
    const [expDataArr, setexpDataArr] = useState("")
    const getData=(data)=>{
      setexpDataArr(data);
    }
    const [upexpDataArr, setupexpDataArr] = useState("")
    const sendExptoForm=(data)=>{
      setupexpDataArr(data);
    }
    const [edexpDataArr, setedexpDataArr] = useState("")
    const [editId, seteditId] = useState("")
    const sendEditData=(data)=>{
      setedexpDataArr(data);
    }
    const getEditId=(data)=>{
      seteditId(data);
    }
  return (
    <div>
      <Navbar/>
      <AddExpenseForm editExpId={editId} editArr={edexpDataArr} changedArr={upexpDataArr} onPassData={getData}/>
      <ExpenseList handleEditId={getEditId} handleEditArr={sendEditData} handleDeleteArr={sendExptoForm} expenseData={expDataArr}/>
    </div>
  )
}

export default Track
