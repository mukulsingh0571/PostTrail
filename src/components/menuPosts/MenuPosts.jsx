import React from 'react'
import styles from "./menuPosts.module.css"
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
        {withImage &&(<div className={styles.imageContainer}>
            <Image src="/mp1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>A Journey through Bohemian Beauty: Exploring the streets of Prague</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mukul Singh - </span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage &&(<div className={styles.imageContainer}>
            <Image src="/mp2.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>Navigating firrst impressions: Introduce Yourself.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Rahul Dua - </span>
              <span className={styles.date}>12.06.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage &&(<div className={styles.imageContainer}>
            <Image src="/mp3.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>My favourite authentic italian pasta dishes</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Aditya Agnihotri - </span>
              <span className={styles.date}>26.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage &&(<div className={styles.imageContainer}>
            <Image src="/mp4.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.postTitle}>Timeless Fashion with a modern twist winter collection</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Siddhant Yadav - </span>
              <span className={styles.date}>19.05.2024</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts
