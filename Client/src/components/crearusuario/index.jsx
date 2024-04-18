/* eslint-disable */
import { useState } from "react";
import "./crearusuario.css";
import { Button3 } from "../Mystyles";
import validarusuario from "../../utils/validarusuario";

const CrearUsuario = ({ crearUsuario }) => {
  const [userDataCrear, setUserDataCrear] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChangeCrear = (e) => {
    setUserDataCrear({
      ...userDataCrear,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });

    setErrors(
      validarusuario({
        ...userDataCrear,
        [e.target.name]: e.target.value,
      })
    );
  };

  const submitHandlerCrear = (e) => {
    e.preventDefault();
    crearUsuario(userDataCrear);
  };

  return (
    <div>
      <h1>Proyecto Individual Soy HENRY</h1>
      <h1>Videogames</h1>
      <form onSubmit={submitHandlerCrear}>
        <h2 className="titulo2">CREAR USUARIO</h2>

        <div className="InputLogin">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Ingrese su Email"
            value={userDataCrear.email}
            onChange={handleChangeCrear}
          />
          {errors.email !== "" && <h2 className="error">{errors.email}</h2>}
          <br />
          <label className="label" htmlFor="password">
            Contraseña:
          </label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={userDataCrear.password}
            onChange={handleChangeCrear}
          />
          {errors.email !== "" && <h2 className="error">{errors.password}</h2>}
          <br />
          <br />
          <br />
          <Button3
            type="submit"
            disabled={!userDataCrear.email || !userDataCrear.password}
          >
            Crear
          </Button3>
        </div>
      </form>
    </div>
  );
};
export default CrearUsuario;
