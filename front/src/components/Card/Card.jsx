import style from './Card.module.css';
import { Link } from 'react-router-dom';


 const Card = ({id, name, species, gender, image, onClose}) =>{


   return (
      <div className={style.div}>
         <button className={style.btn} onClick={()=> onClose(id)}> X </button>
         <img className={style.image} src={image} alt={name} />

        <Link to={`/detail/${id}/`}>
            <h4 className={style.name}>{name}</h4>
        </Link>

         <div className={style.data}>
            <h2>{species}</h2>
            <hr></hr>
            <h2>{gender}</h2>

         </div>
      </div>
   );
}

export default Card;