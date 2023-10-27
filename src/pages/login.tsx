import React, { useState } from 'react'
import styles from './styles.module.css'
import { authenticateUser } from '../utils/auth'
import { Link } from 'react-router-dom'

export default function Login() {
    const {logo, container, form, inputContainer, input, button, warning} = styles

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showWarning, setShowWarning] = useState(false)

    const handleLogin = () => {
    authenticateUser(email, password) ? <Link to="/eventRequests"></Link> : setShowWarning(true)
    }

          // Test function to simulate the logic
  const runLogicTest = () => {
    // Simulate a successful authentication
    setEmail('user1')
    setPassword('password1')
    handleLogin()

    // Simulate an unsuccessful authentication
    setEmail('invalid_email')
    setPassword('invalid_password')
    handleLogin()

    // Verify that the warning is displayed
    if (showWarning) {
      console.log('Test Passed: Invalid email or password. Please try again.')
    } else {
      console.log('Test Failed: Warning not displayed.')
    }
  }
// Uncomment the next line to run the test
// runLogicTest()

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
          {showWarning && <div className={warning}>Invalid email or password. Please try again.</div>}
        </form>
        </div>
    </div>
  )
}
