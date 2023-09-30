"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Product.module.css'


function Product() {
  const [item,setItem]=useState({});

  useEffect(()=>{
    const id = location.pathname.split('/').pop();
    axios.get(`http://localhost:5000/products/${id}`)
    .then(response=>setItem(response.data[0]))
    .catch(err=>console.log(err))

  },[])
  
  return (
    <>
    <div className={styles.product}>
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"  className={styles.productImage} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.productName}>{item.name}</h2>
        <p className={styles.productCategory}>{item.category}</p>
        <p className={styles.productDescription}>{item.description}</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Product;