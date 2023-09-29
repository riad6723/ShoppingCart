"use client"
import Card from "@/components/Card/Card"
import styles from './page.module.css'
import groceryItems from "../../data"
import { useEffect, useState } from "react"
import Navbar from '../components/Navbar/Navbar'
import { cartSizeContext } from "@/contexts/cartSizeContext"
import Link from "next/link"

export default function Home() {
  const [cart,setCart]=useState([]);
  const [cartSize,setCartSize]=useState(0);
  return (
    <>
    <cartSizeContext.Provider value={{cartSize,setCartSize}}>
    <Navbar />

    <main className={styles.home}>
      {
        groceryItems.map((item,index)=>{
          return <div key={index}> <Link href={`/products/${item.id}`} className={styles.Link}> <Card item={item} cartObj={{cart,setCart}} />  </Link> </div>
         })
      }
    </main>
    </cartSizeContext.Provider>
    </>
  )
}
