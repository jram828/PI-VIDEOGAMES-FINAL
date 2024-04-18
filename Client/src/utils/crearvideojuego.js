import axios from "axios";
import { URL } from "../App";

export const crearvideojuego = async (userDataCrear) => {
  console.log('User data: ', userDataCrear)
  const { name, description, image, launchDate, rating, platforms, genres } =
    userDataCrear;
  const newVideogame = await axios.post(`${URL}/videogames`, {
    name,
    description,
    image,
    platforms: platforms.join(", "),
    launchDate,
    rating,
    genres,
  });
  console.log('Newvideogame crear: ', newVideogame)
    return newVideogame
};
