import styles from './footer.module.css';
import Image from 'next/image';
import facebook from '../../../public/images/icons/facebook.png';
import whatsapp from '../../../public/images/icons/whatsapp.png';
import instagram from '../../../public/images/icons/instagram.png';

export default function Footer() {
  return (
    <div className={styles.container}>
       <div>Copyright © 2010-2023 Freepik Company S.L. All rights reserved.</div>
       <div className={styles.social}>
         <Image
           src={facebook}
           height={20}
           width={20}
           className={styles.icon}
           alt='Hexashop Facebook Link'
        />
           <Image
             src={instagram}
             height={20}
             width={20}
             className={styles.icon}
             alt='Hexashop Facebook Link'
          />
         <Image
           src={whatsapp}
           height={20}
           width={20}
           className={styles.icon}
           alt='Hexashop Facebook Link'
        />
         <Image
           src={instagram}
           height={20}
           width={20}
           className={styles.icon}
           alt='Hexashop Facebook Link'
        />
       </div>
    </div>
  )
}
