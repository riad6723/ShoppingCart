"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'
import Link from 'next/link'
import axios from 'axios'
import {useCartSizeContext} from '@/contexts/cartSizeContext'

function Navbar() {
    const [searchKey,setSearchKey]=useState();
    const {cart,setProductsList}=useCartSizeContext();
    const [newProductsList, setNewProductsList]=useState([]);

    const handleSearch=(e)=>{
        setSearchKey(e.target.value);
        if(!e.target.value){
          setProductsList(newProductsList);
          return;
        }

      const filteredItems = newProductsList.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setProductsList(filteredItems);
    }

    useEffect(()=>{
      axios.get('http://localhost:5000/')
      .then(response=>setNewProductsList(response.data))
      .catch(err=>console.log(err))
    },[])

  return (
    <div>
      <nav className={styles.nav}>

        <div className={styles.title}>
            Shopify
        </div>

        <div className={styles.list}>
            <li >  <Link href={`/`}  className={styles.Link}> Shop </Link>  </li>         
            <li >  <Link href={`/`} className={styles.Link}> Contact </Link>  </li>        
        </div>

        <div className={styles.search}>
            <input type="text" placeholder='  search here...' className={styles.input} value={searchKey} onChange={e=>handleSearch(e)} />
        </div>

        <Link href={'/products'} className={styles.Link}> <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} /> <sup className={styles.sup}> {cart.length} </sup> </Link>
      </nav>
    </div>
  )
}

export default Navbar
