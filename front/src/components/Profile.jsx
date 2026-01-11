import { Button } from "react-bootstrap"

const Profile = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"40px"}}>
        <p style={{fontSize:"23px", fontWeight:"bold"}}>usuario@mammamia.com</p>
        <Button style={{fontSize:"20px"}}>Cerrar sesión</Button>
    </div>
  )
}

export default Profile