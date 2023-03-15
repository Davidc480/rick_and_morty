const Validation = (userData, errors, setErrors) => {
  if (!userData.username)
    setErrors({ ...errors, username: "Este campo es requerido" });
  else if (userData.username.length > 35)
    setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
  else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: "Email inválido" });
  } else {
    setErrors({ ...errors, username: "" });
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: "minimo 6, maximo 10 caracteres" });
  } else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe contener al menos un numero" });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export default Validation;
