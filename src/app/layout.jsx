import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/contextabi/ThemeContext';
 const inter = Inter({ 
   subsets: ['latin'], 
   weight: ['400','900' , '700']
 });

 export const metadata = {
  title: 'Shop - Home',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeProvider>
           <div className="container">
             <Navbar/>
               {children}
             <Footer/>
           </div>
         </ThemeProvider>
      </body>
    </html>
  )
};
