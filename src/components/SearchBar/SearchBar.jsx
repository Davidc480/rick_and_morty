import React from "react";
import style from "./SearchBar.module.css"
import { useState } from "react";


export default function SearchBar({onSearch}) {

   const [search, setSearch] = useState("");

   const handleChange = (event)=>{
      setSearch(event.target.value)
   }

   const handleclick = ()=>{
      onSearch(search)
   }
   
   return (
      <div className={style.contenedor}>
       <label className={style.text} for="inputDeBusqueda">Buscar un personaje:</label>
        <input className={style.inputDeBusqueda} type='search' value={search} onChange={handleChange}/>
      <button className={style.button} onClick={handleclick}>Agregar</button>
      </div>
   );
}
