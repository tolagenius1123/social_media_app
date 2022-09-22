import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/UI/Dashboard';
import { createContext } from 'react'
import { useState } from 'react';

export const AppContext = createContext()

function App() {
    const initialFormValues = {
        username: "",
        password: "",
        confirmPwd: "",
    }

    const [formValues, setFormValues] = useState(initialFormValues)
    const [nameErr, setNameErr] = useState("")
    const [pwdErr, setPwdErr] = useState("")
    const [confirmPwdErr, setConfirmPwdErr] = useState("")

  return (
    <div className="App">
      <AppContext.Provider value={{formValues, setFormValues, nameErr, setNameErr, pwdErr, setPwdErr, confirmPwdErr, setConfirmPwdErr}}>
        <Router>
          <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
