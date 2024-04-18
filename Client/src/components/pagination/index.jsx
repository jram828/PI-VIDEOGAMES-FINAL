// import { useState } from "react";
/* eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/actions";


const Paginate = () => {
  const dispatch = useDispatch();
  var source = useSelector((state) => state.sourceFilter);

  if (source === "all") {
    var allVideogames = useSelector((state) => state.allVideogames);
  } else if (source === "favorites") {
    var allVideogames = useSelector((state) => state.myFavorites);
  } else {
    var allVideogames = useSelector((state) => state.foundVideogame);
  }
  // const [Page, setPage] = useState(1)
  var Page = useSelector((state) => state.page);
  const videoPerPage = 15;
  const nPages = Math.ceil(allVideogames.length / videoPerPage);
  const start = (Page - 1) * videoPerPage;
  const end = start + videoPerPage;
  const videoPageContent = allVideogames.slice(start, end);
  // dispatch(setvideoPageContent(videoPageContent));
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
  return (
    <div>
      <div className="paginate">
        {" "}
        <button className="botonpage" onClick={prevPage}>
          Anterior
        </button>
        <h3 className="labelpage">
          {" "}
          Página: {Page} de {nPages}
        </h3>
        <button className="botonpage" onClick={nextPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
};
 

module.exports= { Paginate, videoPageContent };