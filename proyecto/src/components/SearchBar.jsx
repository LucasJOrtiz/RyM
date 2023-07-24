import React from "react";

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' placeholder="Encuentra personajes..."/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
