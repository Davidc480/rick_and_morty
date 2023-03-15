import React from "react";
import Style from "./Form.module.css"
import Validation from "./Validation";
import { useState } from "react";


const  Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, errors, setErrors);
        
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
      };

    
    return(
        
        <form  onSubmit={submitHandler} className={Style.contenedor}>

        <div className={Style.pocision}>
        <div>
            <label className={Style.username} htmlFor="username">username:  </label>
             <input 
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              />
              <p> {errors.username} </p>
        </div>
       
        <div>
            <label className={Style.password} htmlfor="password">Password:    </label>
             <input 
              type="text"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              />
        </div>
        <div>
            <button className={Style.button} type="submit">Login</button>
        </div>
              </div>
       </form>
    );
};

export default Form;