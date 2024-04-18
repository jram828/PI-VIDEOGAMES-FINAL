/* eslint-disable */
import { useEffect } from "react";
import { setLoading } from "../../redux/actions";
import Videogames from "../videogames";
import { useDispatch } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(setLoading(false));
   }, [dispatch]);

  return (
    <div className="favorites">
      <Videogames/>
    </div>
  );
};

export default Favorites;
