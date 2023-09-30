"use client"
import Card from "@/components/Card/Card"
import styles from './page.module.css'
import { useEffect, useContext } from "react"
import Link from "next/link"
import axios from 'axios'
import { useCartSizeContext } from "@/contexts/cartSizeContext"

export default function Home() {
  const {setCart,productsList,setProductsList}=useCartSizeContext();

  useEffect(()=>{
    axios.get('http://localhost:5000/')
    .then(response=>{setProductsList(response.data)})
    .catch(err=>console.log(err))

    const storedJsonString=localStorage.getItem('cart');
    if(storedJsonString){
      const localCart=JSON.parse(storedJsonString);
      setCart(localCart);
    }
    else{
      localStorage.setItem('cart',JSON.stringify([]));
      setCart([]);
    }
  },[])

  return (
    <>
    <main className={styles.home}>
        {productsList.map((item,index)=>{
          return  <div key={index}>  <Link href={`/products/${item.id}`} className={styles.link}> <Card item={item} /> </Link>  </div>  
         })}
    </main>

    </>
  )
}
