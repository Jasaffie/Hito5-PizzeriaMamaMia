import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [exito, setExito] = useState("");
  const [error, setError] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    const checkDatos = !email.trim() || !password.trim() || !cpassword.trim();
    if (checkDatos) {
      setError(alert("Todos los campos son obligatorios (no pueden estar vacíos)"));
      return;
    }
    if (password.length < 6 && cpassword.length < 6) {
      setError(alert("El password debe tener al menos 6 caracteres"));
      return;
    }
    const checkPassword = password !== cpassword;
    if (checkPassword) {
      setError(alert("El password y la confirmación del password deben ser iguales"));
      return;
    }
    console.log("Datos válidos:", { checkDatos });
    alert("Registro exitoso 🍕");

    setExito(true);
    setError(false);
    setEmail("");
    setPassword("");
    setCpassword("");
  };

  return (
    <>
      <h1 style={{display:"flex", justifyContent:"center", marginTop:"50px", marginBottom:"20px", fontSize:"38px"}}>Registro</h1>
      <form className="formulario" style={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: "20px", marginBottom: "50px", fontSize: "18px"}}
        onSubmit={(e) => {validarDatos(e)}}
      >
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirma tu contraseña"
            onChange={(e) => setCpassword(e.target.value)}
            value={cpassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Register;
