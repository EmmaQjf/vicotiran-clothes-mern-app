import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import * as categoriesAPI from '../../utilities/categories-api';
import * as ordersAPI from '../../utilities/orders-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import ClothesList from '../../components/ClothesList/ClothesList'
import Header from '../../components/Header/Header'



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
        console.log(user)
    return(
        <>
           
           <Header setUser={setUser}/>
            {/* <UserLogOut
            setUser={setUser}/> */}
            <h1>Welcome! {user.name}</h1>

            <CategoryList
            categories={categories}
            allcategories = {categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
            />

            <ClothesList 
            activeCat={activeCat}
            categories={categories}
            />

    </>
)
}