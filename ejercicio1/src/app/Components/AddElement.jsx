'use client';
import { data } from "../data"
import { useState } from "react"
export const AddElement =()=>{

    const [selectedOption, setSelectedOption] = useState("");

     // Manejar el cambio en el select
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Manejar el clic en el botón
  const handleGuardarClick = () => {
    // Aquí puedes pasar la información al componente 'use client'
    // Por ahora, solo imprimo en la consola para demostración
    console.log("Información seleccionada:", selectedOption);
  };

  const AddElement = ({ onSelectedInfo }) => {
    const handleGuardarClick = () => {
      // Llama a la función onSelectedInfo con la información seleccionada
      onSelectedInfo(selectedOption);
    };
}
    return (

    <div>
      <label>Selecciona una opción:</label>

      <select name="select" onChange={handleSelectChange} value={selectedOption}>
        <option value="">Selecciona...</option>
         {/* Hacemo un mapeo, que lo que hace es recorrer todo mi json, y muestran los nombre
         adentro de mi select */}
        {data.map((data, index) => (
          <option key={index} value={data}>
            {data.name}
          </option>
        ))}
      </select>
      <button onClick={handleGuardarClick}>Guardar</button>
    </div>
    )
}