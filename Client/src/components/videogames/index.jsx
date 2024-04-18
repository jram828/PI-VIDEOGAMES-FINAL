/* eslint-disable */
import "./videogames.css";
import loading from "../../../src/assets/loading.gif";
import { useEffect, useState } from "react";
import Videogame from "../videogame";
import { useDispatch, useSelector } from "react-redux";
import { cleanVideogames, getVideoGames, setPage } from "../../redux/actions";

export const Videogames = ({ onClose }) => {
  // const [Page, setPage] = useState(1);
  const dispatch = useDispatch();
  
  var Loading = useSelector((state) => state.loading);
  var source = useSelector((state) => state.sourceFilter);
  var Page = useSelector((state) => state.page);
  //console.log('Source videogames:' , source)
  if (source === "all") {
    var allVideogames = useSelector((state) => state.allVideogames);
  } else if (source === "favorites") {
    var allVideogames = useSelector((state) => state.myFavorites);
  } else {
    var allVideogames = useSelector((state) => state.foundVideogame);
  }
  
  
  useEffect(() => {
    dispatch(getVideoGames());
  }, [dispatch]);
  

 // console.log('All videogames: ',allVideogames)
  const videoPerPage = 15;

  const nPages = Math.ceil(allVideogames.length / videoPerPage);
  const start = (Page - 1) * videoPerPage;
  const end = start + videoPerPage;

  const videoPageContent = allVideogames.slice(start, end);

  const prevPage = () => {
    if (Page > 1) {
      dispatch(setPage(Page - 1));
    }
  };

  const nextPage = () => {
    if (Page < nPages) {
      dispatch(setPage(Page + 1));
    }
  };

  //console.log("Videogames Cards: ", videoPageContent);
  //console.log('Loading', Loading)
  return (
    <div>
      {nPages !== 0 ? (
        <div className="paginate">
          {" "}
          <button className="botonpage" onClick={prevPage}>
            Anterior
          </button>
          <h3 className="labelpage">
            Página: {Page} de {nPages}
          </h3>
          <button className="botonpage" onClick={nextPage}>
            Siguiente
          </button>
        </div>
      ) : Loading === false ? (
        <div>
          <br />
          <br />
          <h2 className="nogenres">No se encontraron videojuegos</h2>
        </div>
      ) : (
        <div>
          <br />
          <br />
          <br />
          <h2 className="nogenres">Cargando videojuegos</h2>
          <img className="loading" src={loading} alt="loading"></img>
        </div>
      )}
      <div className="cards">
        {videoPageContent.map((videogame) => {
          return (
            <div key={videogame.id}>
              <Videogame videogame={videogame} onClose={onClose} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videogames;
