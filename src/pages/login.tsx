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
        <input type="email" name="email" className={input} required />
            <label>Email</label>
            <span>Email</span>
        </div>
        <div className={inputContainer}>
        <input type="password" name="password" className={input} required />
            <label>Password</label>
            <span>Password</span>
        </div>
        <input type="submit" value="Submit" className={button} />
        </form>
        </div>
    </div>
  )
}
