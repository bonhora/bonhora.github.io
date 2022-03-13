import styles from './Header.module.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from "react-router-dom";
import Menu from '../Menu/Menu';


function Header() {

  const navigate = useNavigate()

  return (
    <header className={styles.header}>

        <div className={styles['icon-container']}>
            <Menu />
        </div>

        <h1 className={styles.title} onClick={() => navigate('/')}>
            Bon
            <span className={styles['title-secondary']}>hora</span>
        </h1>

        <div className={styles['icon-container2']} onClick={() => navigate('/login')}>
            <p>Acceder</p>
            <FontAwesomeIcon icon={faUserCircle} size="xl"/>
        </div>

    </header>
  )
}

export default Header