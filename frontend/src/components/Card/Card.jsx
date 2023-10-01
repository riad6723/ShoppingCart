"use client"
import React from 'react';
import styles from './Card.module.css';
import { cartSizeContext } from '@/contexts/cartSizeContext';
import { useContext } from 'react';

function Card({item}) {
  const {id,name,category,price,image}=item;
  const {cart,setCart}=useContext(cartSizeContext);

  const handleAddClick=(e)=>{
  e.preventDefault();
  const path = location.pathname.split('/').pop();
  if(path==='cart')return;
  const updatedCart=[...cart];

    for(let i=0;i<updatedCart.length;i++){
      if(updatedCart[i].id===item.id)return;
    }

    updatedCart.push(item);
    localStorage.setItem('cart',JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  const handleRemoveClick=(e)=>{
    e.preventDefault();
    const path = location.pathname.split('/').pop();
    if(path==='cart')return;
    const updatedCart=[...cart];
  
      for(let i=0;i<updatedCart.length;i++){
        if(updatedCart[i].id===item.id){
          updatedCart.splice(i,1);
          localStorage.setItem('cart',JSON.stringify(updatedCart));
          setCart(updatedCart);
          return;
        }
      }
    }

  return (
    <div className={styles.card}>
    <div className={styles.photo}>
      <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"/>
    </div>
    <div className={styles.description}>
      <h2>{name}</h2>
      <h4>{category}</h4>
      <h1>${price}</h1>
      <button onClick={e=>handleAddClick(e)} className={styles.addButton}>Add to Cart</button>
      <button onClick={e=>handleRemoveClick(e)} className={styles.removeButton}>Remove</button>
    </div>
  </div>
  );
}

export default Card;
