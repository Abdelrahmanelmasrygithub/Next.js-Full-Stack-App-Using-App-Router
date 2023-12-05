'use client'
import styles from './logo.module.css';
import Link from 'next/link';
import { Montserrat } from 'next/font/google'
const bodyFont = Montserrat({ 
   subsets: ['latin'],
   weight: ['400'] 
 });
export default function Logo() {
  return (
    <div>
      <Link href='/' className={`${styles.logo} ${bodyFont.className}`}>Elmasry</Link>
    </div>
  )
}
