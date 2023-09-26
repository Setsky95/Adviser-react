import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { CounterContext } from "../../../context/CounterContext";
import { useContext, useEffect, useState } from "react"; // Importa useState
import ObtainUserName from "../../common/ObtainUserName";


///////////RETORNA//////////


const Home = () => {
  const { contador, setContador } = useContext(CounterContext);
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  /* useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []); */
 
  console.log(userName)
  return !userName? (
    <ObtainUserName setUserName={setUserName} userName={userName} />
  ): (

    <>

    <div>
      <h1>¡Hola {userName}! </h1>
      <h2>¿Listo para comenzar? </h2></div>
    <div>
    <div style={{ marginTop: "20px" }}>
    <Link to ="/category">
<Button  variant="outlined" size="large" onClick={() => setContador(contador * 0)}>Comenzar</Button>
</Link>
 </div>
 <div style={{ marginTop: "20px" }}>
  <form>
<Button type="submit"  size="small"  onClick={()=>localStorage.setItem('userName', "")} >no soy {userName} </Button>
</form> </div>
    </div>


   </>
  )
}

export default Home