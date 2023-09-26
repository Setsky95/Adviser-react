import { Button } from "@mui/material"
import { useContext } from "react";
import { CounterContext } from "../../../context/CounterContext";
import { Link } from "react-router-dom";



const Category = () => {
  const { category, setCategory} = useContext(CounterContext);

    ///////////RETORNA////////////////
  console.log(category);
    
  return (
    <div>

      <h2>¿Qué temas están aquejando tu vida?</h2>

      <Link to ="/Q1">
 <Button onClick={() => setCategory("workQuestions")} variant="outlined">Trabajo</Button>
<Button onClick={() => setCategory("familyQuestions")} variant="outlined">Familia</Button>
<Button onClick={() => setCategory("love")} variant="outlined">Amor</Button>
<Button onClick={() => setCategory("friends")} variant="outlined">Amistad</Button>
</Link>


    </div>
  )
}


export default Category