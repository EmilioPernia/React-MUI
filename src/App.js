//react librery
import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"


//components
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import Home from './components/Home';
import ItemInfo from './components/ItemInfo';
import EditItem from './components/EditItem';
import User from './components/User';
import Register from './components/Register';

export const LoggedValue= React.createContext();



function App() {

  const [list,setList] = useState ([]);
  const [selectedItem,setSelectedItem]= useState('');
  const url = 'https://62017a52fdf5090017249a32.mockapi.io/items';
  const [logged, setLogged]= useState(false);
  const [loggedUser, setLoggedUser]=useState('')

  console.log(logged)

  //toggle logged status
  function toggleLogged(){
    setLogged(!logged)
  }

  function userId(user){
    setLoggedUser(user)
  }


  //fetch selectedItem from Mockapi
  async function fetchItem(id){
    const res = await fetch(`${url}/${id}`);
    try{
      if(res.status===200){
      const data = await res.json();
      return data
    }else{
      alert("Couldn't connect to DB")
    }
    }catch(error){
      console.log(error);
      alert("CONNECTION FAILED")
    }
    
    
  }
  //setSelectedItem with json
  async function getItem(id){
    const i= await fetchItem(id);
    setSelectedItem(i)    
  }

 
  //fetch list from Mockapi
  async function fetchList(){
    const res = await fetch(url);
    try{
      if(res.status===200){
      const data = await res.json();
      return data
    }else{
      alert("Couldn't connect to DB")
    }
    }catch(error){
      console.log(error);
      alert("CONNECTION FAILED")
    }
    
    
  }
  //setList with json
  async function getList(){
    const items= await fetchList();
    setList(items)
  }
  
  //on page load
  useEffect(()=>{
    getList()
  },[])

  //add Item and redirect to home
  const addItem= async (item)=>{
    console.log(item)
    let newItem={
      "name":item.name,
      "color":item.color,
      "price":item.price,
      "existance":item.existance
    };
  try {
      let res = await fetch(url,{
          "method": "POST",
          "headers":{"Content-type":"application/json"},
          "body":JSON.stringify(newItem)
      });
      if(res.status===201){
          console.log(newItem);
          alert("Item successfully added")
          getList();
      }else if((res.status===201)){
        alert("Error:couldn't add new item")
      }
  }catch (error) {
      console.log(error);        
    }
  }

  //modify Item and redireect to home
  const modifyItem=async (item)=>{
    try {
      let res = await fetch(`${url}/${item.id}`,{
          "method": "PUT",
          "headers":{"Content-type":"application/json"},
          "body":JSON.stringify(item)
      });
      if(res.status===200){
          alert("The item with ID: " + item.id + " has been modify successfully")
          getList();
      }
  } catch (error) {
      console.log(error);
      alert("The item could't be modify")      
    }
  }

  //delete Item and get List
  const deleteItem=async(id)=>{
    console.log(id)
    try {
      let res = await fetch(`${url}/${id}`,{
          "method": "DELETE"
      });
      if(res.status===200){
          getList();
          alert("Item : "+id+" has been successfully deleted")
      }else if(res.status===404){
        alert("Couldn't delete item")
      }
  } catch (error) {
      console.log(error);  
      alert("Web Error!")      
    }
  }
 
  return (
    <div className="App">
      <LoggedValue.Provider value={logged} loggedUser={loggedUser}>
      <h1>CRUD WITH REACT</h1>
      <BrowserRouter>
        <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-light">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to= "/"> Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to= "/add"> Add </Link>
            </li>
            {!logged ?
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to= "/user "> User </Link>
            </li> : <button className="btn btn-danger" onClick={toggleLogged}>Logout</button>}
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home list={list} onDelete={deleteItem}/>} />
            <Route path="/add" element={<AddItem onAdd={addItem}/>}/>
            <Route path="/item/:id" element={<ItemInfo getItem={getItem} item={selectedItem}/>}/>
            <Route path="/editItem/:id" element={<EditItem list={list} item={selectedItem} getItem={getItem} onAdd={modifyItem}/>}/>
            <Route path="/user" element={<User onLoggin={toggleLogged} />} />
            <Route path="/register" element={<Register onLoggin={toggleLogged}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </LoggedValue.Provider>
    </div>
  );
}

export default App;
