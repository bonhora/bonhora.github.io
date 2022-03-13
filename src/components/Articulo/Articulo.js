import React from 'react'
import styles from './Articulo.module.css';
import src from '../../img/desk.jpg'
import { useNavigate } from "react-router-dom";

function Articulo(props) {

  const navigate = useNavigate();

  const goToArticle = (e) => {
    let target = e.target
    navigate('/articulos/'+props.id)

}

  return (
    <div className={styles.container} id={props.id} onClick={goToArticle}>
        <div className={styles.imgcontainer}>
            <img src={src} alt='test img' className={styles.img}/>
        </div>
        <div className={styles.textcontainer}>
            <h2>{props.title}</h2>
            <p>{props.date}, {props.numberComments} comments</p>
            <h3>{props.short}</h3>
        </div>
    </div>
  )
}

export default Articulo