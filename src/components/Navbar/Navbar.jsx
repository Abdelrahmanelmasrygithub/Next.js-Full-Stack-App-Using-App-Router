import Button from "../../elements/button/button"
import Link from "next/link"
import styles from './navbar.module.css'
import { linkss } from "./data"
import Logo from "@/elements/logo/Logo"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"

export default function Navbar() {
  return (
    <div className={styles.container}> 
    <Logo/>
      <div className={styles.links}>
        <DarkModeToggle/>
           {linkss.map(link => (
              <Link key={link.id} href={link.url} className={styles.link} >
                  {link.title}
              </Link>                     
            ))}
            <Button/>
      </div>
    </div>
  )
}
