import {Link} from 'react-router-dom'
export default function Clothe(
    {cloth,
    handleAddToOrder
  }

){       
                  
    return(
        <>
        <div>{cloth.title} </div>
        <div>{cloth.desc} </div>
        <div>{cloth.price} </div>
        <div>{cloth.size} </div>
        <div>{cloth.color} </div>
        <button onClick={() => handleAddToOrder(cloth._id)}>
      ADD
        </button>  
        
    </>
    )
}