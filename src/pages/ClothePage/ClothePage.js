import * as ordersAPI from '../../utilities/orders-api';
import * as itemsAPI from '../../utilities/items-api'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Cloth from '../../components/Cloth/Cloth'
import { Link, useNavigate } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import Header from '../../components/Header/Header'

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
     <>
       <Header/>
       <h1>This is the ClothePage</h1>
        <Cloth 
        cloth = {oneCloth}
        handleAddToOrder={handleAddToOrder}
        id = {id}/>
        <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
     </>
    )
}