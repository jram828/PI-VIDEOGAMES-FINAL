/* eslint-disable */
import "./landing.css";
import imgControl from "../../../src/assets/ICONOVIDEOGAMECONTROL.png";
import imgUsuario from "../../../src/assets/usuario.png";
import { useState } from "react";
import validarusuario from "../../utils/validarusuario";

const Landing = ({ login, clickHandlerCrear }) => {
  //console.log("Login: ", login);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Debe ingresar un email",
    password: "Debe ingresar un password",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });

    setErrors(
      validarusuario({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className="divLanding">
      <div className="titulolanding">
        <h1>Proyecto Individual Soy HENRY</h1>
        <h1>Videogames</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="formlanding">
          <div className="InputLogin">
            <label className="label" htmlFor="email">
              Email:
              <input
                name="email"
                type="text"
                id="email"
                placeholder="Ingrese su Email"
                value={userData.email}
                onChange={handleChange}
              />
            </label>
            <br />

            {errors.email ? (
              <h2 className="error">{errors.email}</h2>
            ) : (
              <h2 className="error2">. </h2>
            )}
            {/* <hr /> */}
            <br />
            <label className="label" htmlFor="password">
              Contraseña
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Ingrese su contraseña"
                value={userData.password}
                onChange={handleChange}
              />
            </label>
            <br />

            {errors.password ? (
              <h2 className="error">{errors.password}</h2>
            ) : (
              <h2 className="error2"> .</h2>
            )}
            {/* <hr /> */}
          </div>
          <div className="botoneslanding">
            <img
              className="buttonLanding"
              src={imgUsuario}
              alt="Imagen usuario"
              onClick={clickHandlerCrear}
            ></img>

            <img
              className="buttonLanding"
              src={imgControl}
              alt="Imagen control"
              onClick={submitHandler}
            ></img>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Landing;
