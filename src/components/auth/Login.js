import React from 'react'
import '../auth/auth.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const Login = () => {

    let navigate = useNavigate()

    const existingFormValues = {
        username: "",
        password: "",
    }

    const [nameErr, setNameErr] = useState("")
    const [pwdErr, setPwdErr] = useState("")

    const [checkFormValues, setCheckFormValues] = useState(existingFormValues)

    useEffect(() => {
        setNameErr("")
        setPwdErr("")
    }, [checkFormValues])

    const handleChange = (e) => {
        const { name, value } = e.target
        setCheckFormValues({...checkFormValues, [name]: value})
        console.log(checkFormValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        const getUserData = localStorage.getItem('formValues')
        // console.log(getUserData);

        const existingUserData = JSON.parse(getUserData)

        if (checkFormValues.username === ""){
            setNameErr("Username is required!")
        }
        if (checkFormValues.username !== existingUserData.username){
            setNameErr("Username does not exist!")

            if (checkFormValues.username === ""){
                setNameErr("Username is required!")
            }
        }

        if (checkFormValues.password !== existingUserData.password){
            // alert("Wrong Password! Try again")
            setPwdErr("Wrong Password! Try again")
        }
        if (checkFormValues.username === existingUserData.username && checkFormValues.password === existingUserData.password){
            navigate('/dashboard')
            // alert(`Welcome back ${checkFormValues.username}`)

        }
     
    }

    return (
        <section>
            <main>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' onChange={handleChange} value={checkFormValues.username} placeholder='Enter Username...'/>
                    <p>{nameErr}</p>

                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' onChange={handleChange} value={checkFormValues.password} placeholder='Enter Password...'/>
                    <p>{pwdErr}</p>

                    <button type='submit'>Submit</button>
                </form>
                <p>Not registered? <Link to={"/"}><span>Sign Up</span></Link></p>
            </main>
        </section>
    )
}

export default Login