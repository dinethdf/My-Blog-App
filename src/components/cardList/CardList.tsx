import React from 'react'
import style from './cardList.module.css'
import { Pagination } from '../pagination/Pagination'

export const CardList = () => {
  return (
    <div className={style.container}>CardList
    <Pagination/>
    </div>
  )
}