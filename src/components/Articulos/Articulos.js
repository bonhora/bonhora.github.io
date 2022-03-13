import React from "react";
import Articulo from "../Articulo/Articulo";
import styles from "./Articulos.module.css";


function Articulos() {
  const articulos = [
    {
      title: "How to be more productive?",
      date: "4/3/2022",
      numberComments: 5,
      short: "For some people, productivity stalls because of a lack of direction. A person may know what their end goal is but they have no idea how to get there. This often happens when you think a task is difficult or when you've never done it before. It can also happen when you're overwhelmed with a lot of other activities"
    },
    {
      title: "Atomic Habits",
      date: "20/2/2022",
      numberComments: 1,
      short: "HÁBITOS ATÓMICOS parte de una simple pero poderosa pregunta: ¿Cómo podemos vivir mejor? Sabemos que unos buenos hábitos nos permiten mejorar significativamente nuestra vida, pero con frecuencia nos desviamos del camino: dejamos de hacer ejercicio, comemos mal, dormimos poco, despilfarramos"

    },
    {
      title: "Meditations",
      date: "1/3/2022",
      numberComments: 12,
      short: "Meditations shows how to become more self disciplined, stop caring what people think, and withstand life's emotional storms. Marcus Aurelius was a powerful Roman emperor and great Stoic philosopher. He wrote down all these thoughts in a private journal to himself."

    },
    {
      title: "Deep Work",
      date: "31/12/2021",
      numberComments: 9,
      short: "Deep work will make you better at what you do and provide the sense of true fulfillment that comes from craftsmanship. In short, deep work is like a super power in our increasingly competitive twenty-first century economy. And yet, most people have lost the ability to go deep—spending their days instead in a frantic blur of e-mail and social media, not even realizing there’s a better way."

    },
    {
      title: "How to be more productive?",
      date: "4/3/2022",
      numberComments: 5,
      short: "For some people, productivity stalls because of a lack of direction. A person may know what their end goal is but they have no idea how to get there. This often happens when you think a task is difficult or when you've never done it before. It can also happen when you're overwhelmed with a lot of other activities"
    },
    {
      title: "Atomic Habits",
      date: "20/2/2022",
      numberComments: 1,
      short: "HÁBITOS ATÓMICOS parte de una simple pero poderosa pregunta: ¿Cómo podemos vivir mejor? Sabemos que unos buenos hábitos nos permiten mejorar significativamente nuestra vida, pero con frecuencia nos desviamos del camino: dejamos de hacer ejercicio, comemos mal, dormimos poco, despilfarramos"

    },
    {
      title: "Meditations",
      date: "1/3/2022",
      numberComments: 12,
      short: "Meditations shows how to become more self disciplined, stop caring what people think, and withstand life's emotional storms. Marcus Aurelius was a powerful Roman emperor and great Stoic philosopher. He wrote down all these thoughts in a private journal to himself."

    },
    {
      title: "Deep Work",
      date: "31/12/2021",
      numberComments: 9,
      short: "Deep work will make you better at what you do and provide the sense of true fulfillment that comes from craftsmanship. In short, deep work is like a super power in our increasingly competitive twenty-first century economy. And yet, most people have lost the ability to go deep—spending their days instead in a frantic blur of e-mail and social media, not even realizing there’s a better way."

    },
  ];

  return (
    <div className={styles.container}>
      {articulos.map( element => {
        let id = Math.floor(Math.random() * 99);
        return <Articulo title={element.title} date={element.date} numberComments={element.numberComments} short={element.short} id={id} key={id}/>
      })}

    </div>
  );
}

export default Articulos;
