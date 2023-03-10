import React from "react";
import Style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav ({onSearch}){
    return (
        <div className={Style.contenedor}>
            <div className={Style.links}>
            <span className={Style.espacio}> 
                <Link to="/home">
                    <p>Home</p>
                </Link>
            </span>
            <span> 
                <Link to="/about">
                    <p>About</p>
                </Link>
            </span>
            </div>
        <div className={Style.nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
        </div>
    )
}