import React, { useState } from "react";

import styles from "./Register.module.css";

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatpassword, setRepeatPassword] = useState();

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form className={styles.form} autoComplete="off">
        <input
          type="text"
          placeholder="Username"
          name="user"
          className={styles.input}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={styles.input}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className={styles.input}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatpassword"
          className={styles.input}
          required
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <div className={styles.buttoncontainer}>
          <input type="submit" value="Register" className={styles.button} />
        </div>
      </form>
    </div>
  );
}

export default Register;
