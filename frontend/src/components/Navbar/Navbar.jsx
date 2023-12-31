"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'
import Link from 'next/link'
import axios from 'axios'
import {useCartSizeContext} from '@/contexts/cartSizeContext'

function Navbar() {
    const [searchKey,setSearchKey]=useState();
    const {cart,setProductsList}=useCartSizeContext();
    const [newProductsList, setNewProductsList]=useState([]);
    const [clicked,setClicked]=useState(false);

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
            FreshCart
        </div>

        <div className={styles.list}>
            <li >  <Link href={`/`}  className={styles.Link}> Shop </Link>  </li>         
            <li >  <Link href={`/`} className={styles.Link}> Contact </Link>  </li>        
        </div>

        <div className={styles.search}>
            <input type="text" placeholder='  search here...' className={styles.input} value={searchKey} onChange={e=>handleSearch(e)} />
        </div>

        <Link href={'/products/cart'} className={styles.Link}> <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} /> <sup className={styles.sup}> {cart.length} </sup> </Link>
      </nav>
      {
        !clicked? <FontAwesomeIcon icon={faBars} className={styles.menueIcon} onClick={()=>setClicked(true)}/> :
        <>  <FontAwesomeIcon icon={faXmark} className={styles.menueIcon} onClick={()=>setClicked(false)}/>
            <div className={styles.sidebar}> 
                <Link href={`/`}  className={styles.Link} onClick={()=>setClicked(false)}> <h1>Shop</h1> </Link>
                <Link href={`/`}  className={styles.Link} onClick={()=>setClicked(false)}> <h1>Contact</h1> </Link>
                <Link href={`/products/cart`}  className={styles.Link} onClick={()=>setClicked(false)}> <h1>Cart</h1> </Link> 
            </div>  
        </>
      }
      
    </div>
  )
}

export default Navbar
