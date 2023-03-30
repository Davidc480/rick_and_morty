import React from "react";
import Style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav ({onSearch}){
    return (
        <div className={Style.contenedor}> 
        
            <div className={Style.home}>
                <Link to="/home">
                    <p>Home</p>
                </Link>
            </div>
            <div className={Style.about}>
                <Link to="/about">
                    <p>About</p>
                </Link>
          </div>
            <div className={Style.favorites}>
                <Link to="/favorites">
                    <p>Favorites</p>
                </Link>
          </div>
        <div className={Style.nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
        </div>
    )
}