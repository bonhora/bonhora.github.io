import React from "react";
import styles from "./Comentario.module.css";
import fiverr from "../../img/fiverr.png";


function Comentario(props) {

  return (
    <div className={styles.container}>
      <img src={fiverr} alt="user profile" className={styles.img} />

      <div className={styles.textcontainer}>
        <h4>{props.username}</h4>
        <p>
            {props.message}
        </p>
        <p className={styles.ago}>3 days ago</p>
      </div>
    </div>
  );
}

export default Comentario;
