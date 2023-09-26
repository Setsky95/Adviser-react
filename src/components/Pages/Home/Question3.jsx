import { Button } from "@mui/material"
import { useContext } from "react";
import { CounterContext } from "../../../context/CounterContext";




const Question3 = () => {
  const {contador, setContador,reducirContador,aumentarContador,reducirContadorMas} = useContext(CounterContext) 

  
    ///////////RETORNA////////////////
  
    
  return (
    <div>

      <h2>¿PREGUNTA 3?</h2>
<Button  onClick={aumentarContador} variant="outlined">Genial  </Button>
<Button onClick={reducirContador} variant="outlined">Regular</Button>
<Button onClick={reducirContadorMas} variant="outlined">Para abajo</Button>

<h2>{contador} </h2>
    </div>
  )
}


export default Question3