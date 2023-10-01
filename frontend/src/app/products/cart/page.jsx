"use client"
import React, { useEffect, useState } from 'react'
import styles from './cart.module.css'
import Card from '@/components/Card/Card'
import Link from 'next/link'

function Cart() {
    const [cart,setCart]=useState([]);
    const [total,setTotal]=useState(0);

    useEffect(()=>{
    const storedJsonString=localStorage.getItem('cart');
    if(storedJsonString){
      const localCart=JSON.parse(storedJsonString);
      setCart(localCart);
      var s=0;
      localCart.forEach(element => {
        s+=element.price;
      });
      setTotal(s.toFixed(2));
    }
    else{
      setCart([]);
    }
    },[])

  return (
    <>
    <div className={styles.cart}>
        {  total>0? ( cart.map((item,index)=>{
            return  <div key={index}>  <Link href={`/products/${item.id}`} className={styles.link}> <Card item={item} /> </Link>  </div>  
        }) ) : <>NO ITEM SELECTED</>}
    </div>
    <div className={styles.price}>Total Amount = {total}$</div>
    </>
  )
}

export default Cart
