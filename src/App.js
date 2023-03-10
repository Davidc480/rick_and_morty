import style from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

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

  return (
    <div className={style.App}>
      <div>
        <div>
          <Nav onSearch={onSearch} />
        </div>
        <div>
          <Cards characters={characters} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default App;
