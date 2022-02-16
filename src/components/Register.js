import React from 'react'
import { useState } from 'react'

const Register = () => {

    const [gender,setGender]=useState('')
    const [style, setStyle]=useState('')

    const checkLoggin=(e)=>{
        e.preventDefault()
        console.log('click')
    }

    console.log(gender)
    console.log(style)
    

  return (
    <div>
        <h3>Register</h3>
        <div>
            <form action="submit" onSubmit={checkLoggin}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Firstname</label>
                    <input className='form-control' type="text" placeholder='enter firstname' />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Lastname</label>
                    <input className='form-control' type="text" placeholder='enter lastname' />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Gender</label>
                    <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option value="">Select gender</option>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                        <option value="no-binary">No binary</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">User email</label>
                    <input className='form-control' type="email" placeholder='e@mail.com'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Repeat email</label>
                    <input className='form-control' type="email" placeholder='e@mail.com'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Password</label>
                    <input className='form-control' type="password"/>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Repeat password</label>
                    <input className='form-control' type="password"/>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Favourite Section</label>
                    <select value={style} onChange={(e)=>setStyle(e.target.value)}>
                        <option value="">Select favourite</option>
                        <option value="sports">Sports</option>
                        <option value="urban">Urban</option>
                        <option value="formal">Suits and dresses</option>
                    </select>
                </div>
                {(()=>{
                    switch (style) {
                        case "sports":
                            return (
                              <div className='mb-3'>
                                <label className='form-label' htmlFor="">Type your favourite sport</label>
                                <input className='form-control' type="text"/>
                            </div>  
                            )                            
                        
                        case "urban":
                            return(
                                <div className='mb-3'>
                                    <label className='form-label' htmlFor="">Name your favourite shopping item:</label>
                                    <input className='form-control' type="text"/>
                                </div>
                            )
                                                   
                        case "formal":
                            return(
                            <div className='mb-3'>
                                <label className='form-label' htmlFor="">Select Item</label>
                                <select value={style} onChange={(e)=>setStyle(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="suits">Suits</option>
                                    <option value="shirt">Shirt</option>
                                    <option value="shoes">Shoes</option>
                                    <option value="belts">Belts</option>
                                    <option value="ties">Ties</option>
                                </select>
                            </div>
                            )
                            
                    
                        default:
                            break;
                        }
                    } 
                )()}

                <input className='btn btn-primary' type="submit" value="Register"/>
            </form>
        </div>
        
    </div>
  )
}

export default Register