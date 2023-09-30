import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"; // Importa useState
import { CounterContext } from "../../../context/CounterContext";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/system/Unstable_Grid';
import Advice from "./Advice";


const Question1 = () => {
  const { category, setCategory, setContador, reducirContador, aumentarContador, reducirContadorMas } = useContext(CounterContext);
const [question, setQuestion ]= useState([]);
const [contador1, setContador1] = useState(10);
const [contadorQuestion, setcontadorQuestion] = useState(0);

function contadorSuma () {
  setContador1(contador1+10),
  setcontadorQuestion(contadorQuestion + 1)
  console.log(`contador` ,contadorQuestion)

}
function contadorResta () {
  setContador1(contador1-10),
  setcontadorQuestion(contadorQuestion+1)
}
function contadorActualiza () {
  setContador1(contador1+1),
  setcontadorQuestion(contadorQuestion+1)
}

console.log(`contador` ,contadorQuestion)


const randomID = Math.floor(Math.random() * 12) + 1;



///////LLAMAR A FIREBASE///////

useEffect (()=> {
   let ref = collection (dataBase, category)
getDocs(ref).then ( res =>  {
  
  setQuestion(res.docs[randomID].data())})

}, [contador1]); 





    ///////////RETORNA////////////////
    return contadorQuestion > 5 ? ( 
<Advice contador1={contador1} /> // Si se hicieron mas de 5 preguntas pasa al consejo
    ) : (
      question.length === 0 ? (
        <>
          <Grid container justifyContent="center">
            <Box sx={{ width: 300 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </Grid>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>{question.question} </h2>
          <Link to="/Q1">
            <Button onClick={contadorResta} variant="outlined">no</Button>
            <Button onClick={contadorSuma} variant="outlined">si</Button>
            <Button onClick={contadorActualiza} variant="outlined">No se</Button>
          </Link>
          <h2>{contador1}</h2>
        </div>
      )
    );
    
 }
export default Question1 