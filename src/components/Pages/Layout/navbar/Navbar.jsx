import { Link, Outlet } from "react-router-dom"
import Footer from "../footer/Footer"

const Navbar = () => {
  return (
<div style={{ textAlign: 'center'}}><Link to="/"   >
  <div style={{ background: 'grey', marginBottom: "100px"}} >
     <h1>NAVBAR</h1>
     </div>
     </Link>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Navbar