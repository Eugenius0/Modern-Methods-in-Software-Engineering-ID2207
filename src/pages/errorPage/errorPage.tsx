import React from 'react'
import styles from './styles.module.css'

export default function ErrorPage() {

    const {container, title} = styles

  return (
    <div className={container}>
    <div className={title}>
          Error 404: Page not found
    </div>
    </div>
  )
}
