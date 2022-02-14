import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditItem = ({ list, onAdd }) => {


  const navigate=useNavigate()
  const { id } = useParams();
  const i = list.find((item) => {
    return item.id === id
  })

  console.log(i)

  const [name, setName] = useState(i.name)
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [existance, setExistance] = useState(false)

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


  if (!i) {
    return <h4>"Loading..." </h4>
  } else {
    return (

      //si seteo name, color, price y existance para colocarlos con valor en valor del input, creo un bucle

      <div>{!i ? "Loading" :
        <form>
          <div>
            <label>Item Name</label>
            <input type="text"
              placeholder={i.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Item Color</label>
            <input type="text"
              placeholder={i.color}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div>
            <label>Item Price</label>
            <input type="number"
              placeholder={i.price}
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

        </form>}
        <Link to="/"><button className="btn btn-outline-secondary">BACK</button></Link>
      </div>
    )
  }

}

export default EditItem