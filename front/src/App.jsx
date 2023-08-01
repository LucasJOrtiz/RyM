import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Forms/Form';

const EMAIL = 'ortizlucasjoel@gmail.com';
const PASSWORD = '123abc';
const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
const API_KEY = 'key=henrym-lucasjortiz'


function App() {
  const {pathname} = useLocation();
  const [characters, setCharacters] = useState([]);
   
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
  
  
  const login = (userData)=> {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
     }
  };

  useEffect(() => {
   !access && navigate('/');
}, [access]);


const onSearch = (id) =>{
   
   if(!id){
      alert('Amigo, ingresa un número. No tengo todo el día.');
      return;
    }
   
   if(id >= 1 && id <= 826){
   axios(`${URL_BASE}/${id}?${API_KEY}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } 
   });

} else {
 alert('¡Son solo 826 personajes, No exageres! No te parecen suficientes?'); 
}

}

const onClose = (id)=>{
   setCharacters(
      characters.filter(char => {
         return char.id !== Number(id)
      })
   )
};

   return (
      <div className='App'>
         <h1>Rick & Morty</h1>
         {pathname !== '/' && <Nav onSearch={onSearch}/>}

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
           
         </Routes>

      </div>
   );
}

export default App;
