//import { Badge } from "@material-ui/core";
//import { Search} from "@material-ui/icons";
//import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from '../Logo/Logo'
import { ShoppingCart, UserRound } from 'lucide-react';

export default function Header(){
    return (
        <div className={styles.Header}>
           <div className={styles.flex}>
           <Logo />
           <h1>Victorian Vintage Clothes</h1>
           </div>
          <UserLogOut />
          <div>
          <Link to = {'/auth'}><UserRound /> </Link>
          <ShoppingCart />
          </div>
        </div>

    )
}