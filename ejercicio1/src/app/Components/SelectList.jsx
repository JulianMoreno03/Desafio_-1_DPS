import { List } from "./List"
import { data } from "../data"
import css from "./css/SelectList.css"
import { useState } from "react"
export const SelectList =({List,setList}) =>{


  const [quantityInputs, setQuantityInputs] = useState({});

  //Toda esta funcion nos va a servir para que al momento de que el usuario ponga otra cantidad
  //se va actualizar la cantidad 
  // se va a multiplicar por el precio
  // y se va a actualizar el precio
  //y luego se va a mostrar todo actualizado
  const handleQuantityChange = (movieId, e) => {
    const newQuantityInputs = { ...quantityInputs, [movieId]: parseInt(e.target.value, 10) || 1 };

    // Validación para asegurar que la cantidad esté entre 0 y 10
  if (newQuantityInputs[movieId] <= 1) {
    newQuantityInputs[movieId] = 1;
  } else if (newQuantityInputs[movieId] > 10) {
    newQuantityInputs[movieId] = 10;
  } 
  
    setQuantityInputs(newQuantityInputs);

    const updatedList = List.map((movie) => {
      if (movie.id === movieId) {
        const newQuantity = newQuantityInputs[movieId] || 0;     
        const totalPrice = newQuantity <= 0 ? movie.price : movie.price * newQuantity;

        return { ...movie, quantity: newQuantity, totalPrice: totalPrice };
      }
      return movie;
    });

    setList(updatedList);
  };

  //Funcion para eliminar la pelicula atravez de su id
  const handleRemoveMovie = (movieId) => {
    const updatedList = List.filter((movie) => movie.id !== movieId);
    setList(updatedList);
  };

  //Calcula el total a pagar
  const totalAmount = List.reduce((total, movie) => total + movie.totalPrice, 0);


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
      <label htmlFor={`quantityInput${movie.id}`}>Cantidad:</label>
         <input
                type="number"
                id={`quantityInput-${movie.id}`}
                className="inputNumber"
                value={quantityInputs[movie.id] || 1}
                onChange={(e) => handleQuantityChange(movie.id, e)} />
      </div>
      <button onClick={() => handleRemoveMovie(movie.id)} className="btnDelete">X</button>
    </div>
    
      </section>
    ))}
     <div className="TotalPago">
      <p>Total a Pagar: ${totalAmount.toFixed(2)}</p>
    </div>
  </article>
  );
}