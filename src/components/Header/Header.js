import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from '../Logo/Logo'
import { ShoppingCart, ListOrdered } from 'lucide-react';
import SearchBar from '../../components/SearchBar/SearchBar'



export default function Header(
    {setUser, 
    quantity,
    setShowOrderCart,
    input,
    setInput
}
){
    
    return (
        <div className={styles.Header}>
            
           <div className={styles.flex}>
            <Link to ='/home'><Logo /></Link>
            <Link to ='/home' className={styles.link}><h1>Victorian Vintage Clothes</h1></Link>
           </div>
           <SearchBar input={input} setInput={setInput}/>
           <UserLogOut setUser={setUser}/>
           <div><Link to="/orders"><ListOrdered size={48}/></Link></div>
           <div>
          {/* <Link to = {'/auth'}><UserRound size={32}/> </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
           <div className={styles.container}onClick={()=>setShowOrderCart(true)}><ShoppingCart  size={48}/> <span className={styles.cartQuantity}>{quantity}</span></div>
           </div>
  
        </div>
    )
}