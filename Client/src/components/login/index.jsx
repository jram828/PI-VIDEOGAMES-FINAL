/* eslint-disable */
import { useState } from "react";
import "../../App.css";
import { Button3 } from "../Mystyles";

const Form = ({ login, clickHandlerCrear }) => {
  //console.log('Login: ',login)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="InputLogin">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            name="email"
            type="text"
            placeholder="Ingrese su Email"
            value={userData.email}
            onChange={handleChange}
          />
          <br />

          <label className="label" htmlFor="password">
            Contraseña:
          </label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={userData.password}
            onChange={handleChange}
          />

          <hr style={{ borderStyle: "none" }} />
          <Button3
            style={{ margin: "10px" }}
            type="submit"
            disabled={!userData.email || !userData.password}
          >
            INGRESAR
          </Button3>
          <br />
          <Button3 type="button" onClick={clickHandlerCrear}>
            CREAR USUARIO
          </Button3>
        </div>
      </form>
    </div>
  );
};
export default Form;
