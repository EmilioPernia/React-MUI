import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'

const Register = () => {

    const navigate = useNavigate()
    const {user,setUser} = useContext(UserContext)

    //set const/form
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [emailCheck,setEmailCheck] = useState('')
    const [password,setPassword] = useState('')
    const [passwordCheck,setPasswordCheck] = useState('')
    const [gender, setGender] = useState('')
    const [style, setStyle] = useState('')
    const [sport,setSport] = useState('')
    const [favItem, setFavItem] = useState('')
    const [formalStyle,setFormalStyle] = useState('')


    const checkLoggin = (e) => {
        e.preventDefault()
        if(!firstname || !lastname || !email || !password || !passwordCheck || !emailCheck || !gender){
            alert("All inputs must be filled")
            //se puede setear todo a ('')
        }else{
            console.log("Firstname: " + firstname + ", lastname: " + lastname)
            alert("You've successfully registered")
            setUser(email)
            navigate("/")

        }
        
    }


    return (
        <div>
            <h3>Register</h3>
            <div>
                <form action="submit" onSubmit={checkLoggin}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Firstname</label>
                        <input className='form-control'
                            type="text"
                            placeholder='enter firstname'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Lastname</label>
                        <input className='form-control'
                            type="text"
                            placeholder='enter lastname'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Gender</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select gender</option>
                            <option value="man">Man</option>
                            <option value="woman">Woman</option>
                            <option value="no-binary">No binary</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">User email</label>
                        <input  className='form-control' 
                                type="email" 
                                placeholder='e@mail.com' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Repeat email</label>
                        <input  className='form-control' 
                                type="email" 
                                placeholder='e@mail.com'
                                value={emailCheck}
                                onChange={(e)=>setEmailCheck(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Password</label>
                        <input  className='form-control' 
                                type="password" 
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Repeat password</label>
                        <input  className='form-control' 
                                type="password" 
                                value={passwordCheck}
                                onChange={(e)=>setPasswordCheck(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Optional: Favourite Section</label>
                        <select value={style} onChange={(e) => setStyle(e.target.value)}>
                            <option value="">Select favourite</option>
                            <option value="sports">Sports</option>
                            <option value="urban">Urban</option>
                            <option value="formal">Suits and dresses</option>
                        </select>
                    </div>
                    {(() => {
                        switch (style) {
                            case "sports":
                                return (
                                    <div className='mb-3'>
                                        <label className='form-label' htmlFor="">Select your favourite sport </label>
                                        <select value={sport} onChange={(e) => setSport(e.target.value)}>
                                            <option value="">Select favourite</option>
                                            <option value="basquetball">Basquetball</option>
                                            <option value="football">Football</option>
                                            <option value="tennis">Tennis</option>
                                            <option value="box">Box</option>
                                            <option value="running">Running</option>
                                         </select>
                                    </div>
                                )

                            case "urban":
                                return (
                                    <div className='mb-3'>
                                        <label className='form-label' htmlFor="">Name your favourite shopping item:</label>
                                        <input  className='form-control' 
                                                type="text" 
                                                value={favItem}
                                                onChange={(e)=>setFavItem(e.target.value)}
                                        />
                                    </div>
                                )

                            case "formal":
                                return (
                                    <div className='mb-3'>
                                        <label className='form-label' htmlFor="">Select Item</label>
                                        <select value={formalStyle} onChange={(e) => setFormalStyle(e.target.value)}>
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

                    <input className='btn btn-primary' type="submit" value="Register" />
                </form>
            </div>

        </div>
    )
}

export default Register