import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map ((personaje) => (
      <Card
         name={personaje.name}
         status={personaje.status}
         species={personaje.species}
         gender={personaje.gender}
         origin={personaje.origin.name}
         image={personaje.image}
         onClose={() => window.alert('Emulación')}
         key={personaje.id}
      />)
      )}
   </div>;
}
