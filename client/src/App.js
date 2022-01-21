import './App.css';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {Optener} from './store/actions';
function App() {
  const dispatch=useDispatch();
  const recetas = useSelector(state=>state.recipes);
  useEffect(()=>{
    dispatch(Optener())
  },[])
  return (
    <div className="App">
      {console.log(recetas)}
      <h1>hola esto es la Aplicacion de recetas</h1>
    </div>
  );
}

export default App;
