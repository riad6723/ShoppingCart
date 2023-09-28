"use client"
import Card from "@/components/Card/Card"
import styles from './page.module.css'
import groceryItems from "../../data"
import { useEffect, useState } from "react"

export default function Home() {
  const [cart,setCart]=useState([]);
  useEffect(()=>{
      localStorage.setItem("numberOfItems",JSON.stringify(cart.length));
  },[cart])
  return (

    <main className={styles.home}>
      {
        groceryItems.map((item,index)=>{
          return <div key={index}> <Card item={item} cartObj={{cart,setCart}} /> </div>
         })
      }
    </main>
  )
}
