import {Link} from 'react-router-dom'
import styles from './ClotheListItem.module.scss'
export default function ClotheListItem(
    {cloth}

){       
                  
    return(
        <>
            <div key={cloth._id} className={styles.card}>
            <h3>{cloth.title} </h3>
            <h3>{cloth.img} </h3>
            <button><Link to = {`/clothe/${cloth._id}` }> More details</Link></button>
            </div>
        </>
    )
}