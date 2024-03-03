import {Link} from 'react-router-dom'
export default function ClotheItem(
    {cloth}

){       
                  
    return(
        <>
            <div key={cloth._id}>
            <h3>{cloth.title} </h3>
            <h3>{cloth.desc} </h3>
            <button><Link to = {`/clothe/${cloth._id}` }> More details</Link></button>
            </div>
        </>
    )
}