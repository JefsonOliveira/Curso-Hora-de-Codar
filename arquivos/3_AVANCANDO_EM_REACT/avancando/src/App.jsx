import "./App.css";

// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - Renderização de lista
import ListRender from "./components/ListRender";

//
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="ALguma imagem" />

      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem" />

      {/* 3 - useState */}
      <Data />

      {/* 4 - Render de lista */}
      <ListRender />

      {/* 7 - Render condicional */}
      <ConditionalRender />
    </div>
  );
}

export default App;
