import React from "react";
import Style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav ({onSearch}){
    return (
        <div className={Style.contenedor}> 
                <Link to="/home">
                    <p>Home</p>
                </Link>
                <Link to="/about">
                    <p>About</p>
                </Link>
        <div className={Style.nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
        </div>
    )
}