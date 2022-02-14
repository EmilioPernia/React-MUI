import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const ItemInfo = ({ item, getItem}) => {

    const { id } = useParams();
    const i = item;

    useEffect(()=>{
        getItem(id)
    },[])

    console.log(item)

    if (!i) {
        return <h4>"Loading..." </h4>
    } else {
        return (
            <div>
                <h1>Item Info</h1>
                <div>
                    <img src='https://via.placeholder.com/350x200' alt='product' />
                    <ul className="list-group">
                        <li className="list-group-item">{i.name}</li>
                        <li className="list-group-item">{i.color}</li>
                        <li className="list-group-item">{i.price}</li>
                        <li className="list-group-item">{i.existance ? "Yes" : "No"}</li>
                        <li className="list-group-item"><Link to="/"><button className="btn btn-outline-secondary">BACK</button></Link></li>
                    </ul>
                </div>
            </div>
        )
    }



}

export default ItemInfo