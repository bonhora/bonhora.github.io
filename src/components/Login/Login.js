import styles from './Login.module.css';

import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <div className={styles.container}>
        <h2>Login</h2>
        <form className={styles.form} autoComplete="off">
            <input type='email' placeholder='Email' name='email' className={styles.input} onChange={ (e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' name='password' className={styles.input} onChange={ (e) => setPassword(e.target.value)}/>

            <div className={styles.buttoncontainer}>
                <button onClick={() => navigate('/register')} className={styles.buttonregister}>Crear cuenta</button>
                <input type='submit' value='Log In' className={styles.button}/>
            </div>


        </form>
    </div>
  )
}

export default Login
