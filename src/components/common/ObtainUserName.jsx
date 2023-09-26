import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ObtainUserName = ({ setUserName, userName }) => {

  const handleAcceptClick = () => {

    
    const newUserName = document.getElementById("FielMemory").value;
    localStorage.setItem('userName', (newUserName));
    setUserName(newUserName); // lo declaro en una variable para darle tiempo al estado

  };

  
 //(document.getElementById("standard-basic").value)
  return (
    <div>
      <h1>¡Hola! ¿Podrías decirme tu nombre?</h1>
      <form >
        <TextField
          id="FielMemory"
          variant="standard"
          label="Nombre"
          name="nombre" />
    <div style={{ marginTop: "20px" }}>
        <Button type="button" onClick={handleAcceptClick} variant="outlined">
          Aceptar
        </Button>
        </div>
      </form>
    </div>
  );
};

export default ObtainUserName;
