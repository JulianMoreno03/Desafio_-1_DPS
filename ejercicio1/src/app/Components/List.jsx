'use client';
import { data } from "../data"
import { useState } from "react"
import css from "./css/List.css"
import {SelectList} from "./SelectList"
export const List =()=>{
  
  //Use state para manejar la informacion que se va a guardar en ARREGLO
  const [selectedMovies, setSelectedMovies] = useState([]);
 
  const [selectedMovie, setSelectedMovie] = useState('');
  //captura el evento donde cambio la informacion
  const handleSelectChange = (e) => {
    setSelectedMovie(e.target.value);
  };
// Manejar el clic en el botón
const handleButtonClick = () => {
  if (selectedMovie) {
    const movieToAdd = data.find((movie) => movie.name === selectedMovie);
    setSelectedMovies((prevSelectedMovies) => [...prevSelectedMovies, movieToAdd]);
    console.log("Película seleccionada:", movieToAdd);
  } else {
    console.log("Ninguna película seleccionada");
  }
};
    return (
      <nav className="article">

        <label className="texto">Selecciona una opción:</label>
        <select name="select" className="select"  onChange={handleSelectChange}>

          <option>Selecciona...</option>
          {data.map((movie) => (
           <option key={movie.id} 
           value={movie.name}>
            {movie.name}
          </option>
        ))}
      </select>
      <button onClick={handleButtonClick} className="button">Guardar</button>
      <SelectList List={selectedMovies} setList={setSelectedMovies}/>
    </nav>
    
    )
    
}