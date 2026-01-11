import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"40px"}}>
        <p style={{fontSize:"23px"}}>La ruta que ingresaste no existe ☹️</p>
        <img src="/error.png" style={{width:"300px", borderRadius:"10%"}}></img>
        <Link to="/"><Button className="nav_button" variant="primary" style={{fontSize:"20px", margin:"20px"}}>Ir al Home</Button></Link>
    </div>
  )
}

export default NotFound