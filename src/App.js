
import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

import Footer from './components/Footer';
import AddItem from './components/AddItem'
import Home from './components/Home'
import ItemInfo from './components/ItemInfo';
import EditItem from './components/EditItem';



function App() {

  const [list,setList] = useState ([]);
  const [selectedItem,setSelectedItem]= useState('');
  const url = 'https://62017a52fdf5090017249a32.mockapi.io/items';


  //hacer fetch del selectedItem
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
  //setSelectedItem con json
  async function getItem(id){
    const i= await fetchItem(id);
    setSelectedItem(i)    
  }

 
  //fetch json
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
  //setList con json
  async function getList(){
    const items= await fetchList();
    setList(items)
  }
  
  
  useEffect(()=>{
    getList()
  },[])

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
      
      <h1>Page Name</h1>
      <BrowserRouter>
        <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-light">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to= "/"> Home </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link navbar-brand" to= "/add"> Add </Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home list={list} onDelete={deleteItem}/>} />
            <Route path="/add" element={<AddItem onAdd={addItem}/>}/>
            <Route path="/item/:id" element={<ItemInfo getItem={getItem} item={selectedItem}/>}/>
            <Route path="/editItem/:id" element={<EditItem list={list} onAdd={modifyItem}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
