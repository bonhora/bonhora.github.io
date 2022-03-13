import React from 'react'
import Comentario from '../Comentario/Comentario';
import styles from "./Comentarios.module.css";


const comentarios = [
  {
    username: "Xavier",
    message: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "4/3/2022",
    src: ''
  },

  {
    username: "Brun",
    message: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    date: "20/2/2022",
    src: ''
  },

  {
    username: "Random123",
    message: "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
    date: "1/3/2022",
    src: ''
  },

  {
    username: "Piero?",
    message: "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    date: "31/12/2021",
    src: ''
  }
]


function Comentarios() {
  return (
    <div className={styles.container}>
        {comentarios.map( (element) => {
          let id = Math.floor(Math.random() * 99);
          return <Comentario username={element.username} message={element.message} key={id}/>
        })}
    </div>
  )
}

export default Comentarios