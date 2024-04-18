import "../../App.css";
import foto from '../../assets/FOTOJULIAN.jpg'
import videojuego from "../../assets/videojuego.gif";
import './about.css'

const About = () => {
  
  return (
    <div>
      <div className="divAbout">
        <div className="divFoto">
          <img className="fotoAbout" src={foto} alt="Foto Autor" />
        </div>
        <div className="containerAbout">
          <h2 className="parrafoAbout">
            Esta aplicación está siendo desarrollada por Julián Arango. <br />
            <br />
            Permite visualizar los videojuegos más famosos a lo largo de la
            historia.
          </h2>

          <h4>
            Es posible crear videojuegos u obtenerlos desde la API
            https://rawg.io/, que es la base de datos más grande de
            Videojuegos.Se pueden encontrar más de 500.000 juegos
          </h4>
          <h4>
            Además, cuenta con la posibilidad de identificar si los videojuegos
            fueron creados por el usuario u obtenidos de la API, y filtrarlos de
            acuerdo a este criterio. Permite filtrar los resultados por Género y
            ordenarlos.
          </h4>
        </div>
        <br />
      </div>

      <div className="containervideo">
        <img className="video" src={videojuego} alt="Gif Videojuego" />
      </div>
    </div>
  ); 
}
export default About