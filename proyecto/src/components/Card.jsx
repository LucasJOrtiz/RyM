import React from "react";

export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}> X </button>
         <h2>Nombre: {props.name}</h2>
         <h2>Estado: {props.status}</h2>
         <h2>Especie: {props.species}</h2>
         <h2>Género: {props.gender}</h2>
         <h2>Origen: {props.origin}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}
