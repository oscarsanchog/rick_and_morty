import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Details/Details";
import ErrorPage from "./components/Error/ErrorPage";
import Form from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const email = 'oscar.sancho.gonzalez@gmail.com'
const password = '123asd'

function App() {
  const location = useLocation() // para el renderizado condicional
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(() => { // Esto es para verificar que el ususario siempre se loguee, y no se pueda cambiar manualmente de URL
    !access && navigate('/')
  }, [access])

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className={style.body}> 
      { // renderizado condicional
        location.pathname !== '/' 
        && <Nav onSearch={onSearch}
        access={access}
        setAccess={setAccess} />
      }

      <Routes>
        <Route 
          path='/'
          element={<Form login={login}/>}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={<ErrorPage />} />
        
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
