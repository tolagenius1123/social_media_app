import React from 'react'
import '../UI/Dashboard.css'
import { useContext } from 'react'
import { AppContext } from '../../App'
import Nav from './Nav'
import { useState } from 'react'

const Dashboard = () => {
  const {formValues} = useContext(AppContext)
  const [toggleMode, setToggleMode] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () => {
      setToggleMode(!toggleMode)
      setDarkMode(!darkMode)
  }

  return (
    <section className={darkMode? "dark-mode" : "welcome-pg" }>
        <Nav 
          toggleMode={toggleMode}
          darkMode={changeMode}
        />
    </section>
  )
}

export default Dashboard