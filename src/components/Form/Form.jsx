import React from "react";
import Style from "./Form.module.css"
import Validation from "./Validation";


export default function Form() {

    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    });

    const handleInputChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})
        // Validation({...userData, [property]: value}, setErrors, errors)
        
    };
    
    const [errors, setErrors] = React.useState({
        username: "",
        password: "",
    });
    
    const submitHandler = (event)=>{
        event.preventDefault();
        alert("Login exitoso")
    }
    
    return(
        
        <form onSubmit={submitHandler} className={Style.contenedor}>

            
 

        <div className={Style.pocision}>
        <div>
            <label className={Style.username} form="username">username:  </label>
             <input 
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              />
        <div>{errors.username}</div>
        </div>
        <br></br>
        <div>
            <label className={Style.password} form="password">Password:    </label>
             <input 
              type="text"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              />
        <div>
            <button className={Style.button} type="submit">Login</button>
        </div>
        </div>
              </div>
       </form>
    )
}