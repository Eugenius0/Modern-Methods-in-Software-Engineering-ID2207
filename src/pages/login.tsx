import React, { useState } from 'react'
import styles from './styles.module.css'
import { authenticateUser } from '../utils/auth'

export default function Login() {
    const {logo, container, form, inputContainer, input, button} = styles

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
    authenticateUser(email, password) ? alert('true') : alert('false')
    }

  return (
    <div className={container}>
        <div className={logo}>
        Swedish Events Planners SEP
        </div>
        <div className={form}>
        <form>
        <h2>Login</h2>
        <div className={inputContainer}>
        <input 
          type="email" 
          name="email" 
          className={input} 
          required 
          placeholder="Email" 
          onFocus={(e) => e.target.placeholder = ''} 
          onBlur={(e) => e.target.placeholder = 'Email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
            <span>Email</span>
        </div>
        <div className={inputContainer}>
        <input 
          type="password" 
          name="password" 
          className={input} 
          required 
          placeholder="Password" 
          onFocus={(e) => e.target.placeholder = ''} 
          onBlur={(e) => e.target.placeholder = 'Password'} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
            <span>Password</span>
        </div>
        <input 
          type="submit" 
          value="Submit" 
          className={button} 
          onClick={handleLogin}
          />
        </form>
        </div>
    </div>
  )
}
