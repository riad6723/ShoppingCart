"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function page() {

  const [item,setItem]=useState({});

  useEffect(()=>{
    const id = location.pathname.split('/').pop();
    axios.get(`http://localhost:5000/products/${id}`)
    .then(response=>setItem(response.data[0]))
    .catch(err=>console.log(err))

  },[])
  
  return (
    <div>
    </div>
  )
}

export default page