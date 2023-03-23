import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Style from "./Detail.module.css"
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();

    const [character, setcharacter] = useState({})


    useEffect(()=>{
        const URL_BASE = "http://localhost:3001/rickandmorty/character";
        // const API_KEY = "9fc2ee82c5e8.be8d85f149238870102d";
        axios(`${URL_BASE}/${detailId}`)
        .then((Response)=> setcharacter(Response.data))
    }, [])

    return (
       <div className={Style.contenedor}>
        {
            character.name  ?(
            <>
                <div className={Style.tarjeta}>
            <h2 className={Style.titulo}>{character.name}</h2>
                  <div className={Style.propi}>
                    <p>{character.status}</p>
                      <p>{character.species}</p>
                     <p>{character.gender}</p>
                    <p>{character.Origin?.name}</p>
                  </div>
            </div>
            <img className={Style.img} src={character.image} alt="img"></img>
            </>)
            : (
                <h3 className={Style.loading}>Loading...</h3>
              )}
       </div>
    )
}


export default Detail;