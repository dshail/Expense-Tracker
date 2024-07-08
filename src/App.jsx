import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import AddExpenseForm from "./components/AddExpenseForm.jsx"
import ExpenseList from "./components/ExpenseList.jsx"
function App() {
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
    <>
    <Navbar/>
    <main>
      <HeroSection/>
      <AddExpenseForm editExpId={editId} editArr={edexpDataArr} changedArr={upexpDataArr} onPassData={getData}/>
      <ExpenseList handleEditId={getEditId} handleEditArr={sendEditData} handleDeleteArr={sendExptoForm} expenseData={expDataArr}/>
    </main>
    </>
  )
}

export default App
