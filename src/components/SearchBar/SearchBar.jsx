import React from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   return (
      <div className={style.contenedor}>
       <label className={style.text} for="inputDeBusqueda">Buscar un personaje:</label>
        <input className={style.inputDeBusqueda} type='search' />
      <button className={style.button} onClick={(id)=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
