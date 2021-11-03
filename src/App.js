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
      .then((response) =>
        setWizards(response.filter((item) => item.image !== ""))
      )
      .catch((err) => console.log(err));
  }, []);

  function secondScreen() {
    setScreenStart(true);
  }

  function chooseWizards() {
    let tri = [wizards[Math.floor(Math.random() * wizards.length)]];
    let two = wizards.filter((item) => item.house !== tri[0].house);
    tri.push(two[Math.floor(Math.random() * two.length)]);
    let one = wizards.filter(
      (item) => item.house !== tri[0].house && item.house !== tri[1].house
    );
    tri.push(one[Math.floor(Math.random() * one.length)]);

    setScreenWizards(true);
    setTribruxo([...tri]);
  }

  function reset() {
    setTribruxo([]);
    setScreenStart(false);
    setScreenWizards(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        <audio
          src="https://www.youtube.com/watch?v=Htaj3o3JD8I&ab_channel=Yume"
          autoPlay="autoplay"
        />
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
