import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.svg'
export default function Home() {
  return (
   <div className={styles.container}>

     <div className={styles.col}>
        <h1 className={styles.title}>Your Best Stop e-commerce destination</h1>
        <p className={styles.description}>adipisicing eliipsum dolor sit, amet consectetLorem ipsum dolor sit amet consectetur.</p>
        <button className={styles.button}>Shop Now</button>
     </div>

     <div className={styles.col}>
         <Image
           className={styles.img}
           src={Hero}
           alt='Hexa Shop'
         />
     </div>
   </div>
  
  )
}
