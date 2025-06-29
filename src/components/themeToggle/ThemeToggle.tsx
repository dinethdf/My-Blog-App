"use client"
import React, { useContext } from 'react'
import style from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'


const ThemeToggle = () => {

const themeTogggle = useContext(ThemeContext)

  return (
    <div className={style.container} onClick={themeTogggle?.toggle}
         style={
            themeTogggle?.theme === "dark" 
              ? {background:"white"}
              : {background:"#0f172a"}
         }>
      <Image src={"/moon.png"} alt='' width={16} height={16}/>
      <div className={style.ball}
          style={
            themeTogggle?.theme === "dark" 
              ? {left:1, background:"#0f172a"}
              : {right:1, background:"white"}
          }></div>
      <Image src={"/sun.png"} alt='' width={16} height={16}/>
    </div>
  )
}

export default ThemeToggle