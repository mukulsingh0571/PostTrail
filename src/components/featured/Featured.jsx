import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return <div className={styles.container}>
    <h1 className={styles.title}><b>Hey, Mukul Singh here!</b> Discover my stories and creative ideas.</h1>
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Simple Ways to Inspire your Inner Innovator</h1>
        <p className={styles.postDesc}>Whether you're an aspiring artist, a curious thinker, or simply looking to add a touch of creativity to your routine, our journey together will remind you that creativity knows no bounds. Get ready to unlock a world of innovation and self-expression.</p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  </div>;
};

export default Featured;
