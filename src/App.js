import style from "./App.module.css";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters, { Rick } from "./data.js";

function App() {
  return (
    <div className={style.App}>
      <div>
        <div>
          <SearchBar onSearch={(charactersID) => window.alert(charactersID)} />
        </div>
        <div>
          <Card
            name={Rick.name}
            species={Rick.species}
            gender={Rick.gender}
            image={Rick.image}
            onClose={() =>
              window.alert(`La card de ${Rick.name} se ah cerrado `)
            }
          />
        </div>
        <div>
          <Cards characters={characters} />
        </div>
      </div>
    </div>
  );
}

export default App;
