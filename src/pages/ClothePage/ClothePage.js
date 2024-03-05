import * as ordersAPI from '../../utilities/orders-api';
import * as itemsAPI from '../../utilities/items-api'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Cloth from '../../components/Cloth/Cloth'
import { Link, useNavigate } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import Header from '../../components/Header/Header'
import styles from './ClothePage.module.scss'


export default function ClothePage({
    user, 
    setUser
}){



    const [oneCloth, setOneCloth] = useState({})
    const {id} = useParams()

    const [cart, setCart] = useState(null);
    const navigate = useNavigate();

    useEffect(function(){
        async function fetchACloth(){
            const data = await itemsAPI.getOneItem(id)
            setOneCloth(data)
        }
        fetchACloth()
    },[])

    console.log(oneCloth)

    useEffect(function(){
        async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();
    }, [])

   

    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        setCart(updatedCart);
      }
    
      async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
      }
    
      async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
      }
    return(
     <div className={styles.ClothePage}>
       <Header
       setUser ={setUser}/>
       {/* <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link> */}
       <div className={styles.sections}>
        <div>
        <Cloth 
        cloth = {oneCloth}
        handleAddToOrder={handleAddToOrder}
        id = {id}/>
        </div>

        <div>
        <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
       />
        </div>
        </div>
     </div>
    )
}