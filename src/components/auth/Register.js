import React from 'react'
import '../auth/auth.css'
import { useNavigate, Link } from 'react-router-dom'
// import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'

const Register = () => {
    let navigate = useNavigate()

    const {formValues, setFormValues, nameErr, setNameErr, pwdErr, setPwdErr, confirmPwdErr, setConfirmPwdErr} = useContext(AppContext)

    // const initialFormValues = {
    //     username: "",
    //     password: "",
    //     confirmPwd: "",
    // }

    // const [formValues, setFormValues] = useState(initialFormValues)
    // const [nameErr, setNameErr] = useState("")
    // const [pwdErr, setPwdErr] = useState("")
    // const [confirmPwdErr, setConfirmPwdErr] = useState("")

    useEffect(() => {
        setNameErr("")
        setPwdErr("")
        setConfirmPwdErr("")
    }, [formValues])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formValues.username === ""){
            setNameErr("Username is required!")
        }   
        else if (formValues.username.length <= 4) {
            setNameErr("Username must be greater than 4 characters!")
        }
        else if (formValues.password !== formValues.confirmPwd) {
            setConfirmPwdErr("Password does not match!")
        }
        else {
            navigate('/login')

        }

        console.log(formValues);
        
    }

    useEffect(() => {
        localStorage.setItem('formValues', JSON.stringify(formValues))
    }, [formValues])

    return (
        <section>
            <main>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usename">Username</label>
                    <input type="text" name='username' onChange={handleChange} value={formValues.username} placeholder='Enter Username...'/>
                    <p>{nameErr}</p>

                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' onChange={handleChange} value={formValues.password} placeholder='Enter Password...'/>
                    <p>{pwdErr}</p>

                    <label htmlFor="confirmPwd">Confirm Password</label>
                    <input type="password" name='confirmPwd' onChange={handleChange} value={formValues.confirmPwd} placeholder='Confirm Password...'/>
                    <p>{confirmPwdErr}</p>

                    <button type='submit'>Submit</button>
                </form>
                <p>Already registered? <Link to={'/login'}><span>Log In</span></Link> </p>
            </main>
        </section>
    )
}

export default Register