import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"; // Importa useState
import { CounterContext } from "../../../context/CounterContext";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/system/Unstable_Grid';


const Question1 = () => {
  const { category, setCategory,contador, setContador, reducirContador, aumentarContador, reducirContadorMas } = useContext(CounterContext);
const [question, setQuestion ]= useState([]);

const randomID = Math.floor(Math.random() * 5) + 1;

console.log(category)
///////LLAMAR A FIREBASE///////

useEffect (()=> {
   let ref = collection (dataBase, category)
getDocs(ref).then ( res =>  {
  
  setQuestion(res.docs[randomID].data())})

}, []); 


console.log(randomID)



    ///////////RETORNA////////////////
    return question.length === 0 ? (
      <>
  <Grid container justifyContent="center">
  <Box sx={{ width: 300 }}>

      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      </Box>

      </Grid>
    </>
    ) :  (
      
      <div style={{ textAlign: 'center' }}>
        <h2>{question.question} </h2>
        <Link to="/Q1">
          <Button onClick={aumentarContador} variant="outlined">Genial</Button>
          <Button onClick={reducirContador} variant="outlined">Regular</Button>
          <Button onClick={reducirContadorMas} variant="outlined">Para abajo</Button>
        </Link>
        <h2>{contador}</h2>

      </div>





    )
    
}


export default Question1