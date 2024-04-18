import { useDispatch } from "react-redux";
import { Button2, ContainerNav, Input } from "../Mystyles";
import { useState } from "react";
import { cleanVideogames, getVideoGamesByName, setPage, setSourceFilter } from "../../redux/actions";


const SearchBar = () => {
  const dispatch = useDispatch();
  var [name, setName] = useState("");
//console.log('Name SearchBar: ',name);
  const handleClick = async() => {
    //console.log("Name handleClick: ", name);
    dispatch(setSourceFilter("search"));
    dispatch(cleanVideogames());
    dispatch(setPage(1));
    try {
      dispatch(getVideoGamesByName(name));
      //http://localhost:3001/videogames/name?name=%22Grand%20Theft%20Auto%22
        // console.log(name);
     } catch (error) {
       window.alert("Videogame Not Found!");
     }
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <ContainerNav>
      <></>
      <Input
        value={name}
        onChange={handleChange}
        type="search"
        name="videogame"
        placeholder="Videojuego..."
      />
      <Button2
        onClick={handleClick}
        disabled={!name}
      >
        Buscar
      </Button2>
      <></>
    </ContainerNav>
  );
};

export default SearchBar;
