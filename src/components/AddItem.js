import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddItem = ({onAdd}) => {

  const navigate=useNavigate()

  const[name,setName]=useState("")
  const[color,setColor]=useState("")
  const[price,setPrice]=useState("")
  const[existance,setExistance]=useState(false)

  function onSubmit(e){
    e.preventDefault()
    if(!name||!color||!price){
      alert("All inputs must be filled ")
    }else if(price<=0){
      alert("price must be a positive number")
    }else{
      onAdd({name,color,price,existance})
      // hacer un redirect a Home
      navigate("/")
    }

    setName("");
    setColor("");
    setPrice(""); 
    setExistance(false)
  }

  return (
    <form>
      <div>
        <label>Item Name</label>
        <input  type="text" 
                placeholder="Item name"
                value={name}
                onChange={(e)=>setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Item Color</label>
        <input  type="text" 
                placeholder="Item color"
                value={color}
                onChange={(e)=>setColor(e.target.value)} 
        />
      </div>
      <div>
        <label>Item Price</label>
        <input  type="number" 
                placeholder="0"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Existance</label>
        <input  type='checkbox'
                checked={existance}
                value={existance}
                onChange={(e)=>setExistance(e.currentTarget.checked)} 
        />
      </div>
      <button onClick={onSubmit}>SUBMIT</button> 
      <Link to="/"><button className="btn btn-outline-secondary">BACK</button></Link>
        
    </form>
  )
}

export default AddItem