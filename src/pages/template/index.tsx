import React from 'react'
import styles from './styles.module.css'

export default function Template() {

    const {container, title} = styles

  return (
    <div className={container}>
    <div className={title}>
          Create Event Request
    </div>
    </div>
  )
}
