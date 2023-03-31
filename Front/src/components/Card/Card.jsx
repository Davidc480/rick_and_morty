import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import {addFav, removeFav} from "../../redux/actions"

function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   
   const handleFavorite = ()=> {
      if (isFav){
         setIsFav(false);
         removeFav(id) 
      } else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   
   useEffect(()=>{
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true)
         }
         
      });
   }, [myFavorites]);

   return (
      <div className={style.contenedor}>
         <div className={style.tarjeta}>
            <span>
            {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
               ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}
            </span>
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
};

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch)=>{
   return{ 
      addFav: (character)=>{
         dispatch(addFav(character))
      },
      removeFav: (id)=>{
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)