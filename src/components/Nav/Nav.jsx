import React from "react";
import Style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";

export default function Nav ({onSearch}){
    return (
        <div className={Style.contenedor}>
        <div className={Style.nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
        </div>
    )
}