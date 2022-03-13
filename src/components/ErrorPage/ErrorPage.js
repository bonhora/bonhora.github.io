import React from 'react'
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';


function ErrorPage() {
  return (
    <div className={styles.container}>

        <h1>Error <span className={styles.error}>404</span></h1>
        <h2>Page not found</h2>
        <p>Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page or go back to the <Link to={'/'} className={styles.link}>homepage</Link></p>
    </div>
  )
}

export default ErrorPage