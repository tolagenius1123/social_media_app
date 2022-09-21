import React from 'react'
import '../UI/Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section className='welcome-pg'>
        <nav className='navbar'>
            <h2>Welcome back! Tola</h2>
            <Link to={"/login"}>
                <p>Log Out</p>
            </Link>
        </nav>
    </section>
  )
}

export default Dashboard