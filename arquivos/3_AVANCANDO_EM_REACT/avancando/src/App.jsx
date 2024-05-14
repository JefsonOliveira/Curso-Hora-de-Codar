import "./App.css";

// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - Renderização de lista
import ListRender from "./components/ListRender";

// 7 - Render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - Props
import ShowUserName from "./components/ShowUserName";

// 9 - Desestruturando props
import CarDetails from "./components/CarDetails.jsx";

// 11 - Renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 3200 },
];

// 12 - Fragments
import Fragment from "./components/Fragment.jsx";

// 13 - Children
import Container from "./components/Container.jsx";

// 14 - Função em prop
import ExecuteFunction from "./components/ExecuteFunction.jsx";

// 15 - State lift
import { useState } from "react";
import Message from "./components/Message.jsx";
import ChangeMessage from "./components/ChangeMessage.jsx";

function App() {

  // 14 - Função prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - State lift
const [message] = useState("");


  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
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

      {/* 8 - Props */}
      <ShowUserName name="Matheus" />

      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho" />

      {/* 10 - Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={123444} color="Branco" />
      <CarDetails km={9987} color="Azul" brand="Audi" />

      {/* 11 - Renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      {/* 12 - Fragments */}
      <Fragment />

      {/* 13 - Children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>

      {/* 14 - Função em prop */}
      <ExecuteFunction myFunction={showMessage} />

      {/* 15 - State lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={ChangeMessage} />
    </div>
  );
}

export default App;
