import {Link} from 'react-router-dom'
import styles from './Cloth.module.scss'
export default function Clothe(
    {cloth,
    handleAddToOrder
  }

){       
                  
    return(
      <div className={styles.Cloth}>
        <div>{cloth.img} </div>
        <div className={styles.box}>
        <div>{cloth.title} </div>
        <div>{cloth.desc} </div>
        <div>{cloth.price} </div>
        <div>{cloth.size} </div>
        <div>{cloth.color} </div>
        <button onClick={() => handleAddToOrder(cloth._id)}>
      ADD
        </button>  
        </div>
        
      </div>
    )
}