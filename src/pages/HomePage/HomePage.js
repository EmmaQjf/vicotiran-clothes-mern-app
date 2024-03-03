import { useState, useEffect, useRef } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';
import * as ordersAPI from '../../utilities/orders-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import ClothesList from '../../components/ClothesList/ClothesList'

export default function HomePage(){
    // get all categories
    const [categories, setCategories] = useState([])
    // const [individualCategory, setIndividualCategory] = useState(null)
    // useEffect(() => {
    //     const fetchindividualCategory = async () => {
    //         try {
    //            const data = await categoriesAPI.getById()
    //            setIndividualCategory(data) 
              
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchindividualCategory()
    // }, [])
   
   

    const [activeCat, setActiveCat] = useState('');
    const [clothesList, setClothesList] = useState('');
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
    
      console.log(categories)
      console.log(categoriesRef.current)
      console.log(activeCat)
    return(
        <>
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