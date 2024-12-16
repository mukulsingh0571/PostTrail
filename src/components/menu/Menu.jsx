import React from 'react'
import styles from "./menu.module.css"
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'
import EditorsPick from '../editorspick/EditorsPick'

const Menu = () => {
  return (
    //---------------------------------------------First Part------------------------------------------------------------------
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true}/>

      {/*---------------------------------------------Middle second part---------------------------------------------- */}

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>

      {/*------------------------------------------------End Part----------------------------------------------------- */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <EditorsPick withImage={true}/>
    </div>
  )
}

export default Menu
