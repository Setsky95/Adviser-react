import { createContext, useState } from "react"

export const CounterContext = createContext();

const CounterContextComponent = ({children}) => {
    const [contador, setContador] = useState(0);
    const [category, setCategory] = useState("")

    let unidad = 1
    ////////////////////LOGICA////////////
    const aumentarContador = () => {
        setContador(contador + unidad);
        console.log(contador)

      };

      const reducirContador = () => {
        setContador(contador -1);
        console.log(contador)

      };

      const reducirContadorMas = () => {
        setContador(contador -2);
        console.log(contador)

      };

      const resetContador = () => {
        setContador(contador *0);
        console.log(contador)

      };

let data = {
    contador,
    setContador,
    reducirContador,
    aumentarContador,
    reducirContadorMas,
    resetContador,
    category,
    setCategory,

}
return (
<CounterContext.Provider value={data}>
{children}
</CounterContext.Provider>
  )
}

export default CounterContextComponent