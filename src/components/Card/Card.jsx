import React from "react";
import style from "./Card.module.css"

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.contenedor}>
         <div className={style.tarjeta}>
         <div className={style.contenedorButton}>
            <button className={style.button} onClick={()=> onClose(id)}>X</button>
         </div>
            <img  className={style.image} src={image} alt="" />
            <div className={style.propiedades}>
               <h2 className={style.name}>{name} </h2>
            <h2 className={style.species}>Specie: {species} </h2>
         <h2 className={style.gender}>Gender: {gender} </h2>
            </div>
         </div>
      </div>
   );
}
