import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import classes from "../styles/LoginPage.module.css";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    login(e, email, password);
  };

  return (
    <div className={`${classes.LoginFont}`}>
      <form onSubmit={handleSubmit}>
        <h1 style={{color : 'white'}}>Ingresa a AS Presupuesto PTE</h1>
        <div>
          <label className="form-label" style={{color : 'white'}}>Correo</label>
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <label className="col-form-label" style={{color : 'white'}}>Contrasena</label>
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Ingresar
        </button>
      </form>
    </div>
  );
}
