
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {Optener} from './store/actions';

import {Route,Routes} from 'react-router-dom'
import Home from './containers/Home'
import NavBar from './containers/NavBar'
import Recipes from './containers/Recipes'
import Form from "./containers/Form";
import Busquedas from "./containers/Busquedas";
import InfoCard from "./containers/InfoCard";
import "./App.css"
function App() {
  
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(Optener())
  },[])
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/search" element={<Busquedas/>}/>
        <Route path="/recipes/:id" element={<InfoCard/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
