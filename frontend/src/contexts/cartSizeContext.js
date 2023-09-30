"use client"
import { createContext, useState, useContext } from "react";
export const cartSizeContext=createContext();

export const useCartSizeContext=()=>{
    const context=useContext(cartSizeContext);
    return context;
}

export default function CartSizeProvider({children}){
    const [cart,setCart]=useState([]);
    const [productsList, setProductsList]=useState([]);

    return ( <cartSizeContext.Provider value={{cart,setCart,productsList,setProductsList}}>{children}</cartSizeContext.Provider> )
}