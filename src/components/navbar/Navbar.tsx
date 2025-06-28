import React from 'react'
import style from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'; 
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

export const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={style.logo}> D-Code-tech-Web</div>
      <div className={style.links}>
        <ThemeToggle/>
        <Link href="/"> Home</Link>
        <Link href="/"> Contact</Link>
        <Link href="/"> About</Link>
        <Link href="/"> Login</Link>
        <AuthLinks/>
      </div> 
      
    </div>
  )
}