import React from 'react'
import styles from "./editorsPick.module.css"
import Link from 'next/link'
import Image from 'next/image'

const EditorsPick = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
        {withImage &&(<div className={styles.imageContainer}>
            <Image src="/ep1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>Top 10 Breathtaking Destinations for Your Next Adventure Around the World.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ananya Sharma - </span>
              <span className={styles.date}>23.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage &&(<div className={styles.imageContainer}>
            <Image src="/ep2.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>Discovering the Rich Traditions and Festivals of Diverse Global Cultures.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Rohan Mehta - </span>
              <span className={styles.date}>12.08.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage &&(<div className={styles.imageContainer}>
            <Image src="/ep3.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>Exploring Iconic Street Foods That Define Culinary Cultures Around the Globe</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Priya Iyer - </span>
              <span className={styles.date}>16.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage &&(<div className={styles.imageContainer}>
            <Image src="/ep4.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.postTitle}>How Global Travel Inspires Bold Trends in Fashion and Personal Style</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Arjun Singh - </span>
              <span className={styles.date}>29.05.2024</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default EditorsPick
