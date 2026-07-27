import { createContext, useEffect, useState } from "react";
import axios from 'axios'
// import {products} from '../assets/frontend_assets/assets'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch]= useState(false);
    const [cartItems,setCartItems] = useState({});
    const [token,setToken] = useState('');
     const [products,setProducts] = useState([]);
    const navigate = useNavigate();

    const addToCart =(itemId,size)=>{
       if(!size){
        toast.error('Select product size')
        return;
       }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
            
        }
        else{
            cartData[itemId] ={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);
    }
    const  getCartCount =()=>{
        let t_count= 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        t_count+=cartItems[items][item];
                    }
                }
                catch(error){
                    console.log(error);
                }
            }
        }
        return t_count;
    }
  const updateQuantity =async(itemId,size,quantity) =>{
    let cartData =structuredClone(cartItems);
    cartData[itemId][size] =quantity;
    setCartItems(cartData);
  }
  const getCartAmount =()=>{
    let totalAmount =0;
    for (const items in cartItems){
        let itemInfo = products.find((product)=>product._id === items );
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item] > 0){
                    totalAmount+=itemInfo.price * cartItems[items][item];
                }
                
                    
                }
                catch(e){
                    console.log(e);
            }
            return totalAmount;
        }
    }

  }

  const getProductsData = async ()=>{
    try {
        const res = await axios.get(backendUrl + '/api/product/list');
        if(res.data.success){
      setProducts(res.data.products)
        }else{
            toast.error(res.data.message)
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
  }
  useEffect(()=>{
     getProductsData();
  },[])
    const value ={
        products , currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount,
        updateQuantity,getCartAmount,navigate,backendUrl,
        setToken,token

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
