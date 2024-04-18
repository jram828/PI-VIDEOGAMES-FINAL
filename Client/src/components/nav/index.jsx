/* eslint-disable */
import SearchBar from "../searchbar";
import { Link, useLocation } from "react-router-dom";
import { Button, Button3} from "../Mystyles";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanerFilter,
  filterVideogamesGen,
  filterVideogamesOrig,
  getVideoGames,
  orderVideogamesAlfa,
  orderVideogamesRat,
  setPage,
  setSourceFilter,
} from "../../redux/actions";
import "./nav.css";

const Nav = ({logout }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const sourceFilter = useSelector((state) => state.sourceFilter);

  const onClickHome = () => {
    dispatch(setSourceFilter("all"));
    dispatch(getVideoGames());
  };

  const onClickFavorites = () => {
    dispatch(setSourceFilter("favorites"));
  };

  const handleOrderRat = (e) => {
    e.preventDefault();
    dispatch(orderVideogamesRat(e.target.value, sourceFilter));
  };

  const handleOrderAlfa = (e) => {
    e.preventDefault();
    dispatch(orderVideogamesAlfa(e.target.value, sourceFilter));
  };

  const handleFilterGen = (e) => {
    e.preventDefault();
    // dispatch(setPage(1));
    dispatch(filterVideogamesGen(e.target.value, sourceFilter));
  };

  const handleFilterOrig = (e) => {
    e.preventDefault();
    // dispatch(setPage(1));
    //console.log("Handle filter orig: ", e.target.value, sourceFilter);
    dispatch(filterVideogamesOrig(e.target.value, sourceFilter));
  };

  const cleanFilter = () => {
      dispatch(cleanerFilter());
  };
  
  return (
    <div className="contenedornav">
      <div className="botonesnav">
        <Link to="/home">
          <Button className="home" onClick={onClickHome}>
            {" "}
            Home{" "}
          </Button>
        </Link>
        {location.pathname !== "/crearvideojuego" ? (
          <Link to={"/crearvideojuego"}>
            <Button className="crear">Crear Videojuego</Button>
          </Link>
        ) : undefined}
        <Link to="favorites/">
          <Button onClick={onClickFavorites}>Favorites</Button>
        </Link>
        {location.pathname === "/home" ? (
          <SearchBar className="searchbar" />
        ) : undefined}
        <Link to="about/">
          <Button className="about">About</Button>
        </Link>
        <Link to={"/home"} onClick={logout}>
          <Button>Logout</Button>
        </Link>
      </div>

      {location.pathname !== "/about/" &&
      location.pathname !== "/crearvideojuego" ? (
        <div className="containerselect">
          <div className="filtros">
            <select className="filtergenre" onChange={handleFilterGen} name="genreFilter">
              <option value="">Seleccione el género</option>
              <option value="Todos">Todos</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Arcade"> Arcade</option>
              <option value="Genderless">Genderless</option>
              <option value="Board Games">Board Games</option>
              <option value="Card">Card</option>
              <option value="Casual">Casual</option>
              <option value="Educational">Educational</option>
              <option value="Family">Family</option>
              <option value="Fighting">Fighting</option>
              <option value="Indie">Indie</option>
              <option value="Massively Multiplayer">
                Massively Multiplayer
              </option>
              <option value="Platformer">Platformer</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Racing">Racing</option>
              <option value="RPG">RPG</option>
              <option value="Shooter">Shooter</option>
              <option value="Simulation">Simulation</option>
              <option value="Sports">Sports</option>
              <option value="Strategy">Strategy</option>
            </select>
            <select className="filterorigen" onChange={handleFilterOrig} name="filterOrigin">
              <option value="">Seleccione el origen:</option>
              <option value="Todos">Todos</option>
              <option value="API">API</option>
              <option value="Creado">Creado</option>
            </select>
          </div>
          <div className="orden">
            <select className="ordenalfa" onChange={handleOrderAlfa} name="orderAlfa">
              <option value="">Ordenar alfabéticamente</option>
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
            </select>
            <select className="orderrating" onChange={handleOrderRat} name="orderRating">
              <option value="">Ordenar por Rating</option>
              <option value="RA">Ascendente</option>
              <option value="RD">Descendente</option>
            </select>
          </div>
          <div className="limpiar" name="botonLimpiar">
            <Button3 onClick={cleanFilter}>Limpiar filtros</Button3>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default Nav;
