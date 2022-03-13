import React from 'react'
import styles from "./AboutUs.module.css";


function AboutUs() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>

        <h3 className={styles.subtitle}>Who we are?</h3>

        <p className={styles.content}>We are a team of front-end and back-end developers. Our philosophy resolves around customer satisfaction, that is why we always provide unlimited revisions, the work is not completed until you are satisfied with the results. We have been in IT industry for 3 years now and we still are as passionate about it as we where the first day, we believe that learning is a never ending process and so we study on a daily basis, aiming to provide the best possible product to our customers.</p>
    </div>
  )
}

export default AboutUs