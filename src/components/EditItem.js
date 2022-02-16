import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditItem = ({ getItem, item, onAdd }) => {

  const { id } = useParams();
  const navigate=useNavigate();


  useEffect(()=>{
    getItem(id)
  },[])

  //set const/form
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [existance, setExistance] = useState(false)

  // if(item){
  //   //sigo sin estender porque el bucle
  // }
  
  
  //use context

  function onSubmit(e) {
    e.preventDefault();
    if (!name || !color || !price) {
      alert("All inputs must be filled ")
    } else if (price <= 0) {
      alert("price must be a positive number")
    } else {
      onAdd({ id, name, color, price, existance })
      navigate("/")
    }
  }


  if (!item) {
    return <h4>"Loading..." </h4>
  }else{
    return (
      <div>
        <form>
          <div>
            <label>Item Name</label>
            <input type="text"
              placeholder={item.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Item Color</label>
            <input type="text"
              placeholder={item.color}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div>
            <label>Item Price</label>
            <input type="number"
              placeholder={item.price}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Existance</label>
            <input type='checkbox'
              checked={existance}
              value={existance}
              onChange={(e) => setExistance(e.currentTarget.checked)}
            />
          </div>
          <button className="btn btn-outline-success" onClick={onSubmit}>SUBMIT</button>

        </form>
        <Link to="/"><button className="btn btn-outline-secondary">BACK</button></Link>
      </div>
    )
  }

}

export default EditItem