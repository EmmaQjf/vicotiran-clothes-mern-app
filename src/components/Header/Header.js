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
    {setUser, 
    quantity,
    setShowOrderCart}
){
    
    return (
        <div className={styles.Header}>
           <div className={styles.flex}>
           <Link to ='/home'><Logo /></Link>
           <Link to ='/home' className={styles.link}><h1>Victorian Vintage Clothes</h1></Link>
           </div>
          <UserLogOut setUser={setUser}/>
          <button><Link to="/orders">orders</Link></button>
          <div>
          {/* <Link to = {'/auth'}><UserRound size={32}/> </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          <div onClick={()=>setShowOrderCart(true)}><ShoppingCart  size={32}/></div>
          <span>{quantity}</span>
          </div>
          
          
        </div>

    )
}