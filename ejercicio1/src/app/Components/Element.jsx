import { useState } from "react"
import { AddElement } from "./AddElement"

export const Element =() =>{

     // Estado para almacenar la información seleccionada
  const [selectedInfo, setSelectedInfo] = useState("");

   // Función para recibir la información seleccionada desde el componente 'AddElement'
   const handleSelectedInfo = (info) => {
    setSelectedInfo(info);
  };
    return(
        <div>
      
      {/* Pasa la función handleSelectedInfo como prop al componente 'AddElement' */}
      <AddElement onSelectedInfo={handleSelectedInfo} />

      {/* Muestra la información seleccionada en este componente */}
      {selectedInfo && (
        <div>
          <h3>Información seleccionada:</h3>
          <p>{selectedInfo}</p>
        </div>
      )}
    </div>
  );
}