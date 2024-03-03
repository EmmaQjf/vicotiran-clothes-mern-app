// export default function ClothesList(){
//     return (
//         <h1>This is the ClothesList</h1>
//     )
// }


import * as categoriesAPI from '../../utilities/categories-api';
import {useState,useEffect} from 'react'
import ClotheItem from '../ClotheItem/ClothesItem'

export default function ClothesList(
    {activeCat,
    categories}
){
   
    const[clothes, setClothes] = useState([])
    useEffect(() => {
        const fetchClothes = async () => {
          try {
            const filteredCategories = categories.filter(category => category.name === activeCat);
            if (filteredCategories.length > 0) {
              const individualCategory = filteredCategories[0];
              setClothes(individualCategory.items);
            } else {
              setClothes([]);
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchClothes();
      }, [categories,activeCat]);
console.log(clothes)
    return(
        <>
        {
            clothes? 
                clothes.map(cloth => 
                    <ClotheItem
                    key={cloth._id}
                    cloth={cloth} />
                )
        
            : <>No clothes</>
        }
        </>
    )
}