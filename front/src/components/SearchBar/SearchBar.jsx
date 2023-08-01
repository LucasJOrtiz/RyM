import styles from './SearchBar.module.css';
import { useState } from "react";

const SearchBar = ({onSearch}) =>{

   const [id, setId] = useState('');

   const handleChange = (event)=>{
      setId(event.target.value)
   };

   return (
      <div className={styles.div}>
         <input className={styles.input} type='search' value={id}
         onChange={handleChange} placeholder="Encuentra personajes..."/> 
         <button className={styles.btn} onClick={ ()=> onSearch(id)}> AGREGAR </button>
      </div>
   );
}

export default SearchBar
