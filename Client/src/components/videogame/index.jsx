/* eslint-disable */
import "../../App.css";
import "./videogame.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {removeFav, addFav } from "../../redux/actions";
import { useEffect, useState } from "react";

const Videogame = (props) => {
  //console.log('Props Videogame',props)
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const { name, image, id, genres, rating, newRating} =
    props.videogame;
  //console.log('Video id:',id)
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === false) {
      setIsFav(true);
      dispatch(addFav(props.videogame));
    } else if (isFav === true) {
      setIsFav(false);
      console.log(props.videogame.id)
      dispatch(removeFav(props.videogame.id));
    }
  };
// console.log('My favorites: ', myFavorites)
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.videogame.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.videogame.id]);

  return (
    <div className="container">
      <div className="card" key={id}>
        {isFav ? (
          <button className="botonfav" onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className="botonfav" onClick={handleFavorite}>
            🤍
          </button>
        )}

        <button
          className="boton2"
          onClick={() => {
            props.onClose(id);
          }}
        >
          X
        </button>
        <img className="photo" src={image} alt="Imagen del videojuego" />
        <h1 style={{ fontSize: "20px" }}>{name}</h1>
        <h4>
          Rating: {rating}
          {newRating}
        </h4>
        {/* <h4>Plataforms: {platforms}</h4> */}
        <h4>Géneros: {genres}</h4>
        <Link to={`/detail/${id}`}>
          <h3
            style={{
              color: "white",
              backgroundColor: "gray",
              fontSize: "14px",
            }}
          >
            Ver detalles
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Videogame;