/* eslint-disable */
import { useState } from "react";
import "./createvideogame.css";
import "../../App.css";
import { Button2 } from "../Mystyles";
import validar from "../../utils/validacion";

const CrearVideogame = ({ crearVideogame }) => {
  const [userDataCrear, setUserDataCrear] = useState({
    name: "",
    description: "",
    image: "",
    platforms: [],
    launchDate: "",
    rating: "",
    genres: [],
  });
  
  const [errors, setErrors] = useState({
    name: "Debe ingresar un nombre",
    description: "Debe ingresar una descripción",
    image: "Debe contener una URL",
    launchDate: "Debe seleccionar una fecha",
    rating: "Debe ingresar un rating",
    platforms: "Debe seleccionar al menos una plataforma",
    genres: "Debe seleccionar al menos un género",
  });
  // console.log('errores:',errors)
  const handleChangeCrear = (e) => {

    if (e.target.parentNode.parentNode.parentNode.id === "genres") {
      console.log("Parent node id: ", e.target.parentNode.parentNode.parentNode.id );
      if (e.target.checked) {
        setUserDataCrear({
          ...userDataCrear,
          genres: userDataCrear.genres.concat(e.target.value),
        });
        //console.log("Genres handle change crear: ", userDataCrear.genres);
        setErrors(
          validar({
            ...userDataCrear,
            genres: userDataCrear.genres.concat(e.target.value),
          })
        );
      } else {
        setUserDataCrear({
          ...userDataCrear,
          genres: userDataCrear.genres.filter((x) => e.target.value !== x),
        });
            
      }
    } else if (e.target.parentNode.parentNode.id === "platforms") {
      if (e.target.checked) {
        setUserDataCrear({
          ...userDataCrear,
          platforms: userDataCrear.platforms.concat(e.target.value),
        });
        //console.log("Plataformas: ", userDataCrear.platforms);
         setErrors(
           validar({
             ...userDataCrear,
             platforms: userDataCrear.genres.concat(e.target.value),
           })
         );
      } else {
        setUserDataCrear({
          ...userDataCrear,
          platforms: userDataCrear.platforms.filter((x) => e.target.name !== x),
        });
      }
    } else {
      setUserDataCrear({
        ...userDataCrear,
        [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
      });
      setErrors(
        validar({
          ...userDataCrear,
          [e.target.name]: e.target.value,
        })
      );
    }
    console.log("target: ", e.target.name);
    console.log("value: ", e.target.value);
    
  
  };

  const submitHandlerCrear = (e) => {
    e.preventDefault();
    crearVideogame(userDataCrear);
  };

  return (
    <div>
      <form onSubmit={submitHandlerCrear}>
        <h2 className="titulo">CREAR VIDEOGAME</h2>

        <div className="Crear">
          <div className="inputcrear">
            <div className="nombre">
              <label className="labelcrear" htmlFor="name">
                Nombre:
              </label>
              <input
                className="inputname"
                name="name"
                id="name"
                type="text"
                placeholder="Ingrese el nombre"
                value={userDataCrear.name}
                onChange={handleChangeCrear}
              />
              {errors.name !== "" && <h2 className="error">{errors.name}</h2>}
            </div>

            <div className="image">
              <label className="labelcrear" htmlFor="image">
                Imagen:
              </label>
              <input
                name="image"
                type="text"
                id="image"
                placeholder="Ingrese la url de la imagen"
                value={userDataCrear.image}
                onChange={handleChangeCrear}
              />
              {errors.image !== "" && <h2 className="error">{errors.image}</h2>}
            </div>
            <div className="rating">
              <label className="labelcrear" htmlFor="rating">
                Rating:
              </label>
              <input
                name="rating"
                type="number"
                id="rating"
                placeholder="Ingrese el rating"
                value={userDataCrear.rating}
                onChange={handleChangeCrear}
              />
              {errors.rating !== "" && (
                <h2 className="error">{errors.rating}</h2>
              )}
            </div>
            <div className="launchDate">
              <label className="labelcrear" htmlFor="launchDate">
                Fecha Lanzamiento:
              </label>
              <input
                name="launchDate"
                className="date"
                type="date"
                id="launchDate"
                value={userDataCrear.launchDate}
                onChange={handleChangeCrear}
              />
              {errors.launchDate !== "" && (
                <h2 className="error">{errors.launchDate}</h2>
              )}
            </div>
            <div className="description">
              <label className="labelcrear" htmlFor="description">
                Descripción:
              </label>
              <input
                name="description"
                type="text"
                id="description"
                placeholder="Ingrese la descripción"
                value={userDataCrear.description}
                onChange={handleChangeCrear}
                // cols="40"
                // rows="4"
                className="inputdescription"
              />
              {errors.description !== "" && (
                <h2 className="error">{errors.description}</h2>
              )}
            </div>
          </div>

          <div className="contenedorgenres">
            <hr style={{ borderStyle: "none" }} />
            <label className="labelgenres">
              Generos:
              <div
                name="genres"
                id="genres"
                className="genres"
                onChange={handleChangeCrear}
                key="genres"
              >
                <div className="genrescontainer1">
                  <div className="Action">
                    <input
                      name="Action"
                      value="4"
                      type="checkbox"
                      id="Action"
                    />
                    <label htmlFor="Action">Action</label>
                  </div>

                  <div className="Adventure">
                    <input
                      name="Adventure"
                      value="3"
                      type="checkbox"
                      id="Adventure"
                    />
                    <label htmlFor="Adventure">Adventure</label>
                  </div>

                  <div className="Arcade">
                    <input
                      name="Arcade"
                      value="11"
                      type="checkbox"
                      id="Arcade"
                    />
                    <label htmlFor="Arcade">Arcade</label>
                  </div>
                  <div className="BoardGames">
                    <input
                      name="BoardGames"
                      value="28"
                      type="checkbox"
                      id="BoardGames"
                    />
                    <label htmlFor="BoardGames">Board Games</label>
                  </div>
                </div>
                <div className="genrescontainer2">
                  <div className="Card">
                    <input name="Card" value="17" type="checkbox" id="Card" />
                    <label htmlFor="Card">Card</label>
                  </div>
                  <div className="Casual">
                    <input
                      name="Casual"
                      value="40"
                      type="checkbox"
                      id="Casual"
                    />
                    <label htmlFor="Casual">Casual</label>
                  </div>
                  <div className="Educational">
                    <input
                      name="Educational"
                      value="34"
                      type="checkbox"
                      id="Educational"
                    />
                    <label htmlFor="Educational">Educational</label>
                  </div>
                </div>
                <div className="genrescontainer3">
                  <div className="Family">
                    <input
                      name="Family"
                      value="19"
                      type="checkbox"
                      id="Family"
                    />
                    <label htmlFor="Family">Family</label>
                  </div>
                  <div className="Fighting">
                    <input
                      name="Fighting"
                      value="6"
                      type="checkbox"
                      id="Fighting"
                    />
                    <label htmlFor="Fighting">Fighting</label>
                  </div>
                  <div className="indie">
                    <input name="Indie" value="51" type="checkbox" id="Indie" />
                    <label htmlFor="Indie">Indie</label>
                  </div>
                </div>
                <div className="genrescontainer4">
                  <div className="Massively-Multiplayer">
                    <input
                      name="Massively-Multiplayer"
                      value="59"
                      type="checkbox"
                      id="Massively-Multiplayer"
                    />
                    <label htmlFor="Massively-Multiplayer">
                      Massively-Multiplayer
                    </label>
                  </div>
                  <div className="Platformer">
                    <input
                      name="Platformer"
                      value="83"
                      type="checkbox"
                      id="Platformer"
                    />

                    <label htmlFor="Platformer">Platformer</label>
                  </div>
                  <div className="Puzzle">
                    <input
                      name="Puzzle"
                      value="7"
                      type="checkbox"
                      id="Puzzle"
                    />
                    <label htmlFor="Puzzle">Puzzle</label>
                  </div>
                </div>
                <div className="genrescontainer5">
                  <div className="Racing">
                    <input
                      name="Racing"
                      value="1"
                      type="checkbox"
                      id="Racing"
                    />
                    <label htmlFor="Racing">Racing</label>
                  </div>
                  <div className="RPG">
                    <input name="RPG" value="5" type="checkbox" id="RPG" />
                    <label htmlFor="RPG">RPG</label>
                  </div>

                  <div className="Shooter">
                    <input
                      name="Shooter"
                      value="2"
                      type="checkbox"
                      id="Shooter"
                    />
                    <label htmlFor="Shooter">Shooter</label>
                  </div>
                </div>
                <div className="genrescontainer6">
                  <div className="Simulation">
                    <input
                      name="Simulation"
                      value="14"
                      type="checkbox"
                      id="Simulation"
                    />
                    <label htmlFor="Simulation">Simulation</label>
                  </div>
                  <div className="Sports">
                    <input
                      name="Sports"
                      value="15"
                      type="checkbox"
                      id="Sports"
                    />
                    <label htmlFor="Sports">Sports</label>
                  </div>
                  <div className="Strategy">
                    <input
                      name="Strategy"
                      value="10"
                      type="checkbox"
                      id="Strategy"
                    />

                    <label htmlFor="Strategy">Strategy</label>
                  </div>
                </div>
              </div>
            </label>
          </div>

          {errors.genres !== "" && <h2 className="error">{errors.genres}</h2>}
          <label className="labelgenres">
            Plataformas:
            <div
              id="platforms"
              name="platforms"
              className="platforms"
              onChange={handleChangeCrear}
            >
              <div>
                <input name="PC" type="checkbox" id="PC" value="PC" />
                <label htmlFor="PC">PC</label>
              </div>
              <div>
                <input name="iOS" type="checkbox" id="iOS" value="iOS" />
                <label htmlFor="iOS">iOS</label>
              </div>
              <div>
                <input
                  name="Android"
                  type="checkbox"
                  id="Android"
                  value="Android"
                />
                <label htmlFor="Android">Android.</label>
              </div>
              <div>
                <input name="macOS" type="checkbox" id="macOS" value="macOS" />
                <label htmlFor="macOS">Mac OS</label>
              </div>
              <div>
                <input
                  name="PlayStation 4"
                  type="checkbox"
                  id="PlayStation 4"
                  value="PlayStation 4"
                />
                <label htmlFor="PlayStation 4">Play Station 4</label>
              </div>
              <div>
                <input
                  name="PlayStation 5"
                  type="checkbox"
                  id="PlayStation 5"
                  value="PlayStation 5"
                />
                <label htmlFor="PlayStation 5">PlayStation 5.</label>
              </div>
              <div>
                <input name="XBOX" type="checkbox" id="XBOX" value="XBOX" />
                <label htmlFor="XBOX">XBOX</label>
              </div>
              <div>
                <input
                  name="PS Vita"
                  type="checkbox"
                  id="PS Vita"
                  value="PS Vita"
                />
                <label htmlFor="PS Vita">PS Vita</label>
              </div>
            </div>
          </label>
          {errors.platforms !== "" && (
            <h2 className="error">{errors.platforms}</h2>
          )}
          <hr style={{ borderStyle: "none" }} />
          <hr style={{ borderStyle: "none" }} />
          <hr style={{ borderStyle: "none" }} />
          <Button2
            type="submit"
            disabled={
              !userDataCrear.name ||
              !userDataCrear.description ||
              !userDataCrear.image ||
              !userDataCrear.launchDate ||
              !userDataCrear.rating ||
              userDataCrear.genres.length === 0 ||
              userDataCrear.platforms.length === 0
            }
          >
            Crear
          </Button2>
        </div>
      </form>
    </div>
  );
};
export default CrearVideogame;
