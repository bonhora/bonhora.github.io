import React, {useState} from 'react'
import styles from "./ComentarioForm.module.css";

function ComentarioForm() {

  const [comment, setComment] = useState();


  return (
    <div className={styles.container}>


    <h3>What do you think?</h3>

    <form className={styles.form}>
        <textarea className={styles.textarea} rows={7} onChange={e => setComment(e.target.value)}/>
        <input type="submit" value="Comment" className={styles.submit}/>
    </form>
</div>
  )
}

export default ComentarioForm