import React from "react"

const Validation = ({userData, setErrors, errors}) =>{

        if (!userData.userName) setErrors({...errors, email:"userName vacío"});
            else {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.userName))
                setErrors({...setErrors, email:""});
                else setErrors({...errors, email: "Email inválido"});
            }
    }

export default Validation;
        
