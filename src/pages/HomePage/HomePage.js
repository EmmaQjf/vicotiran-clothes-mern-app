import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as categoriesAPI from '../../utilities/categories-api';
import * as ordersAPI from '../../utilities/orders-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import ClothesList from '../../components/ClothesList/ClothesList'
import Header from '../../components/Header/Header'
import styles from './HomePage.module.scss'

import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Cloth from '../../components/Cloth/Cloth'
import * as itemsAPI from '../../utilities/items-api'
import { set } from '../../../models/itemSchema';

export default function HomePage(
    { user, setUser }
){
    // get all categories
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);
  

    useEffect(function() {
        async function getAllCategories(){
          const categories = await categoriesAPI.getAll()
          setCategories(categories)
          categoriesRef.current = categories.reduce((cats, item) => {
            const cat =item.name;
            return [...cats, cat]}
        ,[])
        setActiveCat(categoriesRef.current[0]);
    }
        getAllCategories();
    }, []);

    useEffect(function(){
        async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();
    }, [])
       
        const[currentItem, setCurrentItem] = useState({})
        const[showClothPage, setShowClothPage] = useState(true)

        const navigate = useNavigate();

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


          //deal with the cart 
          const [quantity, setQuantity] = useState(0)
          useEffect(()=> {
            if (cart) {
                setQuantity(cart.totalQty)
            } else {
                setQuantity(0)
            }
        },[cart]) 
     
    return(

        <div className={styles.HomePage}>
           
           <Header setUser={setUser} quantity={quantity}/>
            {/* <UserLogOut
            setUser={setUser}/> */}
            <h1>Welcome! {user.name}</h1>

            <CategoryList
            categories={categories}
            allcategories = {categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
            setShowClothPage={setShowClothPage}
            />
            {
                showClothPage? 
                <ClothesList 
                activeCat={activeCat}
                categories={categories}
                setCurrentItem={setCurrentItem}
                showClothPage={showClothPage}
                setShowClothPage={setShowClothPage}
                />
                :<div className={styles.ClothPage}>
                    <div>
                        <Cloth 
                        cloth = {currentItem}
                        handleAddToOrder={handleAddToOrder}
                        />
                    </div>
            
                    <div>
                        <OrderDetail
                        order={cart}
                        handleChangeQty={handleChangeQty}
                        handleCheckout={handleCheckout}
                        setQuantity ={setQuantity}
                        />
                    </div>
                </div>
            }
            

    </div>
)
}