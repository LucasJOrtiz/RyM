import style from './Detail.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
const API_KEY = 'key=henrym-hx-mantunez'

const Detail = ()=>{

    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?${API_KEY}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('¡Son solo 826 personajes, No exageres! No te parecen suficientes?');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <img className={style.image} src={character.image && character.image} alt="" />
            <h1 className={style.data}>Nombre: "{character.name && character.name}"</h1>
            <h1 className={style.data}>Estado: "{character.status && character.status}"</h1>
            <h1 className={style.data}>Especie: "{character.species && character.species}"</h1>
            <h1 className={style.data}>Genero: "{character.gender && character.gender}"</h1>
            <h1 className={style.data}>Origen: "{character.origin?.name && character.origin?.name}"</h1>
        </div>
    )
};

export default Detail;