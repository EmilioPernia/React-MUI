

import React from 'react'
import Item from './Item'


const List = ({list, onDelete}) => {

  
  return (
    <div className="list-wrapper">
      <h2>List of Items</h2>
      <ul className="list-group">
        {list.map((item)=>
          <Item key={item.id} item={item} onDelete={onDelete}/>
        )}
      </ul>
    </div>
    
  )
}

export default List