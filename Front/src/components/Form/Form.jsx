import React from "react";
import Style from "./Form.module.css"
// import Validation from "./Validation";
import { useState } from "react";


const  Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        // Validation({...userData, [property]: value}, errors, setErrors);
        
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
      };

    
    return(
        
        <form  onSubmit={submitHandler} className={Style.contenedor}>

        <div className={Style.pocision}>
        <div>
            <label className={Style.email} htmlFor="username">email:  </label>
             <input 
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              />
              <p> {errors.email} </p>
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


// <section className={Style.contenedor}>
//             <div className={Style.contenido}>
//                 <div className={Style.caja}>
//                     <h3>Login</h3>
//                     <form  onSubmit={submitHandler} className={Style.contenedor}>
//                         <div className={Style.inputs}>
//                         <label className={Style.email} htmlFor="username"></label>
//                         <input 
//                         type="text"
//                         name="email"
//                         placeholder="Email"
//                         value={userData.email}
//                         onChange={handleInputChange}
//                         />
//                         <p> {errors.email} </p>
//                         </div>
//                         <div className={Style.inputs}>
//                         <label className={Style.password} htmlfor="password"></label>
//                         <input 
//                         type="text"
//                         name="password"
//                         placeholder="Password"
//                         value={userData.password}
//                         onChange={handleInputChange}
//                         />
//                         </div>
//                         <button className={Style.button} type="submit">Iniciar Sesión</button> 
//                     </form>
//                 </div>
//             </div>
//         </section>