import React from 'react'
import ContactoForm from '../ContactoForm/ContactoForm';
import styles from "./ContactoPage.module.css";

function ContactoPage() {
  return (
    <div className={styles.container}>
        <ContactoForm />
    </div>
  )
}

export default ContactoPage