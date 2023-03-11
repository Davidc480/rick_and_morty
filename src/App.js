import style from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Error404 from "./components/Error404/Error404";

function App() {
  function onSearch(character) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "9fc2ee82c5e8.be8d85f149238870102d";
    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
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

  const onClose = (id) => {
    setCharacters(characters.filter((characters) => characters.id !== id));
  };

  const location = useLocation();

  return (
    <div className={style.App}>
      <Routes>
        {location.pathname === "/" ? (
          <Route path="/" element={<Form />} />
        ) : (
          <Nav onSearch={onSearch} />
        )}

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="/error404" element={<Error404 />} />

        <Route path="*" element={<Navigate to="/error404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
