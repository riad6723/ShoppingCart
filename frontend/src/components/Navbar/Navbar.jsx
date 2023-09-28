"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    const [searchKey,setSearchKey]=useState();
    const handleSearch=(e)=>{
        setSearchKey(e.target.value);
    }
  return (
    <div>
      <nav className={styles.nav}>

        <div className={styles.title}>
            Shopify
        </div>

        <div className={styles.list}>
            <li >  <Link href={`/`}  className={styles.Link}> Shop </Link>  </li>         
            <li >  <Link href={`/`} className={styles.Link}> contact Us </Link>  </li>        
        </div>

        <div className={styles.search}>
            <input type="text" placeholder='search here...' className={styles.input} value={searchKey} onChange={e=>handleSearch(e)} />
        </div>

        <Link href={'/products'} className={styles.Link}> <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} /> <sup className={styles.sup}> {localStorage.getItem("numberOfItems")} </sup> </Link>
      </nav>
    </div>
  )
}

export default Navbar
