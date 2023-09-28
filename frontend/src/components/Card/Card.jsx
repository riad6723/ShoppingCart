"use client"
import React from 'react';
import styles from './Card.module.css';

function Card({item,cartObj}) {
  const {id,name,category,price,image}=item;
  const handleClick=()=>{
    const updatedCart=[...cartObj.cart];
    for(let i=0;i<updatedCart.length;i++){
      if(updatedCart[i].id===item.id)return;
    }
    updatedCart.push(item);
    cartObj.setCart(updatedCart);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.productImg}>
        <img src="http://bit.ly/2tMBBTd" height="420" width="327" alt="Product" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productText}>
          <h1>{name}</h1>
          <h2>{category}</h2>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem doloremque ex ipsam voluptates vel eos recusandae consectetur hic harum, explicabo obcaecati dolores soluta. Molestias reiciendis nemo assumenda itaque iure.
          </p>
        </div>
        <div className={styles.productPriceBtn}>
          <p><span className={styles.span}>{price}</span>$</p>
          <button type={styles.button} onClick={handleClick} >add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
