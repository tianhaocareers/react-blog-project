import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../context/userContext'
import axios from 'axios'
const Register = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordCheck, setPasswordCheck] = useState()
    const [displayName, setDisplayName] = useState();

    const history = useHistory()
    const { setUserData } = useContext(UserContext)

    const submit = async (e) => {
        e.preventDefault()

        try {
            const newUser = { email, password, passwordCheck, displayName }
            await axios.post("http://localhost:4000/users/register", newUser)
            //automatically login after register
            const loginRes = await axios.post("http://localhost:4000/users/login", {
                email,
                password
            })
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            })
            localStorage.setItem("auth-token", loginRes.data.token)
            history.push("/")
        } catch (err) {
            console.log("here is Error", err)
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={submit}>
                <label htmlFor="register-email">Email</label>
                <input
                    id="register-email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="register-password">Password</label>
                <input
                    id="register-password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Verify password"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                />
                <label htmlFor="register-display-name">Display name</label>
                <input
                    id="register-display-name"
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register
