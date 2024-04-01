import * as categoriesAPI from '../../utilities/categories-api';
import {useState,useEffect} from 'react'
import ClotheListItem from '../ClotheListItem/ClotheListItem'
import styles from './SearchClothesList.module.scss'

export default function SearchClothesList(
    {clothes,
        setCurrentItem,
        showClothPage,
        setShowClothPage}
){
   
    return(
        <div className={styles.SearchClothesList}>
        {
            clothes? 
                clothes.map(cloth => 
                    <ClotheListItem
                    key={cloth._id}
                    cloth={cloth} 
                    setCurrentItem={setCurrentItem}
                    showClothPage={showClothPage}
                    setShowClothPage={setShowClothPage}
                   />)
            : <></>
        }
        </div>
    )
}