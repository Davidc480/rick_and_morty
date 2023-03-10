import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.contenedor}>
         <div className={style.tarjeta}>
         <div className={style.contenedorButton}>
            <button className={style.button} onClick={()=> onClose(id)}>X</button>
         </div>
            <img  className={style.image} src={image} alt="" />
            <div className={style.propiedades}>
            <Link to={`/detail/${id}`}>
               <h2 className={style.name}>{name} </h2>
            </Link>
            <h2 className={style.species}>Specie: {species} </h2>
         <h2 className={style.gender}>Gender: {gender} </h2>
            </div>
         </div>
      </div>
   );
}
