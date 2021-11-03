import "./App.css";
import { useEffect, useState } from "react";
import Students from "./components/Students/Students";
import Taca from "./img/taca.png";

function App() {
  const [wizards, setWizards] = useState([]);
  const [tribruxo, setTribruxo] = useState([]);
  const [screenStart, setScreenStart] = useState(false);
  const [screenWizards, setScreenWizards] = useState(false);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setWizards(response))
      .catch((err) => console.log(err));
  }, []);

  function secondScreen() {
    setScreenStart(true);
  }

  let tri = [wizards[Math.floor(Math.random() * wizards.length - 1)]];

  function chooseWizards() {
    tri.push(wizards[Math.floor(Math.random() * wizards.length - 2)]);

    tri.push(wizards[Math.floor(Math.random() * wizards.length - 1)]);

    console.log(tri);
    setScreenWizards(true);
    setTribruxo([...tri]);
  }

  function reset() {
    tri = [wizards[Math.floor(Math.random() * wizards.length - 1)]];
    setTribruxo([]);
    setScreenStart(false);
    setScreenWizards(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        {screenStart === false ? (
          <div className="Menu">
            <h1>Torneio Tribruxo</h1>
            <img
              src="https://imagensemoldes.com.br/wp-content/uploads/2020/06/Perfeito-Bras%C3%A3o-Harry-Potter-PNG-1024x1024.png"
              alt="brasao hogwarts"
            />
            <button onClick={() => secondScreen()}>Iniciar</button>
          </div>
        ) : screenWizards === false ? (
          <div className="Sortition">
            <img src={Taca} alt="taça tribruxo" />
            <button onClick={chooseWizards}>Sortear Campeões</button>
          </div>
        ) : (
          <div className="final">
            <button onClick={reset}>Tentar Novamente</button>
            <Students list={tribruxo} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
