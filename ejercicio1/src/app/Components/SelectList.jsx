import { List } from "./List"
import { data } from "../data"
import css from "./css/SelectList.css"
import { useState } from "react"
export const SelectList =({List,setList}) =>{


  const [quantityInputs, setQuantityInputs] = useState({});

  const handleQuantityChange = (movieId, e) => {
    const newQuantityInputs = { ...quantityInputs, [movieId]: parseInt(e.target.value, 10) || 0 };
    setQuantityInputs(newQuantityInputs);

    const updatedList = List.map((movie) => {
      if (movie.id === movieId) {

        const newQuantity = newQuantityInputs[movieId] || 1;     
        const totalPrice = newQuantity <= 1 ? movie.price * newQuantity : movie.price * newQuantity;

        return { ...movie, quantity: newQuantity, totalPrice: totalPrice };
      }
      return movie;
    });

    setList(updatedList);
  };

     // Verificar si hay un objeto seleccionado
  if (!List || List.length === 0) {
    return <div className="msjError">No hay película seleccionada</div>;
  }

  return (
    <article className="articleSelectList">
    <h1>Detalles de las películas seleccionadas:</h1>
    {List.map((movie) => (

      <section key={movie.id} className="sectionSelectList">
    <div className="containerList">
        <p>Cantidad : {movie.quantity }</p>
        <p>Nombre : {movie.name} </p>
        <p>Precio : ${movie.totalPrice}</p>
        <figure className="boxImage">
          <img src={movie.urlImage} alt="{imagen de {movie.name}}" className="img" />
        </figure>
      <div>
      <label htmlFor={`quantityInput-${movie.id}`}>Cantidad:</label>
         <input
                type="number"
                id={`quantityInput-${movie.id}`}
                className="inputNumber"
                value={quantityInputs[movie.id] || 1}
                onChange={(e) => handleQuantityChange(movie.id, e)} />
      </div>
    </div>
      </section>
    ))}
  </article>
  );
}