//import { Badge } from "@material-ui/core";
//import { Search} from "@material-ui/icons";
//import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from '../Logo/Logo'
import { ShoppingCart, UserRound } from 'lucide-react';

//below 
import {useState, useEffect} from 'react'
import * as ordersAPI from '../../utilities/orders-api'


export default function Header(
    {setUser}
){
    const [quantity, setQuantity] = useState(0)
    const [cart, setCart] = useState({})
    useEffect(function(){
        async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();
    }, [])
    useEffect(()=> {
        if (cart.totalQty) {
            setQuantity(cart.totalQty)
        } else {
            setQuantity(0)
        }
    },[cart]) 
 

  
    console.log(cart)
    console.log(quantity)
    // console.log(quantity)




    return (
        <div className={styles.Header}>
           <div className={styles.flex}>
           <Link to ='/home'><Logo /></Link>
           <Link to ='/home' className={styles.link}><h1>Victorian Vintage Clothes</h1></Link>
           </div>
          <UserLogOut setUser={setUser}/>
          <button><Link to="/orders">orders</Link></button>
          <div>
          <Link to = {'/auth'}><UserRound size={32}/> </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ShoppingCart  size={32}/>
          <span>{quantity}</span>
          </div>
          
          
        </div>

    )
}