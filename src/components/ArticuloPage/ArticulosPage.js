import styles from "./ArticulosPage.module.css";

import { useParams } from "react-router-dom";
import desk from "../../img/desk.jpg";
import ComentariosSection from "../ComentariosSection/ComentariosSection";

function ArticulosPage() {

  // let params = useParams();
  // const id = params.id;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How to be more productive?</h2>
      <p className={styles.date}>28 Feb 2022, 4 comments</p>

      <div className={styles.imgcontainer}>
        <img src={desk} alt="test pic" className={styles.img} />
      </div>

      <div className={styles.content}>
        <h3>
          Es un hecho establecido hace demasiado tiempo que un lector se
          distraerá con el contenido del texto de un sitio mientras que mira su
          diseño. El punto de usar Lorem Ipsum es que tiene una distribución más
          o menos normal de las letras, al contrario de usar textos como por
          ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo
          un español que se puede leer. Muchos paquetes de autoedición y
          editores de páginas web usan el Lorem Ipsum como su texto por defecto
        </h3>

        <h3>
          Es un hecho establecido hace demasiado tiempo que un lector se
          distraerá con el contenido del texto de un sitio mientras que mira su
          diseño. El punto de usar Lorem Ipsum es que tiene una distribución más
          o menos normal de las letras, al contrario de usar textos como por
          ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo
          un español que se puede leer. Muchos paquetes de autoedición y
          editores de páginas web usan el Lorem Ipsum como su texto por defecto
        </h3>

        <h3>
          Es un hecho establecido hace demasiado tiempo que un lector se
          distraerá con el contenido del texto de un sitio mientras que mira su
          diseño. El punto de usar Lorem Ipsum es que tiene una distribución más
          o menos normal de las letras, al contrario de usar textos como por
          ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo
          un español que se puede leer. Muchos paquetes de autoedición y
          editores de páginas web usan el Lorem Ipsum como su texto por defecto
        </h3>
      </div>

      <ComentariosSection />
    </div>
  );
}

export default ArticulosPage;
