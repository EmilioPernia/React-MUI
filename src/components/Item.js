import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Item = ({item, onDelete}) => {

  const [liClassName, setLiClassName]= useState('list-group-item')

  const activeClass=()=>{
    setLiClassName('list-group-item active')
  }

  const deactiveClass=()=>{
    setLiClassName('list-group-item')
  }

  return (
    <div>
        <li className={liClassName} onMouseOver={activeClass} onMouseLeave={deactiveClass}>{item.name}</li>
        
        <div className='btn-group'>
          <Link to={`/item/${item.id}`}><button className="btn btn-outline-secondary">+</button></Link>
          <Link to={`/editItem/${item.id}`}><button className="btn btn-outline-success">Edit</button></Link>
          <button className="btn btn-outline-danger" onClick={()=>onDelete(item.id)}>Delete</button>
        </div>
        
        
    </div>
    
    
  )
}

export default Item