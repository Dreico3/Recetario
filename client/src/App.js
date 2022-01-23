
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {Optener} from './store/actions';

import {Route,Routes} from 'react-router-dom'
import Home from './containers/Home'
import NavBar from './containers/NavBar'
import Recipes from './containers/Recipes'
function App() {
  
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(Optener())
  },[])
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
      </Routes>
    </div>
  );
}

export default App;
