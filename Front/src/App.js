import style from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Error404 from "./components/Error404/Error404";
import Favorites from "./components/Favorites/favorites";
import axios from "axios";

function App() {
  function onSearch(character) {
    const URL_BASE = "http://localhost:3001/rickandmorty/character";
    // const API_KEY = "9fc2ee82c5e8.be8d85f149238870102d";
    fetch(`${URL_BASE}/${character}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("Hay un error en el Id o el personaje ya existe");
        }
      });
  }

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [accseso, setacceso] = useState(false);

  useEffect(() => {
    !accseso && navigate("/");
  }, [accseso]);

  const onClose = (id) => {
    setCharacters(characters.filter((characters) => characters.id !== id));
  };

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setacceso(data);
      access && navigate("/home");
    });
  }

  const location = useLocation();

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="/error404" element={<Error404 />} />

        <Route path="*" element={<Navigate to="/error404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
