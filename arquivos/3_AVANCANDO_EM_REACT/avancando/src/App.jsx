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

function App() {
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
    </div>
  );
}

export default App;
