import React from 'react'
import styles from './styles.module.css'

export default function Login() {
    const {container, form, inputContainer, input, button} = styles

  return (
    <div className={container}>
        <div className={form}>
        <form>
        <h2>Login</h2>
        <div className={inputContainer}>
        <input type="email" name="email" className={input} required placeholder="Email" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Email'} />
    
            <span>Email</span>
        </div>
        <div className={inputContainer}>
        <input type="password" name="password" className={input} required placeholder="Password" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Password'} />

            <span>Password</span>
        </div>
        <input type="submit" value="Submit" className={button} />
        </form>
        </div>
    </div>
  )
}
