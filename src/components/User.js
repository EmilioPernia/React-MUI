import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'

const User = () => {

  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext);

  const checkLoggin=(e)=>{
      e.preventDefault()
    if(email && password){
        
        alert(email + "logged successfully")
        setUser(email)
        navigate("/")
        //else handle 
    }else{
        alert("both fields must be filled")
    }

    setEmail('');
    setPassword('');
    
  }

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('')

  return (
    <div>
        <h3>User Login</h3>
        <div>
        <Link to="/register"><button className='btn btn-outline-secondary'>Register</button></Link>
            <form action="submit" onSubmit={checkLoggin}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">User Email</label>
                    <input 
                        className='form-control' 
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Password</label>
                    <input 
                        className='form-control' 
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <input className='btn btn-primary' type="submit" value="Login"/>
            </form>
        </div>
        
    </div>
  )
}

export default User