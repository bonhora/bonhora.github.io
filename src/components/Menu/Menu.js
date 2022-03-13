import React, {useState} from 'react'
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function Menu() {

    const [toggle, setToggle] = useState(false);
    const [clase, setClase] = useState(styles.menuopen);
    const show = true;

    const handleClose = () => {
      setClase(styles.menuclose)
      
      setTimeout( () => {
        setToggle(!toggle)
      }, 500)
    }

    const handleOpen = () => {
        setToggle(!toggle)
        setClase(styles.menuopen)
    }

    const MenuOpen = (
        <div className={clase}>
            <FontAwesomeIcon icon={faXmark} size="xl" onClick={handleClose} className={styles.menuicon}/>
            <ul className={styles.menulist}>
                <li><Link to="/login" onClick={handleClose}>Acceder</Link></li>
                <li><Link to="/contact" onClick={handleClose}>Contacto</Link></li>
                <li><Link to="/about-us" onClick={handleClose}>About Us</Link></li>
            </ul>
        </div>
    )

  return (
    <div>
      {toggle && MenuOpen}
      <FontAwesomeIcon icon={faAlignLeft} size="xl" onClick={handleOpen}/>
    </div>
  );
}

export default Menu;
