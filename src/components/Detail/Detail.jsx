import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();

    const [character, setcharacter] = useState({})


    useEffect(()=>{
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const API_KEY = "9fc2ee82c5e8.be8d85f149238870102d";
        axios(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
        .then((Response)=> setcharacter(Response.data))
    }, [])

    return (
       <div>
        {
            character.name  ?(
            <>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.Origin?.name}</p>
            <img src={character.image} alt="img"></img>
            </>)
            : (
                <h3>Loading...</h3>
              )}
       </div>
    )
}


export default Detail;