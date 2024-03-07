// export default function ClothesList(){
//     return (
//         <h1>This is the ClothesList</h1>
//     )
// }


import * as categoriesAPI from '../../utilities/categories-api';
import {useState,useEffect} from 'react'
import ClotheListItem from '../ClotheListItem/ClotheListItem'
import styles from './ClothesList.module.scss'

export default function ClothesList(
    {activeCat,
    categories,
    setCurrentItem,
    showClothPage,
    setShowClothPage}
){
   
    const[clothes, setClothes] = useState([])
    // useEffect(() => {
    //     const fetchClothes = async () => {
    //       try {
    //         const filteredCategories = categories.filter(category => category.name === activeCat);
    //         if (filteredCategories.length > 0) {
    //           const individualCategory = filteredCategories[0];
    //           setClothes(individualCategory.items);
    //         } else {
    //           setClothes([]);
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     fetchClothes();
    //   }, [categories,activeCat]);

    useEffect(() => {
          const fetchClothes = async () => {
            try {
              const fetchIndividualCategory = await categoriesAPI.individualCategory(activeCat);
                setClothes(fetchIndividualCategory.items);
             } catch(error) {
              console.error(error);
            }
          };
          fetchClothes();
        }, [categories,activeCat]);



        
    return(
        <div className={styles.ClothesList}>
        {
            clothes? 
                clothes.map(cloth => 
                    <ClotheListItem
                    key={cloth._id}
                    cloth={cloth} 
                    setCurrentItem={setCurrentItem}
                    showClothPage={showClothPage}
                    setShowClothPage={setShowClothPage}
                   />
                )
        
            : <></>
        }
        </div>
    )
}