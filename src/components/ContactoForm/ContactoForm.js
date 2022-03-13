import React, {useState} from 'react'
import styles from "./ContactoForm.module.css";

function ContactoForm() {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

  return (
    <form>
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}></input>
        <input type='text' placeholder='Subject' onChange={(e) => setSubject(e.target.value)} value={subject}></input>
        <textarea placeholder='Message' rows={5} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
    </form>
  )
}

export default ContactoForm